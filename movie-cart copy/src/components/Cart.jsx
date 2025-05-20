import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>O carrinho está vazio.</p>}
      {cart.map(movie => (
        <div key={movie.imdbID} className="cart-item">
          <p>{movie.Title}</p>
          <button onClick={() => dispatch(removeFromCart(movie.imdbID))}>Remover</button>
        </div>
      ))}
    </div>
  );
}
