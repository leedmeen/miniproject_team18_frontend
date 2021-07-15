import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import instance from '../../share/Request';   // axios 전역 설정
import {getCookie} from '../../share/Cookie';

// Actions
const IN_PARTY = 'IN_PARTY';
const OUT_PARTY = 'OUT_PARTY';

const inParty = createAction(IN_PARTY, (adId, userId) => ({adId, userId}));
const outParty = createAction(OUT_PARTY, (adId, userId) => ({adId, userId}));

// initialState
const initialState = {
  list: [],
}

// Middleware actions
const inPartyDB = (adId, userId) => {                      // 참가 신청 리스트에 추가
  return function (dispatch) {
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    instance.post(`/ads/${adId}/parties`, {
      adId: adId,
      userId: userId
    }, {headers: headers}).then(function(response) {
          dispatch(inParty(response.data));
        }).catch(function (err) {
          console.log(err);
        })
  };
};

const outPartyDB = (adId, userId) => {                     // 참가 신청 리스트에서 제외
  return function (dispatch) {
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    console.log(headers);
    instance.delete(`/ads/${adId}/parties`, {
      adId: adId,
      userId: userId
    }, {headers: headers}).then(function(response) {
      dispatch(outParty(response.data));
    }).catch(function(err) {
      console.log(err);
    })
  };
};

// Reducer
export default handleActions(
  {
    [IN_PARTY]: (state, action) => produce(state, (draft) => {
      draft.list.push(...action.payload);
    }),
    [OUT_PARTY]: (state, action) => produce(state, (draft) => {
      const target_idx = draft.list.findIndex(action.payload);
      console.log(action.payload);
      // draft.list.splice(target_idx, 1);
    }),
  }, initialState
);

// Action creator export
const actionCreators = {
  inPartyDB,
  outPartyDB,
};

export { actionCreators };