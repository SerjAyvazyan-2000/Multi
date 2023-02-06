import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoriesList:[]
}


const Categories = createSlice({
    name:'Categories',
    initialState,
    reducers:{
          setCategories(state,action){
              state.categoriesList = action.payload
          },
          deleteCategories(state,action){
               state.categoriesList.forEach((Item,index)=>{
                    if(action.payload === index){
                         state.categoriesList.splice(index,1)
                    }
               })
          },

          editCategories(state,action){
             const newEditList =  state.categoriesList.map((item,index)=>{
                  if(index === action.payload.editIndex){
                       item = action.payload.editContent
                  }
                  return item
             })
              state.categoriesList = newEditList
          },

         pushProduct(state,action){
            state.categoriesList.map((element,i)=>{
                if(element.name === action.payload.name){
                    element.productsList.push(action.payload.product)
                }


               })

         },
        deleteProducts(state,action){

            const newProductList = state.categoriesList.map((item,index)=>{
                if(action.payload.index === index){
                    item.productsList.splice(action.payload.product,1)
                }
                return item

            })
            state.categoriesList = newProductList
          }



    }
})

export  const {setCategories,deleteCategories,editCategories,pushProduct,deleteProducts} = Categories.actions
export default Categories.reducer