import React,{useContext} from 'react'
import { DetailsContext } from '../../contexts/DetailsCardContext';
import { useParams } from "react-router-dom";
import { BASE_PATH_IMG } from '../../utils/constants';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import MovieRating from './MovieRating';
import SimilarMovies from '../Movies/general-movies/SimilarMovies'
import './DetailsCard.scss';

const DetailsCard = () => {

  let { id } = useParams();

  const { movie, setId } = useContext(DetailsContext);
  
  setId(id)

  let imageUrl="";
  let imageUrl2="";
  let movietTitle="";
  let date="";
  let view="";
  let voteAverage="";
  let genders=[];

  if(movie){
    const { title, release_date, overview, vote_average, genres, poster_path } = movie;
    movietTitle = title;
    date = release_date;
    view =overview;
    imageUrl2 =`${BASE_PATH_IMG}/w400${poster_path}`
    imageUrl  =`${BASE_PATH_IMG}/w1920_and_h800_multi_faces/${poster_path}`
    voteAverage=vote_average;
    genders=genres;
  }
  
  return (
    
    <Card className="root-details">
      <CardMedia
        className="card-media-details"
        image={imageUrl}
        title="img"
      >
        <div className="card-contents"> 
          <Grid container spacing={1} >

            <Grid  item  xs={12} sm={6} md={3} key={id} >
              <CardMedia
                className="card-media-img"
                image={imageUrl2}
                title="img"
              > 
              </CardMedia>
            </Grid>

            <Grid  item  xs={12} sm={6} md={9} key={id} >
              <card className="card-details-text">
                <div className="card-media-title"><h1>{movietTitle}: {date}</h1></div>
                <div className="card-media-title"><h3>Género</h3></div>
                
                {/* {genders.map((item)=>{
                 return(
                  <li className="card-media-overview">{item.name}</li>
                 )
                })} */}
                <MovieRating voteAverage={voteAverage} />
                <div className="card-media-title"><h3>Vista general</h3></div>
                <div className="card-media-overview">{view}</div>
              </card>                               
            </Grid>
            
          </Grid>
        </div>
      </CardMedia>
      <SimilarMovies/>
    </Card>
  )
}

export default DetailsCard