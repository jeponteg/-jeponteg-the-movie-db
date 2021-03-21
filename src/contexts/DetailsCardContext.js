import React,{ useState, useEffect, createContext } from 'react'
import { getMovieById, getSimilarMovies } from '../api/movie-api';

export const DetailsContext = createContext();

const DetailsCardContext = ({children}) => {

    const [movie, setMovie] = useState()
    const [similar, setsimilar] = useState()
    const [id, setId] = useState(null)

    useEffect(() => {

        if(id !== null){
            getMovieById(id).then((response) => {
                setMovie(response);
            });
            getSimilarMovies(id).then((response) => {
                setsimilar(response.results);
            });
        }
        
    }, [id])
  
    return (
        <DetailsContext.Provider
            value={{
                movie,
                setMovie,
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