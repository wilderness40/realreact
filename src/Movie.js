import React from 'react';

function Movie({moviesData}){
    const style = {
        width: '230px',
        height: '500px',
        background: "white",
        margin: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
// console.log(moviesData.map((movie,id) => console.log(movie.genres)))
    return (
            moviesData.map((movie, id) => {
            return(
               <div key={id} style={style}>
                <img src={movie.medium_cover_image} alt={movie.title}></img>
                <h3>{movie.title}</h3>
                <h4>{movie.genres}</h4>
              </div>
            )   
        })
    )
}
 
export default Movie;