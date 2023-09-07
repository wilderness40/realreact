import React, { Component } from "react";
import './App.css'
import Header from "./Header";
import Cardlist from './Cardlist' 

class App extends Component{
  state = {
    serverData : [],
    flag : true,
    keyWord :''
  }

  componentDidMount(){
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
       // setstate를 사용해야하는데.. state 값을 바꾸면 안되는데
    // 새로운 배열에 안넣고 그냥 data를 사용할순 없나
      this.setState({ serverData: data })
      // this.setState({ serverData: this.state.serverData.concat(data) })
    })
    
  }


  sortItem = () => {
    this.setState(prevState => ({
      flag: !prevState.flag,
      serverData: [...prevState.serverData].sort((a, b) =>
        prevState.flag ? a.price - b.price : b.price - a.price
      )
    }));
  }

  searchItem = (e) => { // 검색어를 내려줘야한다
    // e.preventDefault()
    const { keyWord } = this.state
    console.log(e.keyCode, e.target.value.trim().toLowerCase())
      console.log(e.keyCode)
    this.setState(prevState => ({ 
      keyWord : e.target.value.trim().toLowerCase(),
      serverData : prevState.serverData.map(data => [data.brand, data.price, data.name, data.description].includes(keyWord)
    )}) 
    )
  
}

  render(){
    const { serverData, keyWord } = this.state
    // console.log(this.state.serverData, this.state.flag) // 디버깅용
    console.log(keyWord)
    return(
      <>
      <Header
      handleClick={this.sortItem}
      inputEnter={(e) => this.searchItem(e)} 
      searchWord={keyWord}
      ></Header>
      <main>
        <Cardlist
        key = {serverData.id}
        products = {serverData}
        ></Cardlist>
        
      </main>
      </>
    )
  }
}

export default App