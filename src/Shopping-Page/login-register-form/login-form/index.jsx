import React, {useEffect, useState} from "react";
import "./style.scss"
import CostumersInput from "../../../Admin-page/components/costumers-Input";
import useValidation from "../../components/hooks/validation";
import {useDispatch, useSelector} from "react-redux";
import {checkUsers,checkToken} from "../../../store/combine-reducer/reducer/authorization"
import {ToastContainer,toast} from "react-toastify";

const LoginForm = ({registerLoginPoppy}) => {
const authorizationList = useSelector(state => state.Authorization.authorizationList)
    const dispatch = useDispatch()

    const [loginUser,setLoginUser] = useState({
        Email:"",
        Password:""
    })

    const [errorText,setErrorText] = useState({
        Email:"",
        Password:""
    })

    const handleChange = (e) => {
          setLoginUser({...loginUser,[e.target.name]:e.target.value})
          setErrorText({...errorText,[e.target.name]:''})
    }
// =============BA LAV VOR REDUX CHLINER   VONC KANEYI ???==========================
  // useEffect(()=>{
  //         let localArray = JSON.parse(localStorage.getItem("authorizationUser"))
  //         if(localArray.length){
  //             {authorizationList = localArray}
  //         }
  //
  // },[])
  //   ======================uzum em stex  localic PARSE ANEM  bayc   ERORR================
 useEffect(()=>{
       dispatch(checkUsers())
 },[])


    const validation = () => {
        let validate = true
        const errorString = {
            Email:"",
            Password:""
        }
        const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!loginUser.Password.trim().length){
            errorString.Password = "Fill in The Required Password"
            validate = false
        }
        if(!loginUser.Email.trim().length){
            errorString.Email = "Fill in The Required Email"
            validate = false

        }else if(!validateMail.test(loginUser.Email)){
            errorString.Email = "Fill in Email"
            validate = false
        }
         setErrorText(errorString)
         return validate
    }

    const handleClick = () => {
    if(validation()){
        if(authorizationList.length){
            authorizationList.forEach((item,index)=>{
                if( item.Email === loginUser.Email && item.Password === loginUser.Password){
                    dispatch(checkToken(loginUser.Email + loginUser.Password))
                    localStorage.setItem("userToken",(loginUser.Email + loginUser.Password).toString())
                    window.location.reload()
                }
            })
        }

        setLoginUser({...loginUser,
            Email: '',
            Password: ""
        })

    }


    }

    return  <>
         <div className={`login-form ${registerLoginPoppy? "login-left" : null}`}>
        <h2>Login Here</h2>

        <CostumersInput
            onChange={handleChange}
            value={loginUser.Email}
            name="Email"
            type="type"
            errorText={errorText.Email}
        />

        <CostumersInput
            onChange={handleChange}
            value={loginUser.Password}
            name="Password"
            type="text"
            errorText={errorText.Password}
        />

        <div className="btn-submit">
            <button onClick={handleClick}>Submit</button>
        </div>
    </div>
        </>
}
export default LoginForm