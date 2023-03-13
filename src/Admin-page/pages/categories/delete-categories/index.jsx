import React from "react";
import "./style.scss"
import axios from "axios";
import {deleteCategories} from "../../../../store/combine-reducer/reducer/categories";
import {useDispatch} from "react-redux";


const DeleteCategories = ({onClose,item,index}) => {
  const dispatch = useDispatch()
    const handleDelete = async () => {
         dispatch(deleteCategories(index))
         await deleteUser()
         onClose()
    }


    const deleteUser = async () => {
        await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/categories/${item._id}`)
        onClose()
    }

    return <div className="delete-categories">
          <div className="delete-name">
              <p>Do You Want Delete Categories <span>{item.name}?</span></p>
          </div>

        <div className="btn-delete">
            <button  onClick={handleDelete}>Yes</button>
            <button onClick={onClose}>no</button>
        </div>

    </div>
}
export default DeleteCategories