import React from 'react'
import DetailsCard from '../../components/Details-card/DetailsCard'
import SimilarMovies from '../../components/Movies/general-movies/SimilarMovies'
import './DetailsScreen.styles.scss'

const DetailsScreen = () => {
    return (
        <div className="details-screen">
            <DetailsCard/>
            <SimilarMovies/>
        </div>
    )
}
export default DetailsScreen