import React from "react";
import "./style.scss"


const Advertisement = ({item}) => {

    return <div style={{backgroundImage:`url(${item.img})`}} className="advertisement-info G-image"></div>
}
export default Advertisement