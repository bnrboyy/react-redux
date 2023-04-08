import React, { useState, useEffect } from "react";
import "./movieDetail.scss";
import { APIKey } from "../../api/MovieApiKey";
import movieApi from "../../api/MovieApi";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
      setMovie(response.data);
      setLoading(true);
    };

    fetchDetail();
  }, []);

  console.log(movie)
  return (
    <div>
        {loading ? (
            <div className="movie-detail-con">
                <div className="movie-detail-img">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-detail-info">
                    <h3>{movie.Title}</h3>
                    <p style={{margin: "2rem 0"}}>{movie.Plot}</p>
                    <p style={{marginBottom: "2rem"}}>Actors : {movie.Actors}</p>
                    <div>
                        <strong>Released : {movie.Released}</strong>
                    </div>
                </div>
            </div>
        ) : (
            <h3 style={{margin: "1rem 0"}}>Loading....</h3>
        )}
    </div>
  );
}

export default MovieDetail;
