const API_KEY = "a8edea19a857945d92b43f492654cd0b";

const apifetch = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&append_to_response=images`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&append_to_response=images`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&append_to_response=imdb_id`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28&append_to_response=imdb_id`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35&append_to_response=imdb_id`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27&append_to_response=imdb_id`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749&append_to_response=imdb_id`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99&append_to_response=imdb_id`
};

export default apifetch;
