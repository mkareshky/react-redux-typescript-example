import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchRequestTodo } from '../../store/todos/action';

function Todo() {
    const dispatch = useDispatch();
    const todo = useSelector<number, any>((state: any) => {
        return {
            todo: state.todo.data,
        }
    }, shallowEqual);
    console.log(todo)
    debugger
    return (
        <div className="App">
             <h4>{todo.todo.length}</h4> 
             
            <button
                onClick={(e) => {
                    dispatch(fetchRequestTodo(33))
                }}>
                Get To Do
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Todo;
