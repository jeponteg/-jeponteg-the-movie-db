import React,{ useState, useEffect, createContext } from 'react'
import { getSimilarMovies } from '../api/movie-api';

export const DetailsContext = createContext();

const DetailsCardContext = ({children}) => {

    const [similar, setsimilar] = useState()
    const [id, setId] = useState(null)

    useEffect(() => {
        if(id !== null){
            getSimilarMovies(id).then((response) => {
                setsimilar(response.results);
            });
        }
    }, [id])
  
    return (
        <DetailsContext.Provider
            value={{
                id,
                setId,
                similar,
                setsimilar
            }}
        >
            {children}
        </DetailsContext.Provider>
    )
}

export default DetailsCardContext