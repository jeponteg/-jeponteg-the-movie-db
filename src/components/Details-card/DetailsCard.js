import React,{useState, useEffect, useContext} from 'react'
import { DetailsContext } from '../../contexts/DetailsCardContext';
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
  const [ movie, setMovie ] = useState([])
  
  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response)
      setId(id)
    });  
  }, [id])

  const { title, release_date, overview, vote_count, vote_average, genres, poster_path } = movie;
 
  let imageUrl2 = "";
  let imageUrl  = "";
  if(poster_path){
    imageUrl2 =`${BASE_PATH_IMG}/w400${poster_path}`
    imageUrl  =`${BASE_PATH_IMG}/w1920_and_h800_multi_faces/${poster_path}`
  }
       
  return (
    imageUrl2 && imageUrl ?
      <Card className="root-details" key={id}>
        <CardMedia
          className="card-media-details"
          image={imageUrl}
          title="img3"
        >
          <div className="card-contents">
            <Grid container spacing={1} >
              <Grid  item  xs={12} sm={6} md={3}>
                <CardMedia
                  className="card-media-img"
                  image={imageUrl2}
                  title="img2"
                /> 
              </Grid>

              <Grid  item  xs={12} sm={6} md={9}>
                <div className="card-details">
                  <div className="card-details-content">
                    <div className="card-media-title-principal">{title}: {release_date}</div>
                    <div className="card-media-title-secundary"><h3>Género</h3></div>
                    <ul>
                      {genres && genres.map((item)=>{
                      return(
                        <li key={item.id} >{item.name}</li>
                      )
                      })}
                    </ul>
                    <div className="card-media-title-secundary"></div>
                    <MovieRating voteAverage={vote_average} voteCount={vote_count}/>
                    <div className="card-media-title-secundary"><h3>Vista general</h3></div>
                    <div className="card-media-overview">{overview}</div>
                  </div>
                </div>                               
              </Grid>
            </Grid>
          </div>
        </CardMedia>
      </Card>
      :null
  )
}

export default DetailsCard