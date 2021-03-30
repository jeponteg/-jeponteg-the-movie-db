import React,{useContext} from 'react'
import { DetailsContext } from '../../../contexts/DetailsCardContext'
import Grid from '@material-ui/core/Grid'
import SimilirMoviesCard from '../Similar-movies/SimilirMoviesCard'

const SimilarMovies = () => {

    const { similar } = useContext(DetailsContext)
    
    return (
        <>
        { similar ? 
            <Grid className="grid" container spacing={1} >
                { similar.map((item) =>{
                    const {
                    id,title,poster_path, release_date
                    }= item;
                    return(
                        <Grid  item  xs={6} sm={4} md={2} key={id} >
                            <SimilirMoviesCard
                                idMovie={id} 
                                title={title} 
                                poster_path={poster_path}
                                release_date={release_date}
                            />
                        </Grid> 
                    )
                })  } 
            </Grid> 
            : null }
        </>
    )
}
export default SimilarMovies