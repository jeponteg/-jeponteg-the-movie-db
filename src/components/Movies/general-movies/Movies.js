import React,{ useContext } from 'react'
import { PopularMovieContex } from '../../../contexts/PopularMovieContext'
import MoviePagination from '../MoviePagination'
import MoviesCard from '../MoviesCard'
import Grid from '@material-ui/core/Grid'
import SearchMovie from '../SearchMovie'
import './Movies.styles.scss'

const Movies = () => {

    const {popular,setPage} = useContext(PopularMovieContex);
   
    return (
        <>
        <SearchMovie/>
        <MoviePagination setPage={setPage}/>
        <Grid className="grid" container spacing={1} >
            { popular.map((item) =>{
                const {
                id,title,poster_path, release_date
                }= item;
                return(
                    <Grid  item  xs={6} sm={4} md={2} key={id} >
                        <MoviesCard 
                            idMovie={id} 
                            title={title} 
                            poster_path={poster_path}
                            release_date={release_date}
                        />
                    </Grid> 
                )
            })  } 
        </Grid> 
        </>
    )
}

export default Movies