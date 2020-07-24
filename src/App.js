import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage'),
);


function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p> Loading... </p>}>
        {' '}
        <Switch>
          <Route exact path="/" component={HomePage} />{' '}
          <Route path="/movies/:movieId" component={MovieDetailsPage} />{' '}
          <Route path="/movies" component={MoviesPage} /> <Redirect to="/" />
        </Switch>{' '}
      </Suspense>{' '}
    </>
  );
}

export default App;
