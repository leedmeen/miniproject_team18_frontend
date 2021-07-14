import {createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT"

const logIn = createAction(LOG_IN,  (id, pwd) => ({id, pwd}));


const initialState ={
    list: [],
}
const loginDB =(id, pwd) => {
    return function(dispatch){
    const data = {id, pwd}
    const axios = require("axios");
        console.log(data);
    // axios.post("http://15.165.18.118/login" , data).then(function(response){

    // }).catch(function(error){
    //     console.log(error)
    //     })
    }
}

//reducer

export default handleActions({

    [LOG_IN]: (state, action) => produce(state, (draft) => {

    })
}, initialState)
const actionCreators={
    logIn,
    loginDB,
}

export { actionCreators }