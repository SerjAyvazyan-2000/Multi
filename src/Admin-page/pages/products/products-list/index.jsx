import React, {useState} from "react";
import "./style.scss"
import Modal from "../../../components/modal";
import DeleteForm from "../deleteProduct";
import AddProduct from "../add-product";

const ProductsList = ({item,index}) => {
    const [openModalDelete,setOpenModalDelete] = useState(false)
    const [openModalEdit,setOpenModalEdit] = useState(false)


    const handleDelete = () => {
        setOpenModalDelete(!openModalDelete)
    }
    const handleEdit = () => {
         setOpenModalEdit(!openModalEdit)
    }

    return <>
         <div className="products-list">
        <div className="products-change-tools">
            <span onClick={handleDelete} className="icon-cross"></span>
            <span onClick={handleEdit} className="icon-pencil2"></span>
        </div>
         <div className="products-info G-center-flex-direction">
                  <p><span>Name:</span>{item.Name}</p>
                  <p><span>Description:</span>{item.Description}</p>
                  <p><span>Prise:</span>{item.Prise}</p>
                  <p><span>Categoria:</span>{item.Categories}</p>
                   <img src={item.img} alt=""/>
         </div>

    </div>
        {openModalDelete ? <Modal onClose={handleDelete}>
               <DeleteForm item={item} index={index} onClose={handleDelete}/>
        </Modal> :null}
        {openModalEdit ? <Modal onClose={handleEdit}>
                   <AddProduct onClose={handleEdit} editItem={item} editIndex={index}/>
        </Modal> : null}

        </>
}
export default ProductsList