import React from "react";
import "./style.scss"



const Discount = ({item}) => {

    return <div className="discount-container">
        <div className="discount-img G-image G-center-flex-direction" style={{backgroundImage:`url(${item.img})`}}>
            <div className="discount-bg"></div>
        </div>
        <div className="discount-info">
            <p>{item.title}</p>
            <span>{item.description}</span>
            <button>{item.click}</button>
        </div>

    </div>



}
 export default Discount