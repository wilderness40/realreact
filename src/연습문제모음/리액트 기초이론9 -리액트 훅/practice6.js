import './App.css'; 
import React, { useState } from 'react'; 
import bookWords from './dictionaryData' 
import Button from './Button' 

function App() { 
  const [ words, setWords ] = useState(bookWords)
 
  const handleRemove = (id, e) => { 
    const word = e.target.previousSibling.innerText 
    console.log(word) 
    console.log(id) 
    alert(`You want to delete word - ${word}?`) 
    const newWords = words.filter( (w, index) => index !== id ) // 제거하려는 단어의 id 와 일치하는 요소만 걸러냄 
    setWords(newWords) 
  } 

    const wordStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' } 
    
    return ( 
      <div> 
        <h1 style={{textAlign:'center'}}>Word List</h1> 
        {words.map( (w, id) => { 
            return ( 
              <div key={id} style={wordStyle}> 
                <h2>{w.word}</h2> 
                <Button size="small" type="button" handleClick={(e) => handleRemove(id, e)}>DELETE</Button> 
              </div> 
            ) 
        })} 
      </div> 
    ); 
} 

export default App;