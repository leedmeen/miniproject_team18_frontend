import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import instance from '../../share/Request';   // axios 전역 설정

// Actions
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const setComment = createAction(SET_COMMENT, (comment_list) => ({comment_list}));
const addComment = createAction(ADD_COMMENT, (comment) => ({comment}));
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
const setCommentDB = (id) => {
  return function (dispatch, getState, {history}) {
    instance.get(`/ads/${id}/comments`).then(function(response) {
          dispatch(setComment(response.data));
        }).catch(function (err) {
          console.log(err);
        })
  };
};

const addCommentDB = (comment) => {             // 404 에러가 뜸...ㅠ뭐가 문제죠 
  return function (dispatch) {
    const axios = require("axios");
    const id = parseInt(comment.id);
    const user_id = parseInt(comment.userId);
    axios.post(`http://15.165.18.118/ads/${id}/comments`, 
    { 
      content: comment.content,
      adId: id,
      userId: user_id,
    }).catch(function (error){
        console.log(error);
      }).then(function(response) {
        console.log(response);
      dispatch(addComment(response.data));
      })
  }
};
// const editCommentDB = () => {
//   return function (dispatch) {
//     instance.delete(`/ads/${adId}/comments/${commentId}`).then(function(response){

//     }).catch

//   };
// };
const deleteCommentDB = (adId, commentId) => {
  return function (dispatch) {
    instance.delete(`/ads/${adId}/comments/${commentId}`).then(function(response) {
      dispatch(deleteComment(response.data));
    }).catch(function(err) {
      console.log(err);
    })
  };
};

// Reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.list.push(...action.payload.comment_list);
    }),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.comment);
    }),
    [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {
      
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
  deleteCommentDB,
};

export { actionCreators };