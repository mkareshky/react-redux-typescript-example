import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import axios, { AxiosError } from "axios";
import { TodoActionTypes } from "./types";
//import inventory from "../../mockdata";


export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;


export const fetchRequestTodo = (number:Number): 
ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
   
	axios
		.get(`https://jsonplaceholder.typicode.com/todos/${number}`)
		.then((answer) => {
			console.log(answer.data)
			dispatch({
                type: TodoActionTypes.FETCH_SUCCESS,
                payload:{ todo:answer.data}
			});
		})
		.catch((error: AxiosError) => {
			dispatch({
        type: TodoActionTypes.FETCH_ERROR,
        payload: `Error: ${error.response}`
			});
		})
};
