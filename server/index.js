const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// ✅ Load movie data
const movies = JSON.parse(
  fs.readFileSync(path.join(__dirname, "movies_metadata.json"), "utf-8")
);

// ----------------------
// ✅ API ROUTES
// ----------------------

// List all movies
app.get("/api/movies", (req, res) => {
  const movieList = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    vote_average: movie.vote_average,
  }));

  res.json(movieList);
});

// Get single movie by ID
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id == req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
});

// ----------------------
// ✅ SERVE REACT BUILD (PRODUCTION)
// ----------------------

const buildPath = path.join(__dirname, "../build");
app.use(express.static(buildPath));

// Safe fallback for all other routes
app.use((req, res, next) => {
  const indexPath = path.join(buildPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    next();
  }
});

// ----------------------
// ✅ START SERVER
// ----------------------

const PORT = process.env.PORT || 3001; // use 3001 to avoid conflict with React dev server

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
