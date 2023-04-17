import { useRef } from "react";

export const FocusScreen = () => {

    const ref = useRef();
    //let inputRef = '';

    const onclick = () => {
        //document.querySelector('input').select();
        ref.current.select();
        console.log(ref);
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
            onClick={onclick}
            ref={ref}
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control" />




            <button 
                className="btn btn-primary mt-2"
                onClick={onclick}  
            >
                Set Focus
            </button>

        </>
    )
}