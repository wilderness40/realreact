import React from "react";
import './Header.css'
import Search from './Search.js'
import Button from "./Button";

function Header({ handleClick, inputEnter, searchWord }) {
  console.log(searchWord)

  return (
    <header>
      <Search inputEnter={inputEnter} searchWord={searchWord}></Search>
      <Button handleClick={handleClick}>가격별정렬</Button>
    </header>
  );
}

export default Header;