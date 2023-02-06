import {configureStore} from "@reduxjs/toolkit";
import rootReducers from "./combine-reducer";

const store = configureStore({
     reducer:rootReducers
})

export default store