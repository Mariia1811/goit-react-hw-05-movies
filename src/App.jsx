import { Route, Routes } from 'react-router-dom';
// import Cast from 'components/Cast';
import Layout from 'components/Layout';
// import Reviews from 'components/Reviews';
import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
import {lazy} from 'react';
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const Reviews = lazy(() => import('components/Reviews'))
const Cast = lazy(() => import('components/Cast') )

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
