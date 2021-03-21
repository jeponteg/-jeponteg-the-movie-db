import  {API_HOST, API_KEY } from '../utils/constants'

export const getPopularMovies = (page=1) => {

  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&page=${page}&language=es-ES`;

    return fetch(url)
    .then((response)=>{
      return response.json()
    })
    .then((result) =>{
        return result;
    })
    .catch(err => console.log(err));
}

export const getRatedMovie = (page = 1) => {

  const url = `${API_HOST}/movie/top_rated?api_key=${API_KEY}&page=${page}`;

  return fetch(url)
    .then((response)=>{
      return response.json()
    })
    .then((result)=>{
        return result;
    })
    .catch(err => console.log(err));
}

export const getMovieById = (id) => {

  const url = `${API_HOST}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch(err => console.log(err));
}

export const getVideoById = (idmovie) => {

  const url = `${API_HOST}/movie/${idmovie}/videos?api_key=${API_KEY}`;
    return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch(err => console.log(err));
}

export const searchMovie = (search) => {

  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&query=${search}&language=es-ES`
  
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch(err => console.log(err));
}

export const  getSimilarMovies = (idMovie) => {

  const url = `${API_HOST}/movie/${idMovie}/similar?api_key=${API_KEY}&language=es-ES`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch(err => console.log(err));

}
