import  {API_HOST, API_KEY } from '../utils/constants'

export const getPopularMovies = async(page=1) => {
  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&page=${page}&language=es-ES`;
  const data = await fetch(url)
  const response = await data.json()
  return response
}

export const getRatedMovie = async(page = 1) => {
  const url = `${API_HOST}/movie/top_rated?api_key=${API_KEY}&page=${page}`;
  const data = await fetch(url)
  const response = await data.json()
  return response
}

export const getMovieById = async(id) => {
  const url = `${API_HOST}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
  const data = await fetch(url)
  const response = await data.json()
  return response 
}

export const getVideoById = async(idmovie) => {
  const url = `${API_HOST}/movie/${idmovie}/videos?api_key=${API_KEY}`;
  const data = await fetch(url)
  const response = await data.json()
  return response
}

export const searchMovie = async(search) => {
  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&query=${search}&language=es-ES`
  const data = await fetch(url)
  const response = await data.json()
  return response
}

export const  getSimilarMovies = async(idMovie) => {
  const url = `${API_HOST}/movie/${idMovie}/similar?api_key=${API_KEY}&language=es-EN`;
  const data = await fetch(url)
  const response = await data.json()
  return response
}

export const getCredits = async(id) => {
  const url = `${API_HOST}/movie/${id}/credits?api_key=${API_KEY}&language=es-ES`;
  const data = await fetch(url)
  const response = await data.json()
  return response
}
