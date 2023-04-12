
import { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'john@google.com',
        nuevaProp: ''
    });

    const { 
            username
            ,email
            ,nuevaProp
    } = formState;
    
    const  onInputChange = ({target})=> {
        const {name, value} = target;
        console.log(name,value);  
        setFormState({
            ...formState,
            [name] : value
        });
    };

    useEffect( () => {
        console.log(`UseEffect used`);  
    });

    return (
        <>
        <h1>Formulario simple</h1>
        <hr></hr>
        <input type="text" className="form-control"
         placeholder="Username" name="username" 
         value={username} onChange={onInputChange} />

        <input type="email" className="form-control mt-2" 
        placeholder="usuario@dominio.com" name="email" 
        value={email} onChange={onInputChange} />

        </>
    );
};