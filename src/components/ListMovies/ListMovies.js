import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ListMovies.module.css';
const ListMovies = ({ movies, location }) => {
  return (
    <ul className={style.list}>
      {' '}
      {movies.map(movie => (
        <li key={movie.id} className={style.item}>
          <NavLink
            className={style.link}
            to={{ pathname: `movies/${movie.id}`, state: { from: location } }}
          >
            {' '}
            {movie.title}{' '}
          </NavLink>{' '}
        </li>
      ))}{' '}
    </ul>
  );
};

export default ListMovies;
