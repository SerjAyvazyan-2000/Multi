import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  basketList: []
}


const BasketList = createSlice({
  name: "BasketList",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.basketList = [...state.basketList, action.payload]

    },
    deleteProduct(state, action) {
      state.basketList.forEach((item, index) => {
        if (item._id === action.payload) {
          state.basketList.splice(index, 1)
        }
      })
    },
    setChangeProduct(state, action) {

    }

  }
})

export const {setProduct, deleteProduct} = BasketList.actions
export default BasketList.reducer