import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import {TokenToCookie, Logout} from "../../share/Cookie";
import Cookies from "universal-cookie";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SIGN_UP = "SIGN_UP";
const ON_LOGIN = "ON_LOGIN"

const logIn = createAction(LOG_IN,  (id, pwd) => ({id, pwd}));
const signUp = createAction(SIGN_UP, (id, nickname, pwd) => ({id, nickname, pwd}));
const Onlogin = createAction(ON_LOGIN, (id, accessToken)=> ({id, accessToken}));


const initialState = {
    id: "",
    token: "",
}
const loginDB =(id, pwd) => {
    return function(dispatch){
    const axios = require("axios");
    axios.post("http://15.165.18.118/login",{
        accountId: id,
        password: pwd
    }).then(function(response){
        const accessToken = response.data;
        dispatch(Onlogin(id, accessToken));
    }).catch(function(error){
        console.log(error)
        })
    }
}

const signUpDB = (id, nickname, pwd) => {
    return function(dispatch) {
        const axios = require('axios');
        axios.post(`http://15.165.18.118/users`, {
            accountId: id,
            nickname: nickname,
            password: pwd
        }).then((response) => {
            dispatch(signUp(id, nickname, pwd));
        }).catch((err) => {
            console.log(`회원가입 오류 발생: ${err}`);
        })
    }
}

//reducer

export default handleActions(
    {
    [LOG_IN]: (state, action) => produce(state, (draft) => {
        console.log(action.payload);
    }),
    [SIGN_UP]: (state, action) => produce(state, (draft) => {
        draft.list.push = {...action.payload};
    }),
    [ON_LOGIN]: (state, action) => produce(state, (draft) => {
        TokenToCookie(action.payload.accessToken);
        draft.id = action.payload.id;
        draft.token = action.payload.accessToken;
    }),

    }, initialState
)

const actionCreators={
    logIn,
    loginDB,
    Onlogin,
    signUpDB,
}

export { actionCreators }