import React, { useEffect, useState } from 'react';
import { getReviews } from '../../helpers/api';
import Loader from '../../hoc/Loader';

// import queryString from 'query-string';
const Reviews = ({ match, loader, toggleLoader }) => {
  const [review, setReview] = useState([]);
  //   getReviews;
  useEffect(() => {
    const { movieId } = match.params;
    getReviews(movieId)
      .then(res => setReview(res.data.results))
      .finally(() => toggleLoader(false));
  }, []);

  return (
    <div>
      {!loader && review.length > 0 ? (
        <ul>
          {review.map(rew => (
            <li key={rew.author}>
              <h3>Author: {rew.author}</h3>
              <p>{rew.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Null</p>
      )}
    </div>
  );
};

export default Loader(Reviews);
