import { Reducer } from "redux";
import { FuncActionTypes, FuncState } from "./types";

export const initialState: FuncState = {
  data: "",
  errors: undefined,
  loading: false
};

const reducer: Reducer<FuncState> = (state = initialState, action) => {
  switch (action.type) {
    case FuncActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case FuncActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case FuncActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as FuncReducer };
