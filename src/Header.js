import React, { Component } from "react";
import './Header.css'
import Search from './Search.js'
import Button from "./Button";
import Dropdown from "./Dropdown";

class Header extends Component{
 state = {
  keyWord : ''
 }

 onSearch = (e) => {
  const { keyWord } = this.state 
  const { searchClick, enterSignal } = this.props
  // if (/\n/.test(e.target.value)) 검색어 중에 enter 키가 있는지 찾는 정규표현식
  // console.log(e.key)

  if(e.key !== 'Backspace'){
  if (e.key === 'Enter' && e.target.value.length > 1){
    // 검색하기
    enterSignal(false)
    this.setState({  
      keyWord : e.target.value.toLowerCase() 
    })
    searchClick(keyWord)
  }else if(e.key === 'Enter' && e.target.value.length === 1){
    alert('검색어를 2자 이상 입력해주세요')
  }else if(e.target.value === ''){
    alert('검색어를 입력해주세요')
  }else{
      enterSignal(true)
      this.setState({ keyWord : e.target.value })  
  }
}
 }
  

render(){
  const { keyWord, onSearch } = this.state
  const { handleClick, searchClick, handleState, filteredData } = this.props
  // console.log( keyWord)

  return (
    <header>
      <Dropdown></Dropdown>
      <Search 
       inputEnter={(e) => this.onSearch(e)} 
       searchWord={keyWord}
      ></Search>
      <Button handleClick={handleClick}>가격별정렬</Button>
    </header>
  );
}
}

export default Header;