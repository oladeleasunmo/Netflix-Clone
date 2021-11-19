import React from "react";
import Category from "../Components/Category";
import apifetch from "../api_fetch";
import Jumbotron from "../Components/Jumbotron";

const LandingPage = () => {
  return (
    <>
      <div>
        <Jumbotron />
        <Category
          type="NETFLIX ORIGINAL"
          fetchUrl={apifetch.fetchNetflixOriginals}
          biggerPoster
        />
        <Category type="Trending Now" fetchUrl={apifetch.fetchTrending} />
        <Category type="Top Rated" fetchUrl={apifetch.fetchTopRated} />
        <Category type="Action Movies" fetchUrl={apifetch.fetchActionMovies} />
        <Category type="Comedy Movies" fetchUrl={apifetch.fetchComedyMovies} />
        <Category type="Horror Movies" fetchUrl={apifetch.fetchHorrorMovies} />
        <Category
          type="Romance Movies"
          fetchUrl={apifetch.fetchRomanceMovies}
        />
        <Category type="Documentaries" fetchUrl={apifetch.fetchDocumentaries} />
      </div>
    </>
  );
};

export default LandingPage;
