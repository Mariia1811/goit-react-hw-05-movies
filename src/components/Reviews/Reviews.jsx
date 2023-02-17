import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesReviews } from 'services/fetchMovies';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getMoviesReviews() {
      try {
        const data = await fetchMoviesReviews(movieId);
        setReviews(data.results.splice(0, 5));
      } catch (error) {
        toast.error('Oops error, please try again.', {
          theme: 'colored',
        });
      }
    })();
  }, [movieId]);


  return (
    (reviews?.length === 0 ) ? (<p> We don't have any reviews for this movie </p>) : (<ul>
    {reviews.map(({ id, author, content }) => (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    ))}
  </ul>)
  );
}

export default Reviews;
