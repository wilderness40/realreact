import './App.css';
// import React, { Component } from 'react';
import Movie from '../../Movie';

const users = [
  {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
  {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
  {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
  {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
  {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
  {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
  {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
  {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
  {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
  {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
]

// 1. age가 0 보다 작거나 실수인 유효하지 않은 정보
// 2. email에 @가 존재하지 않거나  
// 3. email에.com 으로 끝나지 않은 사용자

function App(){
  console.log(parseInt(9.23))
  const newUser = users.filter(user => 
    user.age % 1 === 0 &&  // 또 다른 조건문 parseInt(user.age) === user.age
    user.age > 0 && 
    user.email.includes('com') && 
    user.email.includes('@') )

  return(
    <>
      <h1>유효한 사용자 정보</h1>
      {newUser.map(user => 
      <>
      <h3>{user.name} ({user.age})</h3>
      <h3>{user.city}</h3>
      <h3>{user.email}</h3>
      <h3>---------------</h3>
      </>
      )}

    </>
  )
}

export default App;