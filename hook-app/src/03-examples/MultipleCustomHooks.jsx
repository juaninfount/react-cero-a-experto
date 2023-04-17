// import { usingFetch } from "../hooks/useFetch";
// import { useCounter } from '../hooks/useCounter';
import { usingFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote} from './index';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } 
            = usingFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    // if(isLoading){
    //     return (<>
    //     <h2>Cargando...</h2>
    //     </>);
    // }

    return (
        <>
            <h1>Breaking Bad quotes</h1>
            <hr />
            
                {/* 
                (isLoading) ? (
                    <div className="alert alert-info text-center">
                        Loading...  
                    </div>
                ): (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                ) 
                */ }
            {   (isLoading) ?  <LoadingQuote /> : <Quote author={author} quote={quote}  />
            }
            <button className="btn btn-primary" disabled={isLoading} onClick={ ()=>increment() } >
                Next quote
            </button>

        </>
    );
};
