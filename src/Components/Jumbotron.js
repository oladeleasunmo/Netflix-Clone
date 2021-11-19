import React, { useState, useEffect } from "react";
import apifetch from "../api_fetch";
import axios from "../axios";
import "../style.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Jumbotron = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apifetch.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(Math.floor(Math.random() * request.data.results.length - 1));
      return request;
    }
    fetchData();
  }, []);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movie);
  function handelClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then(url => {
          console.log(new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(err => console.log(err));
    }
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <>
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div className="contents">
          <h1 className="title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="hide-md">
            <button onClick={() => handelClick(movie)}>Play</button>
            <button>My list</button>
          </div>
          <h1 className="des hide-md">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="fade" />
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Jumbotron;
