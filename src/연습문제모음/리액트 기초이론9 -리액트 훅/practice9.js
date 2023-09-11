import './App.css';
import React, { useState } from 'react';
import Button from './Button'

function App() {

  const [fileName, setFileName] = useState('')
  const [imgSrc, setImgSrc] = useState('')

    const fileInput = React.createRef() // ref 생성하기 
  
  const isValid = (type) => {
    return type === 'image'
  }
 
  const handleChange = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const imgSrc = URL.createObjectURL(file)

    if(isValid(file.type.split('/')[0])){
      setFileName(file.name)
      setImgSrc(imgSrc)
    }else{
      setFileName( 'File is not valid type !')
      setImgSrc('')
    }

  }
  const openFileWindow = () => {
    fileInput.current.click() // ref 사용하기
  }
   
    return (
      <div className="App">
        <h1>{fileName}</h1>
        {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img> }
        <input className="Upload" type="file" onChange={handleChange} ref={fileInput} accept="image/*"></input>
        <Button handleClick={openFileWindow}>Upload</Button>  
      </div>
    );
  }

export default App;