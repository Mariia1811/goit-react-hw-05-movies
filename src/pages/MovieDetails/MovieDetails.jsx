import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchMoviesById } from 'services/fetchMovies';


function MovieDetails() {
  const [movieById, setMovieById] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async function getMovieById() {
      try {
        setMovieById(await fetchMoviesById(movieId));
      } catch {
        toast.error('Oops error, please try again.', {
          theme: 'colored',
        });
      }
    })();
  }, [movieId]);

  if (!movieById) {
    return null;
  }
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = movieById;

  return (
    <>
      <Link to={backLinkHref.current}>Go back</Link>;
      <article>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="195"
          height="300"
          loading="lazy"
        />
        <div>
          <h2>{title}</h2>
          <ul>
            <li>
              <p>
                Vote / Votes
                <span>{vote_average}</span>
                <span>{vote_count}</span>
              </p>
            </li>
            <li>
              <p>
                Popularity <span>{popularity}</span>
              </p>
            </li>
            <li>
              <p>
                Genre:
                {genres &&
                  genres.map(({ id, name }) => <span key={id}> {name}, </span>)}
              </p>
            </li>
            <li>
              <h4>About</h4>
              <p>{overview}</p>
            </li>
          </ul>
        </div>
      </article>
      <ul>
        <li>
          <h2>Additional information</h2>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;
