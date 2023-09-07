import React from "react";
import './Search.css'

function Search({inputEnter,searchWord}){
    console.log(searchWord)
    return(
        <form>
            <label> 
                <input type='search' placeholder="검색어를 입력하세요" onChange={inputEnter} defaultValue={searchWord}></input>
            </label>
        </form>
    )
}

export default Search