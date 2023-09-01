import React from "react";

class Person extends React.Component{ // 이거 질문하기 Component 작성위치
    state={
        name:"sunrise",
        age:23,
        friends:[
            "victoria",
            "daniel",
            "hanna"
        ]
    }

// 이벤트 핸들러 함수
displayInfo = () => {
    const { name, age, friends } = this.state
    alert(`*신상정보*\n=============\n이름: ${name}\n나이: ${age}\n친구: ${friends}`)
}

render(){
    return(
        <>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
}



}

export default Person