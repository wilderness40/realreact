import React from 'react' //jsx 문법 사용, Component는 class를 사용할 떄만 사용한다.

function Todo({ user, name, done, description }){
    return(
        <>
            <h2>사용자: {user}</h2>
            <h3>할일제목: {name}</h3>
            <h4>할일종료여부: {done? "종료":"진행중"}</h4>
            <p>할일 상세설명: {description}</p>
        </>
    )
}
export default Todo