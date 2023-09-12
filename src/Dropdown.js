import './Dropdown.css'
import React, { useState } from "react";

function Dropdown(){
    return(
        <>
            <ul>드랍다운메뉴1
                <li><a>테스트1</a></li>
                <li><a>테스트2</a></li>
                <li><a>테스트3</a></li>
            </ul>
            <ul> 드랍다운메뉴2
                <li><a>테스트1</a></li>
                <li><a>테스트2</a></li>
                <li><a>테스트3</a></li>
            </ul>
            <ul> 드랍다운메뉴3
                <li><a>테스트1</a></li>
                <li><a>테스트2</a></li>
                <li><a>테스트3</a></li>
            </ul>
        </>
    )
}

export default Dropdown