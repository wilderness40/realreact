import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ movies, setMovies ] = useState([])
 
 useEffect(()=>{
    fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
    .then( res => res.json())
    .then( result => {
      const {data: {movies}} = result
      console.log(movies)
      setLoading(false)
      setLoading(movies)
    })
 }, [])
  
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      margin: '100px auto',
      textAlign: 'center'
    }
    const loadingStyle = {
      position: 'absolute', 
      left: '50%', 
      top:'50%', 
      transform: 'translate(-50%, -50%)', 
      fontSize: '2rem'
    }
    if(loading){
      return (
        <div style={loadingStyle}>
          <h1>Loading ...</h1>
        </div>
      )
    }else{
      return (
        <div style={style}>
          {movies.map(movie => {
            return (
              <Movie 
                key={movie.id}
                title={movie.title}
                genres={movie.genres}
                cover={movie.medium_cover_image}
                summary={movie.summary}
              ></Movie>

            )
          })}
        </div>
      )
    }
}

export default App;