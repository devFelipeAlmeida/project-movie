import React, { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css";
import MovieCard from '../components/MovieCard';

const TopMovie = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results)
  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className='container'>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default TopMovie