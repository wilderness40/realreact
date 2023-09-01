import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const { cart } = this.state  // eslint-disable-line no-unused-vars
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.setState((prevState) => {
            return {cart : prevState.cart.concat(product)}
        })
    }

    // 구현하기
    render(){
        const { cart } = this.state
        console.log(cart)
        return(
            <>
            <button onClick={this.addProduct}>상품 추가하기</button>
            <h1>상품목록</h1>
            ----------------
            <h3>{cart}</h3>

            </>
        )
    }
}
export default Cart