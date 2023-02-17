import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from 'services/fetchMovies';
import MovieList from 'components/MovieItem';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieParams = searchParams.get('query') ?? '';
  const [searchMovie, setSearchMovie] = useState(movieParams);
  const [listMovies, setlistMovies] = useState(null);

  useEffect(() => {
    if (!movieParams) {
      return;
    }

    (async function getPopularMovies() {
      try {
        setlistMovies(await fetchSearchMovies({ query: movieParams }));
      } catch {
        toast.error('Oops error, please try again.', {
          theme: 'colored',
        });
      }
    })();
  }, [movieParams]);

  function handleChange(e) {
    setSearchMovie(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchMovie.trim()) {
      toast.warn('Sorry, the field is empty, please try again.', {
        theme: 'colored',
      });
    }
    setSearchParams(searchMovie !== '' ? { query: searchMovie } : {});
    setSearchMovie('');
    return;
  }

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            name="searchUserMovie"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchMovie}
            onChange={handleChange}
          />
          <IconButton aria-label="search" type="submit">
            <SearchIcon />
          </IconButton>
        </form>
        {listMovies && (
          <ul>
            {listMovies.map(
              ({ id, poster_path, title, release_date, vote_average }) => {
                return (
                  <MovieList
                    key={id}
                    id={id}
                    poster={`https://image.tmdb.org/t/p/original${poster_path}`}
                    title={title}
                    date={release_date}
                    vote={vote_average}
                  />
                );
              }
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Movies;
