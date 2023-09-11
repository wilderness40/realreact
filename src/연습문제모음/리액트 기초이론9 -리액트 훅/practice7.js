import './App.css';
import React, { useState } from 'react';
import images from './imageData'
import Button from './Button'

function App() {
  const [ index, setIndex ] = useState(0)

  const decreaseIndex = () => {
    const nextIndex = index - 1
    setIndex((nextIndex < 0) ? images.length - 1 : nextIndex)
  }
  const increaseIndex = () => {
    const nextIndex = index + 1
    setIndex((nextIndex > images.length - 1) ? 0 : nextIndex)
  }

    const path = images[index].src
    const title = images[index].title
    return (
      <div className="App">
        <div className="img-container">
          <img src={path} alt={title}/>
        </div>
  
        <div className="control-btns">
          <Button handleClick={decreaseIndex}>Prev</Button>
          <Button handleClick={increaseIndex}>Next</Button>
        </div>
      </div>
    );
  
}

export default App;