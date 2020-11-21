import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  // states : search history and movie results
  const [query, setQuery] = useState("");

  // movie and the result changing
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("Searching...");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d8a7d5a735c495451a9b1d729a4ce1d8&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query">Movie Name </label>
        <input
          className="input"
          value={query}
          onChange={(e) => {
            return setQuery(e.target.value);
          }}
          type="text"
          placeholder="ie. Batman"
          name="query"
        />
        <button className="button" type="submit">
          SEARCH
        </button>
      </form>

      <div className="card-list ignore">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
