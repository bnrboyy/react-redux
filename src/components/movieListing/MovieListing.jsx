import React from "react";
import "./movieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";

function MovieListing() {
  const { movies } = useSelector((state) => state.movies);

  return (
    <div className="movie-container">
      {movies && movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieListing;
