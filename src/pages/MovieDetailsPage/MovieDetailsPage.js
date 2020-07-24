import React, { Component, useState, useEffect } from 'react';
import { getMovie } from '../../helpers/api';
import {
  NavLink,
  Route,
  Switch,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import Loader from '../../hoc/Loader';
import MovieItem from '../../components/MovieItem/MovieItem';
import style from './MovieDetailsPage.module.css';
const MovieDetailsPage = ({ loader, toggleLoader }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMovie(movieId);

        await setMovie(res.data);
      } catch (error) {
        await setError(error);
      } finally {
        await toggleLoader(false);
      }
    };
    fetchMovie();
  }, []);

  const goBack = () => {
    if (location.state && location.state.from)
      history.push(location.state.from);
  };

  return (
    <div className="movie-wrapper">
      {!loader && (
        <>
          <button onClick={goBack} className={style.btn}>
            {' '}
            Go back{' '}
          </button>
          <MovieItem movie={movie} />
        </>
      )}
      <hr />
      <h1> Additional information </h1>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: {
                  ...location.state.from,
                },
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: {
                  ...location.state.from,
                },
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Switch>
    </div>
  );
};

export default Loader(MovieDetailsPage);
