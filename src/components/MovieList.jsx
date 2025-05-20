import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=batman&apikey=adf13b4')
      .then(res => setMovies(res.data.Search || []));
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
