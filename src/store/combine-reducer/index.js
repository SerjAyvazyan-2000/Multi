import {combineReducers} from "redux";
import Categories from "../combine-reducer/reducer/categories"
import Authorization from "../combine-reducer/reducer/authorization"
import Products from "../combine-reducer/reducer/products"
import BasketList from "../combine-reducer/reducer/basket"
const rootReducers = combineReducers({
  Categories,
  Authorization,
  Products,
  BasketList
})

export default rootReducers