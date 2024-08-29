const API_KEY = "59947a01dedfacaaeb60096d5ae1e04a"
const BASE_URL = "https://api.themoviedb.org/3/discover/tv?api_key=" + API_KEY;

export const requests = {
  fetchTrending:`/trending/all/week?api_key=&language=ja`,
  fetchNetflixOriginals:`${BASE_URL}&with_networks=213`,
  fetchTopRated:`${BASE_URL}&language=ja`,
  fetchTvSeriesMovies:`${BASE_URL}&with_genres=10759`,
  fetchComedyMovies:`${BASE_URL}&with_genres=35`,
  fetchWesternMovies:`${BASE_URL}&with_genres=37`,
  fetchRomanceMovies:`${BASE_URL}&with_genres=10749`,
  fetchDocumentMovies:`${BASE_URL}&with_genres=99`,
}