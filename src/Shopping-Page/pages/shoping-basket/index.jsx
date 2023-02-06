import React, {useEffect, useState} from "react";
import "./style.scss"
import Header from "../../header";
import useProducts from "../../components/hooks/data";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../../store/combine-reducer/reducer/basket";

const ShoppingBasket = () => {

  const dispatch = useDispatch()
  const [prise, setPrise] = useState(0)
  const [shipping, setShipping] = useState(0)
  const basketList = useSelector(state => state.BasketList.basketList)


  useEffect(() => {
    let sum = 0
    let shipping = 0
    basketList.forEach((item, index) => {
      sum += +item.Prise
      shipping += (+item.Prise * 20) / 100
      if (item.count) {
        sum += +item.Prise * item.count
      }
    })
    setPrise(+sum)
    setShipping(+shipping)
  }, [basketList])


  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }


  return <>
    <div className="shopping-basket">
      <div className="G-container">
        <div className="shopping-basket-container">
          <div className="basket-container-name">
            <p>Home / Shop / Shopping Cart</p>
          </div>

          <div className="product-table-payment">
          <div className='P-table-scroll'>
            <table className="table-block">
              <thead>
              <th>Products</th>
              <th>Name</th>
              <th>Price</th>
              <th>Sizes</th>
              <th>Colors</th>
              <th>Count</th>
              <th>Total</th>
              <th>Remove</th>

              </thead>
              <tbody>
              {basketList.length ? basketList.map((item, index) => {

                return <tr>
                  <td><img src={item.img} alt=""/></td>
                  <td>{item.Name}</td>
                  <td>{item.count ? item.Prise * item.count : item.Prise}$</td>
                  <td>{item.sizes ? item.sizes : "Standart"}</td>
                  <td>{item.color ? item.color : "Standart"}</td>
                  <td>{item.count ? item.count : 1}</td>
                  <td>{item.Prise}$</td>
                  <td>
                    <span onClick={() => handleDelete(item._id)} className="icon-cross "></span>
                  </td>

                </tr>
              }) : null}
              </tbody>
            </table>
          </div>
            {/*=====================================*/}

            <div className="payment-block">

              <div className="cart-summary">
                <p>CART SUMMARY</p>
              </div>

              <div className="payment-container">

                <div className="money-block">
                  <h2>Shipping</h2>
                  <h2>Total</h2>
                </div>

                <div className="money-block">
                  <h2>{shipping}$</h2>
                  <h2>{prise}$</h2>
                </div>
              </div>
               <div className="routing-checkout">
                 <NavLink to={'/checkout'}> Proceed To Checkout</NavLink>
               </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}
export default ShoppingBasket