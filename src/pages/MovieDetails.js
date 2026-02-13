import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieById } from "../api";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    load();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const formattedDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString()
    : "N/A";

  const runtime = movie.runtime
    ? `${movie.runtime} minutes`
    : "N/A";

  return (
    <div className="movie-details">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Movies
      </button>

      <div className="details-card">
        <h1>{movie.title}</h1>

        {movie.tagline && (
          <p className="tagline">"{movie.tagline}"</p>
        )}

        <p>
          <strong>Overview:</strong> {movie.overview || "N/A"}
        </p>

        <p>
          <strong>Release Date:</strong> {formattedDate}
        </p>

        <p>
          <strong>Runtime:</strong> {runtime}
        </p>

        <p>
          <strong>Rating:</strong>{" "}
          {Number(movie.vote_average).toFixed(1)} / 10
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
