import React from "react";
import "./style.scss"


const CostumersInput = ({type,value,name,errorText,onChange}) => {

    const handleChange = (e) => {
         onChange(e)
    }
      return <div className="add-information">
          <div className="add-input">
              <input   style={errorText ? {border :"4px solid red"} : {border:"2px solid green"}}
                       onChange={handleChange}
                       type={type} name={name}
                       value={value}
                       placeholder=" "
               />
              <label>{name}</label>
              <p>{errorText}</p>
          </div>

      </div>

}
export default CostumersInput