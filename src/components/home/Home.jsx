import React, { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/movieSlice";
import './homd.scss'

import MovieListing from "../movieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : "Thor";
      const response = await movieApi.get(
        `?apikey=${APIKey}&s=${searchKey}`
      );
      setTimeout(() => {
        dispatch(addMovie(response.data.Search));
      }, 500);
    };

    fetchMovies();
  }, [search]);

  return (
    <div>
      <h3 style={{ margin: "1rem 0" }}>Movies</h3>
      <input type="text" placeholder="Search...." onChange={(e) => setSearch(e.target.value)} />
      <MovieListing />
    </div>
  );
}

export default Home;
