import React from 'react'

// You can also destructure your props directly from the parameter list
const MovieDisplay = ({ movie }) => {
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Ratings[0].Value}</h3>
          <h2>{movie.Plot}</h2>
          <h2>{movie.Year}</h2>
        </>
      );
    };
  
    // Function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>
    };
  
    // Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  }
  
  // We must export the Component to use it in other files
  export default MovieDisplay