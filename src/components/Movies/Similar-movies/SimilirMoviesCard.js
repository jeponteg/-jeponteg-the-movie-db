import React,{ useContext } from 'react'
import { VideoContex } from '../../../contexts/VideoContext'
import { BASE_PATH_IMG } from '../../../utils/constants'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types';

const SimilirMoviesCard = ({ idMovie, poster_path }) => {
   
    const{setId} = useContext(VideoContex)
    const imageUrl =`${BASE_PATH_IMG}/w400${poster_path ? poster_path : null}`

    const handdleOnClick = (id) =>{
        setId(id)
    }

    return (
        <Card className="card-root">
            <CardActionArea onClick ={()=>handdleOnClick(idMovie)} >
                <CardMedia
                    className="card-media"
                    image={imageUrl}
                    title="img"
                />
            </CardActionArea>
        </Card>
    )
}
export default SimilirMoviesCard

SimilirMoviesCard.propTypes = {
    poster_path: PropTypes.string
}