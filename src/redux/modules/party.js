import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import instance from '../../share/Request';   // axios 전역 설정

// Actions
const IN_PARTY = 'IN_PARTY';
const OUT_PARTY = 'OUT_PARTY';

const inParty = createAction(IN_PARTY, (party) => ({party}));
const outParty = createAction(OUT_PARTY, (party) => ({party}));

// initialState
const initialState = {
  list: [],
}

// Middleware actions
const inPartyDB = (party) => {                      // 참가 신청 리스트에 추가
  return function (dispatch) {
    instance.post(`/ads/${party.adId}/parties`, {
      adId: party.adId,
      userId: party.userId
    }).then(function(response) {
          dispatch(inParty(response.data));
        }).catch(function (err) {
          console.log(err);
        })
  };
};

const outPartyDB = (party) => {                     // 참가 신청 리스트에서 제외
  return function (dispatch) {
    instance.delete(`/ads/${party.adId}/parties`, {
      adId: party.adId,
      userId: party.userId
    }).then(function(response) {
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
      draft.list.push(...action.payload.party);
    }),
    [OUT_PARTY]: (state, action) => produce(state, (draft) => {
      const target_idx = draft.list.findIndex(action.payload.party);
      draft.list.splice(target_idx, 1);
    }),
  }, initialState
);

// Action creator export
const actionCreators = {
  inPartyDB,
  outPartyDB,
};

export { actionCreators };