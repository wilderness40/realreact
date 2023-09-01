import React, { Component } from 'react'

class NameTag extends Component{
    state = {
        name: '초기 이름'
    }
    changeName = () => {
        this.setState({name: '수정된 이름'})
        // this.state.name = '수정된 이름'  이렇게 작성하면 값은 바뀌지만 render()호출이 없으므로 화면이 변경되지 않는다
        // 물론 값을 변경후 강제 랜더함수 호출을 할수도 있다. this.forceUpdate() 강제 렌더함수 호출
    }
    render(){
        // render() 안에 setState함수 작성시 무한루프가 발생한다 this.changeName() 무한루프 // ()=> this.changeName() 이거는 무한루프 안빠짐 초기에는 실행안되고 이벤트 발생시에만 실행
        console.log('NameTag')
        const { name } = this.state
        return(
            <>
                <h1>{name}</h1>
                <button onClick={this.changeName}>이름 변경하기</button>
                
            </>
        )
    }
}

export default NameTag