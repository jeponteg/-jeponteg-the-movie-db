import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const MovieRating = ({voteAverage , voteCount }) => {
  return(
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography style={{color:'white'}}component="legend">Votos: {voteCount}</Typography>
      <Rating
        name="customized-10"
        max={10}
        value={voteAverage}
        readOnly
      />
    </Box>
  )
}

export default MovieRating

MovieRating.defaultProps = {
  voteAverage: 0,
  voteCount:0
};

