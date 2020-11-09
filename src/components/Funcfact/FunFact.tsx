import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchRequestFunc } from '../../store/func/action';



function FunFact() {
   
    const dispatch = useDispatch();
    const funcfact = useSelector<any, any>((state: any) => {
        return {
            funcfact: state.func.data,
        }
    }, shallowEqual);
    console.log(funcfact)
    return (
        <div className="App">
            <h4>{funcfact.funcfact.FunFact}</h4>
            <button
                onClick={(e) => {
                    dispatch(fetchRequestFunc(33))
                }}>
                Get Number Fun Fact
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default FunFact;
