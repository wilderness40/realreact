import React from "react";
import './Card.css'

function Card({ brand, image, name, price, description}){
    return(
     <>   
         <div className="product">
             <div className="product-img">
                <img src={image} alt={name}></img>
              </div>
                <div className="product-name"><h3>{brand}{name}({price})</h3></div>
                <div className="product-description">{description}</div>
            </div>
    </>
)
}

export default Card