import {useCounter} from '../hooks/useCounter';

export const CustomWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();
    
    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr></hr>
            <button onClick={ () => increment(2)} className="btn btn-primary" type="button" >+2</button>
            <button onClick={ () => reset() }    className="btn btn-primary" type="button" >Reset</button>
            <button onClick={ () => decrement(2)} className="btn btn-primary" type="button" >-2</button>

        </>
    );
};