import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";

const SET_ADS = "SET_ADS";
const DELETE = "DELETE";

const setAds = createAction(SET_ADS, (ad_list)=> ({ad_list}));

const initialState = {
    list: [{
        id: 2,
        title: "title",
        category: "React",
        createdAt: "2021-07- 11T20:55:10.526Z",
        content: "공부할사람 모집합니다!",
        Application_user: ["asda", "asdasd"],  //신청 유저목록(userid 또는 고유id)
        max_people: 8,  //모집인원 수
        userId: 2
    }],
}

export default handleActions(
    {
        [SET_ADS]: (state, action) => produce(state, (draft) => {

        }),
    },
    initialState
);

const actionCreators = {
    setAds,
}

export { actionCreators };

