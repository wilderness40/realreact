import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")

        this.setState({
            cart : this.state.cart.concat(product)
            // cart : this.state.cart.concat(product).map(product =>{return <h3>{product}</h3>}}) 여기에 쓰면 안되는 이유는 state는 바뀌어도 render는 한번되서 그런가?
        })

    }

    // 구현하기
    render(){
        const { cart } = this.state 
        console.log(cart)
        

       return(
        <>
        <h3>---------</h3>
        <>{cart.map(
            (product, id)=>{return <h3 key = {id} >{product}</h3>})} </>
        <button onClick={this.addProduct}>상품추가</button>
        </>
       ) 
    }
}
export default Cart