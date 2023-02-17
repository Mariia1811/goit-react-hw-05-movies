import { Link, useLocation } from "react-router-dom";

function MovieList({ id, poster, title, date, vote}) {
  const location = useLocation();

  if(poster === 'https://image.tmdb.org/t/p/originalnull'){poster = "https://cid.center/wp-content/uploads/2020/11/placeholder.png"}
  return (
    <li>
      <Link to = {`/movies/${id}`} state={{ from: location }}>
        <div>
          <img
            src={poster}
            alt={title}
            width="320"
            height="430"
            loading="lazy"
          />
        </div>
        <div>
          <span>{id}</span>
          <p>{title}</p>
          <div>
            <p>{date.slice(0, 4)}</p>
            <span>{vote}</span>
          </div>
        </div>
        </Link> 
    </li>
  );
}

export default MovieList;



