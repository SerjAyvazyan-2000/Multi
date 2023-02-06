import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     authorizationList:[],
     userToken:''
}


const Authorization = (createSlice({
     name:'Authorization',
     initialState,
     reducers:{
           setUsers(state,action){
                 state.authorizationList = [...state.authorizationList,action.payload]
           },

           checkUsers(state,action){
                const localUser = JSON.parse(localStorage.getItem("authorizationUser"))
               if(localUser){
                    state.authorizationList = localUser
               }
           },
           checkToken(state,action){
                 state.userToken = action.payload
           }
     }

}))
export const {setUsers,checkUsers,checkToken} = Authorization.actions
export default Authorization.reducer
