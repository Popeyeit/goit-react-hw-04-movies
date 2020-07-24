import React from 'react';
import style from './MovieItem.module.css';
const MovieItem = ({ movie }) => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        width="400"
        height="400"
        alt=""
      />
      <div className={style.div}>
        <h1> {movie.title} </h1> <p>User score: {movie.vote_average}</p>
        <h2> Overview </h2> <p> {movie.overview} </p> <h3> Genres </h3>
        <ul>
          {console.log(movie.genres)}
          {movie.genres.map(genre => (
            <li key={genre.id}> {genre.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;
