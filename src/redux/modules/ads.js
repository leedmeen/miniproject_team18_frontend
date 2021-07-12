import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
import axios from "axios";

const SET_ADS = "SET_ADS";
const DELETE = "DELETE";

const setAds = createAction(SET_ADS, (ads_list)=> ({ads_list}));

const setAdsDB = ()=> {
    return function(dispatch){
        const axios = require("axios");
        axios.get("http://localhost:4000/Ad").then(function(response){
            dispatch(setAds(response.data))
        })
    }
}

const initialState = {
    list: [{
        User: {
            id: 1,
            accountId: "asd",
            nickname: "asdasd",
        },
        id: 2,
        title: "프론트 모집",
        category: "React",
        createdAt: "2021-07- 11T20:55:10.526Z",
        content: "공부할사람 모집합니다!",
        Application_user: ["asda", "asdasd"],  //신청 유저목록(userid 또는 고유id)
        max_people: 8,  //모집인원 수
        userId: 2,
    }],
}

export default handleActions(
    {
        [SET_ADS]: (state, action) => produce(state, (draft) => {
            draft.list = [...action.payload.ads_list];
        }),
    },
    initialState
);

const actionCreators = {
    setAds,
    setAdsDB
}

export { actionCreators };

