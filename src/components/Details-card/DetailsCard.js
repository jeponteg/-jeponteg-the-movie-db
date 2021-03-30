import React,{useState, useEffect, useContext} from 'react'
import { DetailsContext } from '../../contexts/DetailsCardContext';
import { CreditsContext } from '../../contexts/MovieCreditsContext';
import { getMovieById } from '../../api/movie-api';
import { useParams } from "react-router-dom";
import { BASE_PATH_IMG } from '../../utils/constants';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import MovieRating from './MovieRating';
import './DetailsCard.scss';

const DetailsCard = () => {

  let { id } = useParams();
  const { setId } = useContext(DetailsContext)
  const { setIdmovie } = useContext(CreditsContext)
  const [ movie, setMovie ] = useState([])
 
  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response)
      setId(id)
      setIdmovie(id)
    });  
  }, [id])

  const { title, release_date, overview, vote_average, genres, poster_path } = movie;
  
    let imageUrl2 =`${BASE_PATH_IMG}/w400${poster_path}`
    let imageUrl  =`${BASE_PATH_IMG}/w1920_and_h800_multi_faces/${poster_path}`
  
  return (
    
    <Card className="root-details" key={id}>
      <CardMedia
        className="card-media-details"
        image={imageUrl}
        title="img"
      >
        <div className="card-contents">
          <Grid container spacing={1} >
            <Grid  item  xs={12} sm={6} md={3}>
              <CardMedia
                className="card-media-img"
                image={imageUrl2}
                title="img"
              /> 
            </Grid>

            <Grid  item  xs={12} sm={6} md={9}>
              <div className="card-details-text">
                <div className="card-media-title"><h1>{title}: {release_date}</h1></div>
                <div className="card-media-title"><h3>Género</h3></div>
              <ul>
                {genres && genres.map((item)=>{
                 return(
                  <li key={item.id} >{item.name}</li>
                 )
                })}
              </ul>
                <div className="card-media-title"></div>
                <MovieRating voteAverage={vote_average} />
                <div className="card-media-title"><h3>Vista general</h3></div>
                <div className="card-media-overview">{overview}</div>
              </div>                               
            </Grid>
          </Grid>
        </div>
      </CardMedia>
    </Card>
  )
}

export default DetailsCard