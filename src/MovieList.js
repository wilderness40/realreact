import React from "react";
import Movie from "./Movie";


function MovieList({ movies }){
    return(
        <>
            {movies.map((movie ,id) => {
                return (
                    <Movie key={id} 
                    {...movie}
                    ></Movie>
                )
            })}
        </>
    )
}

export default MovieList