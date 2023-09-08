import React from "react";
import './Cardlist.css'
import Card from "./Card";


function Cardlist({products, filteredData, enterSignal}){ //props
    return (
        <div className="card-list">
        {
        enterSignal ?        
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
        : filteredData?.map(filterData => 
              <Card
                key={filterData.id}
                brand={filterData.brand}
                image={filterData.image_link}
                name={filterData.name}
                price={filterData.price}
                description={filterData.description}
                >
              </Card>
        )
        }     
      </div>

        )
}

export default Cardlist

        // { reuturn } = ()  // 중괄호 안에 return 을 쓰는것과 ()괄호로 감싸주는것과 같은 결과가 나온다
