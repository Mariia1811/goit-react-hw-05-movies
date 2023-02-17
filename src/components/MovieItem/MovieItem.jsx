import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Data, ImgStyled, LinkSstyled, TextWrap, Title, Vote } from './MovieItem.styled';

function MovieList({ id, poster, title, date, vote }) {
  const location = useLocation();

  if (poster === 'https://image.tmdb.org/t/p/originalnull') {
    poster = 'https://cid.center/wp-content/uploads/2020/11/placeholder.png';
  }
  return (
    <li>
      <LinkSstyled to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <ImgStyled
            src={poster}
            alt={title}
            width="320"
            height="430"
            loading="lazy"
          />
        </div>
        <TextWrap>
          <Title>{title}</Title>
          <div>
            <Data>{date.slice(0, 4)}</Data>
           {(vote !== 0) && <Vote>{vote}</Vote>} 
          </div>
        </TextWrap>
      </LinkSstyled>
    </li>
  );
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  vote: PropTypes.number,
};

export default MovieList;
