import React from "react";
import './Cardlist.css'
import Card from "./Card";

function Cardlist({products}){ //props
    return (
        <div className="card-list">
        {
        products.map(product => 
                <Card
                key={product.id}
                brand={product.brand}
                image={product.image_link}
                name={product.name}
                price={product.price}
                description={product.description}
                ></Card>
        )
        }     
      </div>

        )
}

export default Cardlist

        // { reuturn } = ()  // 중괄호 안에 return 을 쓰는것과 ()괄호로 감싸주는것과 같은 결과가 나온다
