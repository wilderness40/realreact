import React, { Component } from "react";
import './App.css'
import Header from "./Header";
import Cardlist from './Cardlist' 

class App extends Component{
  state = {
    serverData : []
  }

  componentDidMount(){
    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
       // setstate를 사용해야하는데.. state 값을 바꾸면 안되는데
    // 새로운 배열에 안넣고 그냥 data를 사용할순 없나
      this.setState({ serverData: data })
      // this.setState({ serverData: this.state.serverData.concat(data) })
    })
    
   
  }

  render(){
    const { serverData } = this.state
    console.log(serverData)

    return(
      <>
      <Header></Header>
      <main>
        <Cardlist
        products = {serverData}
        ></Cardlist>
        
      </main>
      </>
    )
  }
}

export default App

// import React, { Component } from "react";
// import './App.css'


// class App extends Component{

//   state = {
//     toggle:true
//   }


//   toggleScreenMode = () => {
//     this.setState({ toggle: !this.state.toggle })
//   }

//   render(){
//     const { toggle } = this.state
//     return(
//       <div className={ `normal ${toggle ? '' : 'dark'}`}>
//         <h1>Change Screen Mode</h1>
//         <button type='button' onClick={this.toggleScreenMode}>{toggle ? 'DARK' : 'NORMAL'}</button>
//       </div>
//   )
// }
// }

// export default App



// import './App.css'
// import Modal from './Modal'
// import Button from './Button'
// import { Component } from 'react'

// class App extends Component {
//   state={
//     open: false
//   }
  
//   openModal = () => {
//     this.setState({ open: true })
//   }
//   closeModal = () => {
//     this.clearInputs()
//     this.setState({ open: false })
//   }
//   // 입력창 초기화
//   clearInputs = () => {
//     const inputs = document.querySelectorAll('.Modal-body input')
//     for(let input of inputs){
//       input.value = ''
//     }
//   }

//   componentDidUpdate(){
//     if(this.state.open){ // 모달창이 열려있으면
//       const firstInput = document.querySelectorAll('.Modal-body input')[0]
//       firstInput.focus() // 첫번째 입력창에 focus를 준다
//     }
//   }

//   handleKeyUp = (e) => {
//     console.log(e.key)
//     if(e.key == 'Enter'){
//       this.closeModal()
//     }
//   }  

//  // css 모듈 : 겹치는 클래스명이더라도 서로 다른 해쉬값(영문자/숫자)를 생성하기 때문에 겹칠 일이 없음
//   render(){
//     const { open } = this.state
   
//     // Modal-header css 스타일링은 app.css / modal.css 둘다에 작성해도 적용됨, 하나로 합쳐지기 때문에
//   return(
//    <div className='App'>
//       <Button size='medium' handleClick={this.openModal}>할일 추가하기</Button>
//       <Modal open={open}>
//         <div className='Modal-header'>할일을 추가하시겠습니까?</div> 
//         <div className='Modal-body'>
//           <label>할일제목: <input type='text'/></label><br/>
//           <label>할일 상세설명: <input type='text' onKeyUp={this.handleKeyUp}/></label>
//         </div>
//         <div className='Modal-footer'>
//           <Button size='small'>추가</Button>
//           <Button size='small' handleClick={this.closeModal}>닫기</Button>
//         </div>
//       </Modal>
//    </div>
//   )
// }
// }

// export default App