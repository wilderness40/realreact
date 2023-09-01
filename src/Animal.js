import React from "react";

function Animal({type, name, size, sound, appearance}){
    // 데이터 반환  함수형 컴포넌트는 render()가 필요없다?
        return(
            <>
                <h1>동물 정보</h1>
                <h3>종류 - {type}</h3>
                <h3>이름 - {name}</h3>
                <h3>크기 - {size}</h3>
                <h3>소리 - {sound}</h3>
                <h3>생김새 - {appearance}</h3>
            </>
        )
    }


export default Animal