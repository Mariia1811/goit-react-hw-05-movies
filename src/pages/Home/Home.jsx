import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from 'services/fetchMovies';
import MovieList from 'components/MovieItem';
import { Button, ListMovie, SectionStyled, Title } from './Home.styled';

function Home() {
  const [listMovies, setlistMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async function getPopularMovies() {
      try {
        const data = await fetchTrendingMovies();
        setlistMovies(data.results);
        setTotalPages(data.total_pages);
      } catch {
        toast.error('Oops error, please try again.', {
          theme: 'colored',
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    (async function getPopularMoviesNextPage() {
      try {
        const { results } = await fetchTrendingMovies({ page: page });
        setlistMovies(prev => [...prev, ...results]);
      } catch {
        toast.error('Oops error, please try again.', {});
      }
    })();

  }, [page]);

  function handleClick() {
    setPage(prev => prev + 1);
  }

  return (
    <main>
      <SectionStyled>
        <Title>Trending today</Title>
        {listMovies && (
          <ListMovie>
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
          </ListMovie>
        )}
        {!(totalPages < page) ? (
          <Button onClick={handleClick}> Load more </Button>
        ) : (
          <p>...these are all movies for this request...</p>
        )}
      </SectionStyled>
    </main>
  );
}

export default Home;
