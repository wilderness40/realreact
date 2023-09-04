import React, { Component } from "react";

function Movie({  id, children, ...rest }){
    return (
        <>
            <h1>무비정보</h1>
            <h3{...rest}></h3>
            {children}
        </>
    )
}
export default Movie