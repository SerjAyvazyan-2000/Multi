import React, {useEffect, useState} from "react";
import "./style.scss"
import CostumersInput from "../../../Admin-page/components/costumers-Input";
import useValidation from "../../components/hooks/validation";
import {setUsers} from  "../../../store/combine-reducer/reducer/authorization"
import {useDispatch, useSelector,} from "react-redux";
import {ToastContainer,toast} from "react-toastify"

const RegisterForm = ({registerLoginPoppy}) => {

   const {validation,errorText,setErrorText} = useValidation()
    const authorizationList = useSelector(state => state.Authorization.authorizationList)
    const dispatch = useDispatch()

    const [registerUser,setRegisterUser] = useState({
        FirstName:"",
        LastName:"",
        Email:'',
        Password:'',
        ConfirmPassword:""
    })

    const handleChange = (e) => {
        setRegisterUser({...registerUser,[e.target.name]:e.target.value})
        setErrorText({...errorText,[e.target.name]:''})
    }

    useEffect(()=>{
         if(authorizationList.length){
              localStorage.setItem("authorizationUser",JSON.stringify(authorizationList))
         }
    },[authorizationList])


    const handleClick = () => {
         if(validation(registerUser)){
             dispatch(setUsers(registerUser))
             setRegisterUser({...registerUser,
                 FirstName:"",
                 LastName:"",
                 Email:'',
                 Password:'',
                 ConfirmPassword:""
             })
         }
    }

    return     <>
        <div className={`register-form ${registerLoginPoppy? "register-left" :null}`}>
        <h2>Register Here</h2>
        <CostumersInput
            onChange={handleChange}
            name="FirstName"
            type="type"
            value={registerUser.FirstName}
            errorText={errorText.FirstName}
        />
        <CostumersInput
            onChange={handleChange}
            name="LastName"
            type="type"
            value={registerUser.LastName}
            errorText={errorText.LastName}
        />
        <CostumersInput
            onChange={handleChange}
            name="Email"
            type="type"
            value={registerUser.Email}
            errorText={errorText.Email}
        />
        <CostumersInput
            onChange={handleChange}
            name="Password"
            type="text"
            value={registerUser.Password}
            errorText={errorText.Password}
        />
        <CostumersInput
            onChange={handleChange}
            name="ConfirmPassword"
            type="text"
            value={registerUser.ConfirmPassword}
            errorText={errorText.ConfirmPassword}
        />

        <div className="btn-submit">
            <button onClick={handleClick}>Submit</button>
        </div>
    </div>
        <ToastContainer/>
        </>
}

export default RegisterForm