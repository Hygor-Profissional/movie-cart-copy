import MovieList from './components/MovieList';
import Cart from './components/Cart';

export default function App() {
  return (
    <div className="container">
      <h1>Loja de Filmes</h1>
      <MovieList />
      <Cart />
    </div>
  );
}
