import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesCredits } from 'services/fetchMovies';

function Cast() {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getMoviesCredits() {
      try {
        const data = await fetchMoviesCredits(movieId);
        setCasts(data.cast.splice(0, 10));
      } catch (error) {
        toast.error('Oops error, please try again.', {
          theme: 'colored',
        });
      }
    })();
  }, [movieId]);

  return (
    casts && (
      <ul>
        {casts.map(({ id, character, profile_path, name }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width="100"
              height="150"
              loading="lazy"
            />
            <h3>Name: {name}</h3>
            <p>character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

export default Cast;
