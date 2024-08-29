import React from 'react';
import { Row } from './Row';
import {requests} from "./request";
import {Banner} from "./Banner";
import {Nav} from "./Nav";

function App() {
  const apiBaseURL = "https://api.themoviedb.org/3/";
  // 画像取得用のベースURL
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="App"
    style={{backgroundColor: "black"}}>
      <Banner />
      <Nav />
      <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      baseURL={imageBaseURL}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} baseURL={imageBaseURL}/>
      <Row title="TV Series" fetchUrl={requests.fetchTvSeriesMovies} baseURL={imageBaseURL}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} baseURL={imageBaseURL}/>
      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} baseURL={imageBaseURL}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} baseURL={imageBaseURL}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} baseURL={imageBaseURL}/>
    </div>
  );
}

export default App;
