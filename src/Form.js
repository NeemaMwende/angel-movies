import React, { useState, useRef } from 'react';
import './Form.css';

const Form = () => {
  const [notification, setNotification] = useState('');
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setNotification('Please fill this field');
  };

  const handleBlur = () => {
    setNotification('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    if (query) {
      const res = await tvMazeApi(query);
      setMovies(res.slice(0, 15)); // Limit the results to 15
    } else {
      setNotification('Error fetching movie');
    }
  };

  const tvMazeApi = async (query) => {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const res = await req.json();
    return res;
  };

  return (
    <div className="form-content">
      <h1>Movie Search API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
        <button type="submit" className="search">Search</button>
        {notification && <p className="warning">{notification}</p>}
      </form>
      <div className="image-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <h3>{movie.show.name}</h3>
            {movie.show.image && <img src={movie.show.image.medium} alt={movie.show.name} />}
            <a
              href={movie.show.officialSite || `https://www.tvmaze.com/shows/${movie.show.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-link"
            >
              Watch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
