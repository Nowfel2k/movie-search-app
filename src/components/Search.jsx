import React, { useState } from 'react'
import MovieCard from './MovieCard'

function SearchMovies() {
    
    // states : search history and movie results 
    const [query, setQuery] = useState('')

    // movie and the result changing 
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("Searching...")

        const url = `https://api.themoviedb.org/3/search/movie?api_key=d8a7d5a735c495451a9b1d729a4ce1**&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovies(data.results)
        }
        
        catch (err) { console.log(err) }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query">Movie Name </label>
                <input className="input" value={query} onChange={(e) => { return setQuery(e.target.value) }} type="text" placeholder="ie. Batman" name="query" />
                <button className="button" type="submit">
                    SEARCH
                </button>
            </form>
            
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ) )}
            </div>

        </>
    )
}

export default SearchMovies


/*

email: wocey20700@finxmail.n**
password and user: ***on2k20
site: https://www.themoviedb.org

API KEY : d8a7d5a735c495451a9b1d729a4ce1**

EXAMPLE https://api.themoviedb.org/3/movie/550?api_key=d8a7d5a735c495451a9b1d729a4ce1**

READ ACCESS eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGE3ZDVhNzM1YzQ5NTQ1MWE5YjFkNzI5YTRjZTFkOCIsInN1YiI6IjVmNzA4NzgzZDU1ZTRkMDAzNDczZTA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pHpXVeXo4iRrH7myH09UHP2H5Y9g3Tjt_j1b7K3Zbt0

*/
