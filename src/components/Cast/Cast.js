import React, { useEffect, useState, Profiler } from 'react';
import { getCast } from '../../helpers/api';
import Loader from '../../hoc/Loader';

// import queryString from 'query-string';
const Cast = ({ match, toggleLoader, loader }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    console.log(movieId);
    getCast(movieId)
      .then(res => setCast(res.data.cast))
      .finally(() => toggleLoader(false));
  }, []);

  return (
    <div>
      {!loader && (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                width="150"
                height="200"
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt=""
              />
              <h3>Name: {cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Loader(Cast);
