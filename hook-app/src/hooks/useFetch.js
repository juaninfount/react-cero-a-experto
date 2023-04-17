import { useEffect, useState } from 'react'; 

export const usingFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading:true
        });

        const resp = await fetch(url);
        const data = await resp.json();   
        //console.log(tdata);

        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    
    useEffect( () => {
        getFetch();
    }, [url]);
    
    // https://api.breakingbadquotes.xyz/v1/quotes/2

    return state;
};