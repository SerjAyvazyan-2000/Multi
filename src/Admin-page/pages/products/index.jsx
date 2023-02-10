import React, {useEffect, useState} from "react";
import "./style.scss"
import Header from "../../container-admin/header";
import axios from "axios";
import ProductsList from "./products-list";
import {createProducts} from "../../../store/combine-reducer/reducer/products";
import {useDispatch, useSelector} from "react-redux";


const Products = () => {
  const products = useSelector(state => state.Products.productList)
  const dispatch = useDispatch()


  const getProducts = async () => {
    const result = await axios.get("https://crudcrud.com/e997f1cf4348411eb31ec38e5d8bfca0/products")
    if (result.data) {
      dispatch(createProducts(result.data))
    }
  }
  useEffect(() => {
    getProducts()
  }, [])


  return <>
    <Header name="Add New Products"/>
    <div className="products-container">
      <div className="G-container">
        <div className="add-products">
          <h1>Add New Product</h1>
        </div>
        <div className="products-backend">
          {products.length ? products.map((item, index) => {
            return <ProductsList
              item={item}
              key={index}
              index={index}
            />
          }) : <p>Loading...</p>}
        </div>

      </div>
    </div>
  </>
}
export default Products