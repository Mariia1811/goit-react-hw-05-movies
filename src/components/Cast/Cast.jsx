import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesCredits } from 'services/fetchMovies';
import { CastsList, CastsText, TextInfoCact } from './Cast.styled';

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
      <CastsList>
        {casts.map(({ id, character, profile_path, name }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width="150"
              height="210"
              loading="lazy"
            />
            <TextInfoCact><CastsText>Name: </CastsText> {name}</TextInfoCact>
            <TextInfoCact><CastsText>Character:  </CastsText> {character}</TextInfoCact>
          </li>
        ))}
      </CastsList>
    )
  );
}

export default Cast;
