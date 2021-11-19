import React, { useState, useEffect } from "react";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Category = ({ type, fetchUrl, biggerPoster }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };
  async function handelClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      await movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(err => console.log(err));
    }
  }
  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="Row">
        <h2>{type}</h2>
        <div className="posters">
          {movies.map((movie, i) => (
            <div
              className={`poster ${biggerPoster ? "largerposter" : ``}`}
              key={movie.id}
              onClick={() => handelClick(movie)}
            >
              <img
                alt={movie?.title || movie?.name || movie?.original_name}
                src={`${baseURL}${
                  biggerPoster ? movie.poster_path : movie.backdrop_path
                }`}
              />
            </div>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default Category;
