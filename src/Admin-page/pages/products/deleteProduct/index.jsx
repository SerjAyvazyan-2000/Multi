import React, {useEffect} from "react";
import "./style.scss"
import {useDispatch} from "react-redux";
import {deleteProducts} from "../../../../store/combine-reducer/reducer/products"
import axios from "axios";

const DeleteForm = ({onClose,index,item}) => {
    const dispatch = useDispatch()

    const handleDelete = async () => {
         dispatch(deleteProducts(index))
        await deleteUser()

    }

    const deleteUser = async  () =>{
        await axios.delete(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/products/${item._id}`)

    }

    return <div className="delete-form">
        <p>Do You Want Delete Product <span>{item.Name}</span> ? </p>
        <div className="btn-delete">
            <button  onClick={handleDelete}>Yes</button>
            <button onClick={onClose}>no</button>
        </div>
    </div>
}
export default DeleteForm