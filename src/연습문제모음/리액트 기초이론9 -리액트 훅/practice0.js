import './App.css';
import Modal from './components/Modal';
import Button from './Button';
import React, { useState } from 'react';

function App() {
  const [ open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

    return (
      <div className="App">
        <Button handleClick={openModal}>Add Todo</Button>
        <Modal open={open}>
          <div className="header">You want to add new todo ?</div>
          <div className="body">
            <label>todo name: <input type="text"></input></label><br/>
            <label>todo description: <input type="text"></input></label>
          </div>
          <div className="footer">
            <Button size="small">Add</Button>
            <Button size="small" handleClick={closeModal}>Close</Button>
          </div>
        </Modal>
      </div>
    );
  
}

export default App;