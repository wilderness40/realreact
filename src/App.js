
import './App.css';
import React, { Component } from 'react';
// import PhotoGallery from './PhotoGallery'
import Cart from './Cart'

class App extends Component {
  render(){
    return (
      <div className="App">
        {Cart.map(d => {
          return(
            <Cart
              Cart={d}
            ></Cart>
          )
        })}
      </div>
    )
  }
}

export default App;