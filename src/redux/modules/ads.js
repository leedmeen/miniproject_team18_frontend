import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";
import axios from "axios";

const SET_ADS = "SET_ADS";
const DELETE = "DELETE";
const ADD_ADS = "ADD_ADS";
const EDIT_ADS = "EDIT_ADS"

const setAds = createAction(SET_ADS, (ads_list)=> ({ads_list}));
const addAds = createAction(ADD_ADS, (ads_list)=> ({ads_list}));
const editAds = createAction(EDIT_ADS, (ads_list, id)=> ({ads_list, id}))

const setAdsDB = ()=> {
    return function(dispatch){
        const axios = require("axios");
        axios.get("http://localhost:4000/Ad").then(function(response){
            dispatch(setAds(response.data))
        })
    }
}
const addAdsDB = (inputs) => {
    return function(dispatch, getState){
        const axios = require("axios");
        axios.post("http://localhost:4000/Ad", 
        {user:{
            id: 5,
            accountId: "sdfg",
            nickname: "fgh",
            },
            id: inputs.id,
            category: inputs.category,
            content: inputs.content,
            max_people: inputs.people,
            createdAt: "2021-07-12",
            Application_user: ["asdasd","qweqweq"],
            title: "제목제목제목",
            userId: 4}).then(function(response){
            dispatch(addAds())
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
        [ADD_ADS]: (state, action) => produce(state, (draft)=> {
            let idx = draft.list.findIndex((p) => p.id === action.payload.ads_list);
            draft.list.unshift(action.payload.ads_list)
        }),
        [EDIT_ADS]: (state, action) => produce(state, (draft)=> {

        })
    },
    initialState
);

const actionCreators = {
    setAds,
    addAds,
    addAdsDB,
    setAdsDB,
    editAds,
}

export { actionCreators };

