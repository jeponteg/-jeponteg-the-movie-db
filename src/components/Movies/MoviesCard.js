import React,{ useContext } from 'react'
import { VideoContex } from '../../contexts/VideoContext'
import { BASE_PATH_IMG } from '../../utils/constants'
import { Link } from "react-router-dom"
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import VideocamIcon from '@material-ui/icons/Videocam'
import PropTypes from 'prop-types';
import './MoviesCard.styles.scss'

const PopularMoviescCard = ({ idMovie, poster_path }) => {
    
    const{setId} = useContext(VideoContex)
    const imageUrl =`${BASE_PATH_IMG}/w400${poster_path}`

    const handdleOnClick = (id) =>{
        setId(id)
    }

    return (
        <Card className="card-root">
            <CardActionArea>
                <CardMedia
                    className="card-media"
                    image={ imageUrl ? imageUrl : null }
                    title="img"
                />
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    <Link  to={`/movie-details/${idMovie}`}>Learn More</Link>
                </Button>
                <Button size="small" color="primary" onClick={()=>handdleOnClick(idMovie)}>
                    <VideocamIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

export default PopularMoviescCard

PopularMoviescCard.propTypes = {
    idMovie: PropTypes.number,
    poster_path: PropTypes.string
}