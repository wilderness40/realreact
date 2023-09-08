import React, { Component } from "react";
import './App.css'
import Header from "./Header";
import Cardlist from './Cardlist' 

class App extends Component{
  state = {
    serverData : [],
    flag : true,
    filteredData: [],
    enterSignal : true 
  }
// 검색하기  
  searchItem = (keyWord) => { // 검색어를 내려줘야한다
    // e.preventDefault()
    const { serverData, filteredData } = this.state
    this.setState( prevState => ({
      filteredData : serverData.filter(data =>  [data.brand, data.price, data.name, data.description].some(item =>
      item.toLowerCase().includes(keyWord)))}))
    console.log(filteredData)
}
// 가격별 오름차순, 내림차순 정렬하기
  sortItem = () => {
    this.setState(prevState => ({
      flag: !prevState.flag,
      serverData: [...prevState.serverData].sort((a, b) =>
        prevState.flag ? a.price - b.price : b.price - a.price
      )
    }));
  }

  componentDidMount(){
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(API_URL)
    .then(res => res.json())
    .then(data => { this.setState({ serverData: data })})
    console.log(this.state.searchResult)
  }
  

  render(){
    const { serverData, filteredData, enterSignal } = this.state
    // console.log(this.state.serverData, this.state.flag) // 디버깅용
    return(
      <>
      <Header
      handleClick={this.sortItem}
      serverData={serverData}
      searchClick={this.searchItem}
      enterSignal = {enterSignal}
      ></Header>
      <main>
        <Cardlist
        key = {serverData.id}
        products = {serverData}
        filterProducts = {filteredData}
        enterSignal = {enterSignal}
        ></Cardlist>
        
      </main>
      </>
    )
  }
}

export default App
