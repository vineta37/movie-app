import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    load();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div className="grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <h2>{movie.title}</h2>
            <p className="tagline">{movie.tagline}</p>
            <p><strong>{Number(movie.vote_average).toFixed(1)} / 10</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
