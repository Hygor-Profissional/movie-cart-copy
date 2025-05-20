import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => dispatch(addToCart(movie))}>Adicionar ao Carrinho</button>
    </div>
  );
}
