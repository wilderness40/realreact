import React, { Component } from "react";
import { render } from "@testing-library/react";


class Lotto extends Component{

    state = {
        numbers : []
    }

pickRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max-min+1) ) + min
    }

createNumber = () => {
    for(let i=0; i < 6; i++){
        const randomNum = this.pickRandomNumber(1,45)
    if( !this.state.numbers.includes(randomNum) && this.state.numbers.length < 7 && this.state.numbers.length !== 6 ){ // 중복됐을 경우는 배열이 증가하지 않는다? 
        this.state.numbers.push(randomNum)
    } 
}
 this.setState({numbers: [...this.state.numbers, this.state.numbers]}) // 이전 값을 초기화를 어떻게 하지? 삼항연산자 이전값과 새로운 값을 비교, 아니면 지워준다
}

componentDidMount(){
    this.timerId = setInterval(this.createNumber, 1000)
    // console.log(numbers)
}

componentWillUnmount(){
    clearInterval(this.timerId)
}

// 함수를 어디다가 써야하는지도 모르겠다
// function Component는 안되는건가?
// for문, if조건문 안되는 위치

// usestate 안써도 되는건지
// 위에 for문 숫자 6 이렇게 숫자값을 써도 될까? 


    render(){
        const { numbers } =this.state
        console.log(numbers, numbers.length)

        return(
            <>
                <h1>로또번호 자동 생성기</h1>
                <h2>{numbers}</h2> 
            </>
        )
    }
    }


export default Lotto