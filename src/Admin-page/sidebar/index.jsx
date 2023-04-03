import React from "react";
import "./style.scss"
import {NavLink} from "react-router-dom";


const Sidebar = () => {

    return <div className="sidebar">
        <div className="admin-title">
            <div className="admin-title-multi">
                <h1>Multi</h1>
            </div>
            <div className="admin-title-shop">
                <h1>Shop</h1>
            </div>

        </div>

        <nav className="nav-menu">
            <ul>
                <li>
                    <NavLink to={"/categories"}>Categories</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}>Product</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}
export default Sidebar