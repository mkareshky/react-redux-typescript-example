import { Reducer } from "redux";
import { TodoActionTypes, TodoState } from "./types";

export const initialState: TodoState = {
  data:{
    todo:{
    userId: 0,
    id: 0,
    title: "",
    completed: false}
  },
  errors: undefined,
  loading: false
};

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case TodoActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as TodoReducer };
