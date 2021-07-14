import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SIGN_UP = "SIGN_UP";

const logIn = createAction(LOG_IN,  (id, pwd) => ({id, pwd}));
const signUp = createAction(SIGN_UP, (id, nickname, pwd) => ({id, nickname, pwd}));


const initialState ={
    list: [],
}
const loginDB =(id, pwd) => {
    return function(dispatch){
    const data = {id, pwd}
    const axios = require("axios");

    axios.post("" , data).then(function(response){

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
            console.log(response.data);
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
        console.log(action.payload)
    }),
    [SIGN_UP]: (state, action) => produce(state, (draft) => {
        draft.list.push = {...action.payload};
    })
    }, initialState
)

const actionCreators={
    logIn,
    signUpDB,
}

export { actionCreators }