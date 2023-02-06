import React, {useState} from "react";
import "./style.scss"
import Modal from "../../components/modal";
import AddCategories from "../../pages/categories/add-categories";
import AddProduct from "../../pages/products/add-product";
import Logout from "../../components/logout";


const Header = ({name,selectedCount}) => {
    const [openModal,setOpenModal] = useState(false)
    const [logout,setLogout] = useState(false)


    const handleClick = () => {
        setOpenModal(!openModal)
    }
    const logoutUser = () => {
         let userToken = localStorage.getItem("userToken")
        if(userToken){
             userToken = ''
            localStorage.setItem("userToken",userToken)
            window.location.reload()
        }
    }

    const handleLogout = () => {
        setLogout(!logout)

    }
    return <div className="admin-header">
           <div className="header-container">
               <div className="G-container">
                   <div className="header-info">
                       <div style={name ==="Dashboard"  ? {display:"none"} : null} className="btn-name">
                           <button onClick={handleClick}>{name} {selectedCount}</button>
                       </div>

                       <div className="search">
                           <label>
                               <input type="text" placeholder="Search"/>
                           </label>
                       </div>
                       <div className="button-logout">
                           <button onClick={handleLogout}> <span className="icon-exit"></span>Logout</button>
                       </div>

                   </div>

               </div>

           </div>

        {openModal? <Modal onClose={handleClick}>
            {name === "Add New Categories" ? <AddCategories onClose={handleClick}/> : null}
            {name === "Add New Products" ? <AddProduct onClose={handleClick}/> : null}

        </Modal>: null}
        {logout? <Modal onClose={handleLogout}>
              <Logout onClose={handleLogout} logoutUser={logoutUser} />
        </Modal>: null}

    </div>
}

export default Header