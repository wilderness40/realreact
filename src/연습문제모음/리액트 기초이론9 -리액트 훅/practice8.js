import './App.css';
import React, { useState } from 'react';
import Button from './Button'

function App () {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
 
  const handleChange = (e) => {
    const { name, value } = e.target
    const idInput = document.querySelectorAll('input')[0]
    const pwInput = document.querySelectorAll('input')[1]
    console.log(idInput.value)
    setId(idInput.value) 
    setPassword(pwInput.value)
  }
  const login = (e) => {
    e.preventDefault() // 새로고침 방지
    console.log('login')
  }

    return (
      <div className="App">
        <form>
            <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={handleChange}></input></label><br/><br/>
            <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={handleChange}></input></label>
            <div className="login-btn"><Button handleClick={login}>Login</Button></div>
        </form>
      </div>
    );
  }


export default App;