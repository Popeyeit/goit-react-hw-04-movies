import axios from 'axios';
const API = process.env.REACT_APP_CLIENT_API_KEY;

export const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API}`,
  );
};

export const getMovie = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}}?api_key=${API}&language=en-US`,
  );
};
export const getCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API}`,
  );
};
export const getMovieByQuery = name => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&query=${name}&include_adult=false`,
  );
};
export const getReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API}&language=en-US&page=1`,
  );
};
