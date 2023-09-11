import './App.css';
import React, { useState } from 'react'

function App() {
  const [ count, setCount ] = useState(0)

  const showUI = (cnt) => {
    let ui = null;
    switch(cnt){
      case 0:
        ui = <h1>Home</h1>
        break;
      case 1:
        ui = <h1>About</h1>
        break;
      case 2:
        ui = <h1>Detail</h1>
        break;
      default:
        ui = <h1>NotFound</h1>
    }
    return ui
  }
  const increase = () => {
    setCount(count + 1)
  }
    return (
      <>
      {showUI(count)}
      <button type="button" onClick={increase}>카운팅</button>
      </>
    )
  
}

export default App;