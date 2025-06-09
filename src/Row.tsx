import {useState, useEffect } from "react";
import axios from "axios";
import './css/Row.scss';
import YouTube from 'react-youtube';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  baseURL: string;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
}

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  }
}

export const Row = ({ title, fetchUrl, isLargeRow, baseURL}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }
  fetchData();
},[fetchUrl]);

const opts: Options = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const handleClick = async (movie: Movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    try {
      // TV番組（name）か映画（title）かを判定
      const type = movie.name ? "tv" : "movie";

      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${movie.id}/videos?api_key=59947a01dedfacaaeb60096d5ae1e04a`
      );

      const results = response.data.results;

      const trailer = results.find(
        (video: any) => video.site === "YouTube" && video.type === "Trailer"
      );

      if (trailer) {
        setTrailerUrl(trailer.key);
      } else {
        console.warn("トレーラーが見つかりませんでした");
        setTrailerUrl("");
      }
    } catch (error) {
      console.error("トレーラー取得エラー", error);
      setTrailerUrl("");
    }
  }
};



return (
  <div className="Row">
    <h2>{title}</h2>
    <div className="Row-posters">
      {movies.map((movie, i) => (
        <img
        key={movie.id}
        className={`Row-poster ${isLargeRow ? "Row-poster-large" : ""}`}
        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        onClick={() => handleClick(movie)}
        />
      ))}
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
);}