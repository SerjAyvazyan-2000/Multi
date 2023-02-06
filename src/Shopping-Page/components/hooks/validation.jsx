import React, {useState} from "react";



const useValidation = () => {

    const [errorText,setErrorText] = useState({
        FirstName:"",
        LastName:"",
        Email:'',
        Password:'',
        ConfirmPassword:""
    })


    const validation = (registerUser) => {
        let validate = true
        let errorString = {
            FirstName:"",
            LastName:"",
            Email:'',
            Password:'',
            ConfirmPassword:""
        }
        const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(!registerUser.FirstName.trim().length){
            errorString.FirstName = "Fill in The Required FirstName"
            validate = false
        }

        if(!registerUser.LastName.trim().length){
            errorString.LastName = "Fill in The Required LastName"
            validate = false

        }

        if(!registerUser.Email.trim().length){
            errorString.Email = "Fill in The Required Email"
            validate = false

        }else if(!validateMail.test(registerUser.Email)){
            errorString.Email = "Fill in Email"
            validate = false

        }

        if(!registerUser.Password.trim().length){
            errorString.Password = " Fill in The Required Pasword"
            validate = false


        }else if(registerUser.Password.trim().length && registerUser.Password.trim().length < 8){
            errorString.Password = "Should Not be Less 8"
            validate = false

        }

        if(!registerUser.ConfirmPassword.trim().length){
            errorString.ConfirmPassword = "Fill in The Required Confirm Password"
            validate = false

        }else if(registerUser.ConfirmPassword.trim().length && registerUser.ConfirmPassword.trim().length !== registerUser.Password.length){
            errorString.ConfirmPassword = "Do Not Correspond to Each Other Confirm Password and Password"
            validate = false
        }
        setErrorText(errorString)
        return validate
    }
  return {validation,errorText,setErrorText}
}

export default useValidation