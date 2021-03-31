import React from 'react'
import DetailsCard from '../../components/Details-card/DetailsCard'
import ScrollingHorizontally from '../../components/Details-card/ScrollingHorizontally'
import SimilarMovies from '../../components/Movies/general-movies/SimilarMovies'
import './DetailsScreen.styles.scss'

const DetailsScreen = () => {
    return (
        <div className="details-screen">
            <DetailsCard/>
            <ScrollingHorizontally/>
            <SimilarMovies/>
        </div>
    )
}
export default DetailsScreen