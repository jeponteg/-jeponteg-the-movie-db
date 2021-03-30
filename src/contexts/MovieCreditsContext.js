import React,{useState, useEffect, createContext} from 'react'
import { getCredits } from '../api/movie-api';

export const CreditsContext = createContext();

const MovieCreditsContext = ({children}) => {

    const [credito, setCredito] = useState(null)
    const [idmovie, setIdmovie] = useState(null)

    useEffect(() =>{
        if(idmovie != null) {
            getCredits(idmovie).then((response)=>{
                console.log(response.cast)
            })
        }
    },[idmovie])

    return (
        <CreditsContext.Provider

            value ={{
                credito, 
                setCredito,
                idmovie,
                setIdmovie
            }}
            
        >
            {children}

        </CreditsContext.Provider>
    )
}

export default MovieCreditsContext
