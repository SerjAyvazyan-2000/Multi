import React from "react";
import "./style.scss"

const CostumersCheckbox = ({type,number,info,onclick,value,name}) => {

    const handleClick = (e) => {
         onclick(e)
    }

    return <div className="checkbox-block">
           <div className="checkbox-tools">
                   <input className="P-radio-input" value={value} name={name} onClick={handleClick} type={type}/>
                   <span className="P-radio">{info}</span>

           </div>
        <div>
              <span>{number}</span>
        </div>
    </div>
}
export default CostumersCheckbox