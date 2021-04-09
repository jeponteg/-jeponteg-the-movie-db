import React from 'react'
import DetailsCard from '../../components/Details-card/DetailsCard'
import ScrollingHorizontally from '../../components/Details-card/ScrollingHorizontally'
import SimilarMovies from '../../components/Movies/general-movies/SimilarMovies'
import './DetailsScreen.styles.scss'

const DetailsScreen = () => {
    return (
        <div className="details-screen">
            <DetailsCard/>
            <div className="scrollingHorizontally">
                <div className="text-main-cast">
                   <h2>Reparto principal</h2> 
                </div>
                <div className="card-scrollingHorizontally">
                    <ScrollingHorizontally/>
                </div>
            </div>
           <div className="similar-movies">
            <div className="text-similar-movies">
                <h2>Peliculas similares</h2> 
            </div>
        </div> 
            <SimilarMovies/>
        </div>
    )
}
export default DetailsScreen