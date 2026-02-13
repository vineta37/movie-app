import React, { useEffect, useState } from "react";
import "./App.css"; // optional, for styling

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from backend
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  // Filter movies based on search
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Movie App</h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Movie List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div
          onClick={() => setSelectedMovie(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
            }}
          >
            <h2>{selectedMovie.title}</h2>
            {selectedMovie.tagline && <p><em>{selectedMovie.tagline}</em></p>}
            <p>⭐ {selectedMovie.vote_average}</p>
            <button
              onClick={() => setSelectedMovie(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
