import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import instance from '../../share/Request';   // axios 전역 설정
import {getCookie} from '../../share/Cookie';
// Actions
const IN_PARTY = 'IN_PARTY';
const OUT_PARTY = 'OUT_PARTY';

const inParty = createAction(IN_PARTY, (adId, userId, nickname) => ({adId, userId, nickname}));
const outParty = createAction(OUT_PARTY, (adId, userId, nickname) => ({adId, userId, nickname}));

// initialState
const initialState = {
  nickname: "",
}

// Middleware actions
const inPartyDB = (adId, userId, nickname) => {                      // 참가 신청 리스트에 추가
  return function (dispatch) {
    const headers = { authorization: `Bearer ${getCookie('session')}`}
    instance.post(`/ads/${adId}/parties`, {
      adId: adId,
      userId: userId,
    }, {headers: headers}).then(function(response) {
          dispatch(inParty(adId, userId, nickname));
        }).catch(function (err) {
          console.log(err);
        })
  };
};

const outPartyDB = (party, nickname) => {               // 참가 신청 리스트에서 제외
  return function (dispatch) {
    const adId = parseInt(party.adId);
    const userId = parseInt(party.userId);
    const headers = { authorization: `Bearer ${getCookie('session')}`}

    instance.delete(`/ads/${adId}/parties/${userId}`,{headers: headers}
    ).then(function(response) {
      dispatch(outParty(party, nickname));
    }).catch(function(err) {
      console.log(err);
    })
  };
};

// Reducer
export default handleActions(
  {
    [IN_PARTY]: (state, action) => produce(state, (draft) => {
      draft.nickname = action.payload.nickname;
    }),
    [OUT_PARTY]: (state, action) => produce(state, (draft) => {
      draft.nickname = "";
      // const target_idx = draft.list.findIndex(action.payload);
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