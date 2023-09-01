import React, { Component } from "react";

// 클래스 컴포넌트 : this.props로 접근한다
// 함수 컴포넌트 : this없이 props로 접근한다.
// props값은 변경이 가능하지만 warning이 나오고 변경을 추천하지 않는 경고문이 나온다
class Counter extends Component{
    render(){
        return(
            <>
                <h1>props 변경하기</h1>
            </>
        )
    }

}
export default Counter