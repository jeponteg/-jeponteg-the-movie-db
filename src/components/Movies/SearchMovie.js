import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PopularMovieContex } from '../../contexts/PopularMovieContext';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor:'white',
    justifyContent:'center',
    padding:'10px'
  },
}));

const SearchMovie = () => {

  const classes = useStyles();
   
  const { setSearch } = useContext(PopularMovieContex)

  const handleInputOnchange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className={classes.root}>
      <div>
      <TextField
          id="standard-full-width"
          label="Buscar película"
          style={{ margin: 8, width:400 }}
          placeholder="Superman, Harry Potter ..."
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange = {handleInputOnchange}
        />
      </div>
    </div>
  );
}
export default SearchMovie