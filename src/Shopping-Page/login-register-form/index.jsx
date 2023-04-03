import React, {useEffect, useState} from "react";
import "./style.scss"
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import {ToastContainer,toast} from "react-toastify";
import image from "../../assets/image/offer-1.jpg";
import {useSelector} from "react-redux";


const LoginRegister = () => {
    const [registerLoginPoppy,setRegisterLoginPoppy] = useState(false)

    const handleClick = () => {
        setRegisterLoginPoppy(!registerLoginPoppy)
    }

    return <>
        <div className="G-container">
            <div className="login-register-container ">
                 <span>Event Get Admin Form</span>
        <div className="login-register-form">
                    <div className="login-register-tools">
                        <div className="btn-submit"><button onClick={handleClick}>{registerLoginPoppy? "Login" :"Register"}</button></div>
                    </div>
                      <LoginForm registerLoginPoppy={registerLoginPoppy} />
                      <RegisterForm registerLoginPoppy={registerLoginPoppy}/>


                </div>

        </div>
        </div>

        </>
}
export default LoginRegister