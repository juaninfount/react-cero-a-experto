
import { useEffect, useState } from 'react'
import { Message }             from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
          username: 'strider'
        , email: 'john@google.com'
        //, nuevaProp: ''
    });

    const { 
            username
            ,email
            //,nuevaProp
    } = formState;
    
    const  onInputChange = ({target})=> {
        const {name, value} = target;
        //console.log(name,value);  
        setFormState({
            ...formState,
            [name] : value
        });
    };

    useEffect( () => {
        //console.log(`${event.target.value}`);  
        //console.log('UserEffect used: username');
    },[username]);

    // useEffect( () => {
    //     //console.log(`${event.target.value}`);  
    //     console.log('UserEffect used');
    // },[formState]);

    useEffect( () => {
        //console.log(`${event.target.value}`);  
        //console.log('UserEffect used: email');
    },[email]);

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

        {
            username === 'strider2' && <Message />
        }
        </>
    );
};