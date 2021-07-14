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

    axios.post("" , data).then(function(response){

    }).catch(function(error){
        console.log(error)
    })
}
}

//reducer

export default handleActions({

    [LOG_IN]: (state, action) => produce(state, (draft) => {

    })
})
const actionCreators={
    logIn,
}

export { actionCreators }