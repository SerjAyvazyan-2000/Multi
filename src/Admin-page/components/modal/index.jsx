import React from "react";
import "./style.scss"



const Modal = ({children,onClose}) => {

    return <div className="modal-block">
           <div onClick={onClose} className="modal-bg"></div>
           <div className="modal-block-scroll">
            <div className="modal-content">
                {children}
            </div>
         </div>
    </div>
}

export default Modal