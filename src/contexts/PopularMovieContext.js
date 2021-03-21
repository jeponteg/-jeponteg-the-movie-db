import React, {useState, useEffect, createContext} from 'react';
import  {getPopularMovies, searchMovie}  from "../api/movie-api";

export const PopularMovieContex = createContext();

const PopularMovieContext = ({children}) => {

    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(null);
 
    useEffect(() => {
        getPopularMovies(page).then((response) => {
            setPopular(response.results);   
        });
    }, [page]);

    useEffect(() => {
        if(search != null){
            searchMovie(search).then((response) => {
                if(response.results){
                    setPopular(response.results);   
                }
            });
        }   
    }, [search]);

    return(
        <PopularMovieContex.Provider 
            value={{
                popular, setPopular,
                page,  setPage,
                search,setSearch
            }}
        >
            {children}
        </PopularMovieContex.Provider>
    )
}

export default PopularMovieContext