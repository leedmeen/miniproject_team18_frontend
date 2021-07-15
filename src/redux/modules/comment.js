import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import instance from '../../share/Request';   // axios 전역 설정
import {getCookie} from '../../share/Cookie';
import moment from "moment";

// Actions
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const setComment = createAction(SET_COMMENT, (comment_list) => ({comment_list}));
const addComment = createAction(ADD_COMMENT, (adId, userId, nickname, content) => ({adId, userId, nickname, content}));
const editComment = createAction(EDIT_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (comment) => ({comment}));

// initialState
const initialState = {
  list: [],
}

// 개별 댓글이 갖는 정보
const initialComment = {
  id: 1,  // 댓글의 고유 번호, 백엔드에서 자동 생성
  content: '내용1-1', // 길이 제한 없음, 이모티콘 허용
  createdAt: '2021-07-12 11T20:55:10.526Z', // 작성 일시, 백엔드에서 자동 생성
  userId: 1, // user의 고유 번호
  adId: 1, // 게시글의 고유 번호
};

// Middleware actions
const setCommentDB = (id) => {                      // 댓글 리스트 불러오는 함수
  return function (dispatch, getState, {history}) {
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    instance.get(`/ads/${id}/comments`).then(function(response) {
          dispatch(setComment(response.data));
        }, {headers: headers}).catch(function (err) {
          console.log(`댓글 불러오기 오류: ${err}`);
        })
  };
};

const addCommentDB = (comment) => {                       // 댓글 추가하는 함수 
  return function (dispatch) {
    const axios = require("axios");
    const adId = parseInt(comment.adId);
    const userId = parseInt(comment.userId);
    const content = comment.content;
    const nickname = comment.nickname;
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    axios.post(`http://15.165.18.118/ads/${adId}/comments`, 
    {
      content: content,
      adId: adId,
      userId: userId,
    }, {headers: headers}).then(function(response) {
      dispatch(addComment(adId, userId, nickname, content));
    }).catch(function (error){
      console.log(`댓글 작성하기 오류: ${error}`);
    })
  }
};
const editCommentDB = (comment) => {                    // 댓글 수정하는 함수
  return function (dispatch) {
    const id = parseInt(comment.id);
    const userId = parseInt(comment.userId);
    const adId = parseInt(comment.adId);
    const content = comment.content;
    const createdAt = moment().format("YYYY-MM-DDThh:mm:ss.000z");
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    instance.put(`/ads/${comment.adId}/comments/${comment.id}`, {
      id: id,
      content: content,
      createdAt: createdAt,
      userId: userId,
      adId: adId
    }, {headers: headers}).then(function(response) {
      console.log(response.data);
      const comment = {id: id, content: content, createdAt: createdAt, userId: userId, adId: adId}
      dispatch(editComment(comment));
    }).catch((err) => {
      console.log(`댓글 수정하기 오류: ${err}`);
    })

  };
};
const deleteCommentDB = (adId, commentId) => {
  return function (dispatch) {
    const headers = { authorization: `Bearer ${getCookie('session')}`};
    console.log(adId, commentId);
    instance.delete(`/ads/${adId}/comments/${commentId}`, {headers: headers}).then(function(response) {
      console.log(response.data);
      dispatch(deleteComment(response.data));
    }).catch(function(err) {
      console.log(`댓글 삭제하기 오류: ${err}`);
    })
  };
};

// Reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.list = [...action.payload.comment_list];
    }),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      console.log(action.payload);
      draft.list.unshift({adId: action.payload.adId, userId: action.payload.userId, nickname: action.payload.nickname, content: action.payload.content});
    }),
    [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {
      // draft.list[action.payload.comment.id] = action.payload.comment;
      console.log(action.payload);
    }),
    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
      const target_idx = draft.list.findIndex(action.payload.comment);
      draft.list.splice(target_idx, 1);
    })
  }, initialState
);

// Action creator export
const actionCreators = {
  addComment,
  setCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
};

export { actionCreators };