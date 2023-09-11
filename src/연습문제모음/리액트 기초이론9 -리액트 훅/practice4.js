import './App.css';
import React, { useState, useEffect } from 'react'
// import animals from './dummyData'

function App() {

  const [ numbers, setNumbers ] = useState('')
  
  const pickRandomNumber = (min, max) => { return Math.floor( Math.random() * (max-min+1) ) + min }

  const isDuplicated = (numbers, picked) => {
    return numbers.find(num => num === picked)
  }
  const getLottoNum = (numbers) => {
    // console.log("length: ", numbers)
    const picked = pickRandomNumber(1, 45)

    const duplicatedNum = isDuplicated(numbers, picked) // 중복체크
    if(duplicatedNum){
      console.log('duplicated ...', duplicatedNum)
      getLottoNum(numbers) // 로또배열에 랜덤으로 뽑은 숫자가 이미 존재하면 재귀적으로 다시 숫자를 뽑음 
    }else{
      numbers.push(picked)
    }
  }
  const showRandomNumber = () => {
    const numbers = [] // 로또번호 배열
    
    while(numbers.length < 6){
      getLottoNum(numbers)
    }

    setNumbers(numbers.join('  '))
  }

  useEffect(()=> {
  // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
    const countID = setInterval(showRandomNumber, 1000)
  // 사용자가 웹화면을 벗어나면 타이머를 해제함
    return () => clearInterval(countID)
  },[numbers])
 
 
   return (
     <div className='App'>
       <h1>로또번호 자동 생성기</h1>
       <h1>{numbers}</h1>
     </div>
   )
 }
 
 

  
export default App;