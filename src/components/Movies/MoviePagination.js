import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor:'#FFFF',
    padding:'20px'
  },
  paginationUL: {
    justifyContent:'center',
  }
}));

const MoviePagination = ({setPage}) =>{
  
  const classes = useStyles();
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        variant="outlined"
        shape="rounded" 
        classes={{ ul: classes.paginationUL }} 
        count={100}  
        onChange={handleChange} 
      />
    </div>
  );
}
export default MoviePagination

