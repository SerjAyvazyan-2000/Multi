import React from "react";
import "./style.scss"


const Logout = ({logoutUser,onClose}) => {


    return <div className="logout-block">
             <p>Do You Want to Go Out?</p>
        <div className="btn-logout">
            <button onClick={logoutUser}> <span className="icon-exit"></span>Yes</button>
            <button onClick={onClose}> <span className="icon-enter"></span>no</button>
        </div>
    </div>
}
export default Logout