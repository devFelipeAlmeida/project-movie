import React, { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css";
import MovieCard from '../components/MovieCard';

const Popular = () => {
    const [bestMovies, setBestMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setBestMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}popular?${apiKey}`

        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className='container'>
            <h2 className="title">Filmes populares:</h2>
            <div className="movies-container">
                {bestMovies.length === 0 && <p>Carregando...</p>}
                {bestMovies.length > 0 && bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Popular