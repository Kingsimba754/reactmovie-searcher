import { useEffect, useState } from "react";
import "./App.css";
import MovieDisplay from "./Components/MovieDisplay";
import Form from "./Components/Form";

function App() {
  const API_KEY = "74091049";
  
  const [movie, setMovie] = useState(null);
  const getMovie = async (searchterm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchterm}`
    );
    const data = await response.json();
    setMovie(data);
  };
  useEffect(() => {
    getMovie("rick and morty");
  }, []);
  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form getMovie={getMovie} />
    </div>
  );
}

export default App;
