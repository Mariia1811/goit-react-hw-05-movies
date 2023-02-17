import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchMoviesById } from 'services/fetchMovies';
import Loader from 'components/Loader';
import { ArticleStyled, BtnGoBack, Info, MoreInfoLink, MoreInfoList, TitleInfo, Wrap } from './MovieDetails.styled';


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
    <Wrap>
      <BtnGoBack to={backLinkHref.current}> 🡨 Go back</BtnGoBack>

      <ArticleStyled>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width="320"
          height="430"
          loading="lazy"
        />
        <div>
          <h2>{title}</h2>
          <ul>
            <li>
              <TitleInfo>
                Vote / Votes
                <Info>{vote_average} / </Info>  
                <Info>{vote_count}</Info>
              </TitleInfo>
            </li>
            <li>
              <TitleInfo>
                Popularity <Info>{popularity}</Info>
              </TitleInfo>
            </li>
            <li>
              <TitleInfo>
                Genre:
                {genres &&
                  genres.map(({ id, name }) => <Info key={id}> | {name} </Info>)}
              </TitleInfo>
            </li>
            <li>
              <TitleInfo>About</TitleInfo>
              <Info>{overview}</Info>
            </li>
          </ul>
          <h2>Additional information</h2>
        <MoreInfoList>
        <li>
          <MoreInfoLink to="cast">Cast</MoreInfoLink>
        </li>
        <li>
          <MoreInfoLink to="reviews">Reviews</MoreInfoLink>
        </li>
      </MoreInfoList>
        </div>
        
      </ArticleStyled>
        
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </Wrap>
  );
}

export default MovieDetails;
