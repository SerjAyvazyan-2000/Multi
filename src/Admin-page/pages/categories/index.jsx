import React, {useEffect, useState} from "react";
import "./style.scss"
import Header from "../../container-admin/header";
import axios from "axios";
import CategoriesList from "./categories-list";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../../../store/combine-reducer/reducer/categories";


const Categories = () => {
  const categoriesList = useSelector(state => state.Categories.categoriesList)
  const dispatch = useDispatch()

  useEffect(() => {
    getCategories()
  }, [])


  const getCategories = async () => {
    const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/categories')
    if (result.data) {
      dispatch(setCategories(result.data))
    }
  }

  return <>
    <Header name="Add New Categories"/>
    <div className="categories-container">
      <div className="G-container">

        <div className="add-categories-name">
          <h1>Add New Categories</h1>
        </div>

        <div className="categories-backend">
          {categoriesList.length ? categoriesList.map((item, index) => {
            return <CategoriesList
              item={item}
              index={index}
              key={index}
              getCategories={getCategories}
            />

          }) : <p>Loading...</p>}
        </div>
      </div>
    </div>

  </>
}
export default Categories