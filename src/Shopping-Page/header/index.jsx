import React, {useEffect, useState} from "react";
import "./style.scss"
import "../../assets/fonts/style.css"
import {NavLink, useFetcher} from "react-router-dom";
import Modal from "../../Admin-page/components/modal";
import LoginRegister from "../login-register-form";
import {useSelector} from "react-redux";

const Header = () => {
    const basketList = useSelector(state => state.BasketList.basketList)

    const [openMenu,setOpenMenu] = useState(false)

    const handleClick = () => {
          setOpenMenu(!openMenu)
    }

    useEffect(()=>{
        console.log(basketList)
    },[])

     return <>
    <header className="header ">
        <div className="header-pages">
            <div className="G-container">
                 <div className="title-pages">

                     <div className="menu-pages">
                         <div className="title">
                             <div className="title-multi">
                                 <h1>Multi</h1>
                             </div>
                             <div className="title-shop">
                                 <h1>Shop</h1>
                             </div>
                         </div>

                         <nav className="header-menu">
                             <ul className="header-list">
                                 <li>
                                      <NavLink to={"home"}>Home</NavLink>
                                 </li>
                                 <li>
                                      <NavLink to={"contact"}>Contact</NavLink>
                                 </li>

                                 <li>
                                     <NavLink to={"heart"} className="icon-heart" ></NavLink>

                                 </li>
                                 <li>
                                     <NavLink to={"basket"} className="icon-cart">
                                         {basketList.length ? <span>{basketList.length}</span> : null}
                                     </NavLink>
                                 </li>
                                 <div className="button-login">
                                     <NavLink to={"login"}> <span className="icon-enter"></span>Login</NavLink>
                                 </div>
                             </ul>
                         </nav>
                         <div className="burger-menu">
                             <span onClick={handleClick}  className="icon-menu"></span>
                         </div>
                     </div>


                 </div>

            </div>

            </div>
     </header>

</>
}
export  default  Header