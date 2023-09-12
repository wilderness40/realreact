import React from "react";
import './Search.css'

function Search({inputEnter,searchWord}){
    // console.log(searchWord)
    return(
       <form action="#">  
            <label> 
                <input type='search' placeholder="검색어를 입력하세요" onKeyUp={(e)=>inputEnter(e)} defaultValue={searchWord}></input>
            </label>
        </form>
    )
}

export default Search