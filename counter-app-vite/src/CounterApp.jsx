import { useState, React, useReducer } from "react";
import { PropTypes } from "prop-types";

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    const add = () => {
        setCounter(counter + 1);
    };

    const substract = () => setCounter(counter -1);
    const reset = () => setCounter(0); 
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button type='button' onClick={add}>+1</button>
            <button type='button' onClick={substract}>-1</button>
            <button type='button' onClick={reset}>reset</button>

        </>
    );

}