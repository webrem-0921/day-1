import { useState } from 'react';
import AddMovie from '../AddMovie/AddMovie';
import FilterMovies from '../FilterMovies/FilterMovies';
import moviesDataJSON from './../../dataFormFakeApi.json';
import MovieCard from './../MovieCard/MovieCard';


function MovieList() {

    const [movies, setMovies] = useState(moviesDataJSON)
    const [moviesData, setMoviesData] = useState(moviesDataJSON)

    const addNewMovie = newMovie => {
        const moviesCopy = [...movies, newMovie]
        setMovies(moviesCopy)

        const moviesDataCopy = [...movies, newMovie]
        setMoviesData(moviesDataCopy)
    }

    const filterMovieList = str => {

        let filteredMovies = []

        if (str === 'All') {
            filteredMovies = moviesData
        } else {
            filteredMovies = moviesData.filter(eachMovie => eachMovie.title[0] === str)
        }

        setMovies(filteredMovies)
    }

    return (
        <div>
            <AddMovie addNewMovie={addNewMovie} />
            <FilterMovies filterMovieList={filterMovieList} />
            {movies.map(eachMovie => <MovieCard {...eachMovie} key={eachMovie._id} />)}
        </div>
    )
}

export default MovieList