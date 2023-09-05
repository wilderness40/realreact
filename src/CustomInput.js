import React, { Component } from "react";

class CustomInput extends Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef() // ref 생성하기 (변수 생성처럼)

    }
    focusInput = () => {
        console.log(this.textInput.current) // document.querySelector('input') 결과와 같다
        this.textInput.current.focus() // ref 사용하기
    }
    render(){
        return(
            <>
                <input type='text' ref={this.textInput}/> {/* ref 설정하기: 생성한ref 변수를 props 값으로 넣는다 */}
                <button onClick={this.focusInput}>포커스</button>
            </>
        )
    }
}


export default CustomInput