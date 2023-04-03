import React from "react";
import "./style.scss"
import Header from "./header";
import Home from "./pages/home";
import Footer from "./footer";
import {Routes, Route} from "react-router-dom"
import Contact from "./pages/contact";
import ShoppingBasket from "./pages/shoping-basket";
import AdminPage from "../Admin-page/container-admin";
import CategoriesDetail from "./pages/components/categories/categories-details";
import FeaturedDetail from "./pages/components/featured-products/featured-detail";
import LoginRegister from "./login-register-form";
import Checkout from "./pages/checkout";

const ShoppingPage = () => {

    return <div className="shopping-page">

        <Header/>
        <div className="server-main">
            <Routes>
                <Route path={"*"} element={<Home/>}/>
                <Route path={"home"} element={<Home/>}/>
                <Route path={"/photographic/:id"} element={<CategoriesDetail/>}/>
                <Route path={"/featuredDetail/:id"} element={<FeaturedDetail/>}/>
                <Route path={"contact"} element={<Contact/>}/>
                <Route path={"basket"} element={<ShoppingBasket/>}/>
                <Route path={"login"} element={<LoginRegister/>}/>
                <Route path={"checkout"} element={<Checkout/>}/>
            </Routes>
            <Footer/>
        </div>

    </div>
}


export default ShoppingPage