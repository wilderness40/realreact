import './App.css';
import React, { useState, useEffect } from 'react';
import animals from './animalData'

function App() {
const [ count, setCount ] = useState(0)

const increaseCount = () => {
  setCount(count + 1)
  }

  useEffect(()=> {
    const countID = setInterval(increaseCount, 1000)
    return () => clearInterval(countID) 
   }, [count])

  const animal = animals[count%animals.length]
    console.log(animal)
    return (
      <div className="App">
        <h1>Image Gallery !</h1>
        <img src={animal.src} alt={animal.title}></img>
      </div>
    );
  
}

export default App;