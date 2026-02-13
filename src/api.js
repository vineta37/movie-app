export const fetchMovies = async () => {
  const res = await fetch("/api/movies");
  return res.json();
};

export const fetchMovieById = async (id) => {
  const res = await fetch(`/api/movies/${id}`);
  return res.json();
};
