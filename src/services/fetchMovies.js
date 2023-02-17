import axios from 'axios';

const moviesAPIServices = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    page: 1,
    api_key: 'b3f8ab5a3b3d716ab8a62d65695cca6b',
  },
});

export const fetchTrendingMovies = async params => {
  const { data } = await moviesAPIServices.get('trending/movie/day', {
    params,
  });
  return data;
};
export const fetchSearchMovies = async params => {
  const { data } = await moviesAPIServices.get('search/movie', { params });
  return data.results;
};
export const fetchMoviesById = async id => {
  const { data } = await moviesAPIServices.get(`movie/${id}`);
  return data;
};
export const fetchMoviesCredits = async id => {
  const { data } = await moviesAPIServices.get(`movie/${id}/credits`);
  return data;
};
export const fetchMoviesReviews = async id => {
  const { data } = await moviesAPIServices.get(`movie/${id}/reviews`);
  return data;
};
