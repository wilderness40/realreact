import Button from "./components/Button"


function Word({handleRemove, w}){    
    const wordStyle ={
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
      }

    return(
        <div style={wordStyle}>
            <h2>{w.word}</h2>
            {/* // 클릭할때마다 실행하려면 this.handleRemove가 아닌 콜백형태로 작성해야 한다 (e) => this.handleRemove */}
            <Button size='small' type='button' handleClick={handleRemove} >DELETE</Button>  
        </div>
    )
    
}

export default Word