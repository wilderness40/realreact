import React, { Component } from "react";

class Friend extends Component{   
  
    render(){
        const { name, age, city } = this.props
        return(
            <>
                <h2>name: {name}</h2>
                <h3>age: {age}</h3>
                <h3>city: {city}</h3>
                ---------------------아무거나써도되나?★
            </>
        )
    }
}

export default Friend