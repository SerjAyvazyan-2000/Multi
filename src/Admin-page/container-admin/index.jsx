import React from "react";
import "./style.scss"
import Header from "./header";
import Sidebar from "../sidebar";
import {Route,Routes} from "react-router-dom"
import Categories from "../pages/categories";
import Products from "../pages/products";


const AdminPage = () => {

    return <section className="admin-page">
         <Sidebar/>
        <div className="container">
                  <Routes>
                      <Route path={"*"} element={<Categories/>}/>
                        <Route path={"categories"} element={<Categories/>}/>
                        <Route path={"products"}element={<Products/>}/>
                  </Routes>
        </div>


    </section>
}


export default AdminPage