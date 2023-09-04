import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    friends: [
      {name: 'victoria', age: 13, city: 'seoul'},
      {name: 'sun', age: 34, city: 'busan'},
      {name: 'johseb', age: 25, city: 'busan'},
      {name: 'syleemomo', age: 9, city: 'seoul'},
      {name: 'hannah', age: 41, city: 'daegu'},
      {name: 'shara', age: 37, city: 'seoul'},
      {name: 'martin', age: 28, city: 'daegu'},
      {name: 'gorgia', age: 39, city: 'seoul'},
      {name: 'nana', age: 24, city: 'busan'},
      {name: 'dannel', age: 19, city: 'seoul'},
    ],
    updatedFriends: null
  }
  // 구현하기
  filterCity = (city) => {
    // console.log(updatedFriends)

    let { friends, updatedFriends } = this.state 
    this.setState({updatedFriends : friends.filter(friend => friend.city.includes(city))})
    // updatedFriends = friends.filter(friend => friend.city.includes(city))
    // console.log(updatedFriends)
    // return updatedFriends
  }

  // 구현하기
  render(){
    let { friends, updatedFriends } = this.state 
    console.log(updatedFriends)
    console.log(friends)
    return (
      <>
        <button onClick={() => this.filterCity("seoul")}>서울</button>
        <button onClick={() => this.filterCity("busan")}>부산</button>
        <button onClick={() => this.filterCity("daegu")}>대구</button>
        <h1>필터링된 사용자 조회</h1>
        { 
          updatedFriends ? updatedFriends.map((friend, id) => 
          <h2 key={id}>이름 : {friend.name} 나이 : {friend.age} 도시 : {friend.city}</h2>
          ) : friends.map((friend, id) => <h2 key ={id}>이름: {friend.name} 나이: {friend.age} 도시: {friend.city}</h2>)
        }
      </>
    ) 
  }
}

export default App;