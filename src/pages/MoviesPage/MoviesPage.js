import React, { Component, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Form from '../../components/Form/Form';
import queryString from 'query-string';
import { getMovieByQuery } from '../../helpers/api';
import ListMovies from '../../components/ListMovies/ListMovies';
import Loader from '../../hoc/Loader';

// export default class MoviesPage extends Component {
//   state = {
//     movies: [],
//     loader: false,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = queryString.parse(prevProps.location.search);
//     const currentQuery = queryString.parse(this.props.location.search);
//     if (prevQuery.query !== currentQuery.query) {
//       this.hadleFetch(currentQuery.query);
//     }
//   }
//   componentDidMount() {
//     const currentQuery = queryString.parse(this.props.location.search);
//     const { query } = currentQuery;
//     if (query) {
//       this.hadleFetch(query);
//     }
//   }
//   hadleFetch = name => {
//     this.setState({
//       loader: true,
//     });
//     getMovieByQuery(name).then(res =>
//       this.setState({
//         movies: res.data.results,
//         loader: false,
//       }),
//     );
//   };

//   handleChangeUrl = query => {
//     const { history, location } = this.props;
//     if (!query) {
//       return;
//     }
//     history.push({
//       ...location,
//       search: `query=${query}`,
//     });
//   };
//   render() {
//     const { movies } = this.state;
//     const { location } = this.props;
//     return (
//       <div>
//         <Form handleChangeUrl={this.handleChangeUrl} />{' '}
//         <ListMovies location={location} movies={movies} />{' '}
//       </div>
//     );
//   }
// }

const MoviesPage = ({ loader, toggleLoader }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const search = queryString.parse(location.search);
    const { query } = search;
    if (query) {
      hadleFetch(query);
    }
  }, []);
  useEffect(() => {
    const search = queryString.parse(location.search);
    const { query } = search;
    if (query) {
      hadleFetch(query);
    }
  }, [location.search]);

  const hadleFetch = name => {
    getMovieByQuery(name).then(res => {
      setMovies(res.data.results);
      toggleLoader(false);
    });
  };

  const handleChangeUrl = query => {
    if (!query) {
      return;
    }
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };
  return (
    <div>
      <Form handleChangeUrl={handleChangeUrl} />{' '}
      <ListMovies location={location} movies={movies} />{' '}
    </div>
  );
};

export default Loader(MoviesPage);
