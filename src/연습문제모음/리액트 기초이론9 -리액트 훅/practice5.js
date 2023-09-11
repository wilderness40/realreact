import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';

function App() {
  const [ movies, setMovies ] = useState([])

  useEffect(()=>{
    fetch( 'https://yts.mx/api/v2/list_movies.json?limit=12')
    .then( res => res.json())
    .then( data => {
          console.log(data)
          const { data : { movies }} = data
          setMovies(movies)
      })
  }, [])
 
    
    return (
      <div className="App">
        <Movie
        moviesData={movies}
        ></Movie>
      </div>
    );
  }
export default App;