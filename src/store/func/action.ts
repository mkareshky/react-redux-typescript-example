import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import axios, { AxiosError } from "axios";
import { FuncActionTypes } from "./types";
//import inventory from "../../mockdata";


export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;


export const fetchRequestFunc = (number:Number): 
ThunkAction<void, ApplicationState, null, Action<string>> => dispatch => {
   
	axios
		.get(`http://numbersapi.com/${number}`)
		.then((answer) => {
			console.log(answer.data)
			dispatch({
                type: FuncActionTypes.FETCH_SUCCESS,
                payload:{ FunFact:answer.data}
			});
		})
		.catch((error: AxiosError) => {
			dispatch({
        type: FuncActionTypes.FETCH_ERROR,
        payload: `Error: ${error.response}`
			});
		})
};
