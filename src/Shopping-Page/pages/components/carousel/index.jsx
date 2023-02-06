import React from "react";
import "./style.scss"


const Carousel = ({item}) => {


    return  <div className="carousel-block G-image G-center-flex-direction" style={{backgroundImage:`url(${item.img})`}}>
        <div className="carousel-bg"></div>
        <div className="carousel-information G-center-flex-direction">
            <span>{item.title}</span>
            <p>{item.description}</p>
            <button>Show Now</button>
        </div>

      </div>

}

export default Carousel