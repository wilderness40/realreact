import React, { Component } from "react";
import { render } from "@testing-library/react";


class Lotto extends Component{
// state    
    state = {
        numbers:[],
        lotto: ""
    }

// 함수    
pickRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max-min+1) ) + min
    }

createNumber = () => {
    while(this.state.numbers.length < 6){
        const randomNum = this.pickRandomNumber(1,45)
    if(!this.state.numbers.includes(randomNum)  ){ // 중복됐을 경우는 배열이 증가하지 않는다? 
        this.state.numbers.push(randomNum)
    } 
}

this.setState({lotto : this.state.numbers.join(' ') }) // 이전 값을 초기화를 어떻게 하지? 삼항연산자 이전값과 새로운 값을 비교, 아니면 지워준다
this.setState({numbers :[] })


}


componentDidMount(){
    this.timerId = setInterval(this.createNumber, 1000)

}

componentWillUnmount(){
    clearInterval(this.timerId)
}

// render
render(){
        const { lotto } =this.state
    console.log(lotto)
        return(
            <>
                <h1>로또번호 자동 생성기</h1>
                <h2>{lotto}</h2> 
            </>
        )
    }
    }


export default Lotto