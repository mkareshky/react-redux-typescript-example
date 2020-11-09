export enum FuncActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR"
}

export interface FuncState {
  readonly loading: boolean;
  readonly data: string;
  readonly errors?: string;
}
