
export interface TodoList {
  todo:{
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
    
  }
  

export enum TodoActionTypes {
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR"
  }
  
  export interface TodoState {
    readonly loading: boolean;
    readonly data: TodoList;
    readonly errors?: string;
  }
  