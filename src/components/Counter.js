import React, { Component } from "react";

// 클래스 컴포넌트 : this.props로 접근한다
// 함수 컴포넌트 : this없이 props로 접근한다.
// props값은 변경이 가능하지만 warning이 나오고 변경을 추천하지 않는 경고문이 나온다
class Counter extends Component{
    state = {
        count:0
    }
    componentDidMount(){
        this.timerId = setInterval( ()=> { 
            this.setState({count : this.state.count + 1})
        },1000)
    }
    componentWillUnmount(){
        alert('해당 컴포넌트를 보이지 않게 하시겠어요?')
        clearInterval(this.timerId)
    }
    render(){
        const { count } = this.state

        return(
            <div>
                <h1>카운팅 : {count}</h1>
            </div>
        )
    }

}
export default Counter