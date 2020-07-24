import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListMovies from '../../components/ListMovies/ListMovies';
import Loader from '../../hoc/Loader';
import { getPopularMovies } from '../../helpers/api';

const HomePage = ({ loader, toggleLoader }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    getPopularMovies()
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => setError(error))
      .finally(() => toggleLoader(false));
  };

  return (
    <div>
      {' '}
      {loader && <p> Loading... </p>}{' '}
      {!loader && !error && (
        <>
          <h1> Trending today </h1>{' '}
          <ListMovies location={location} movies={movies} />{' '}
        </>
      )}{' '}
      {error && <h2> OOOPS something went wrong, try again later </h2>}{' '}
    </div>
  );
};

export default Loader(HomePage);
