import React, {useRef, useState} from "react";
import "./style.scss"
import "../../../../assets/fonts/style.css"
import AddCategories from "../add-categories";
import Modal from "../../../components/modal";
import DeleteCategories from "../delete-categories";

const CategoriesList = ({item, index, getCategories}) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleDelete = () => {
    setOpenDeleteModal(!openDeleteModal)

  }
  const handleEdit = () => {
    setOpenEditModal(!openEditModal)
  }

  return <>
    <div  className="categories-list">
      <p>Categories Number {index + 1}</p>
      <div className="categories-change-tolls">
        <span onClick={() => handleDelete()} className="icon-cross"></span>
        <span onClick={() => handleEdit()} className="icon-pencil2"></span>
      </div>
      <div className="categories-information">
        <p><span>Name:</span>{item.name}</p>
        <img src={item.img} alt=""/>
      </div>
    </div>
    {openEditModal ? <Modal onClose={handleEdit}>
      <AddCategories editItem={item}
                     editIndex={index}
                     onClose={handleEdit}

      />
    </Modal> : null}
    {openDeleteModal ? <Modal onClose={handleDelete}>
        <DeleteCategories item={item} index={index} onClose={handleDelete}/>
      </Modal>

      : null}

  </>

}
export default CategoriesList