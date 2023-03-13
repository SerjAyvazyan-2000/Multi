import React, {useEffect, useState} from "react";
 import "./style.scss"
import CostumersInput from "../../../components/costumers-Input";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import img from "../../../../assets/image/offer-1.jpg"
import {createProducts} from "../../../../store/combine-reducer/reducer/products";
import {pushProduct} from "../../../../store/combine-reducer/reducer/categories";

import Logout from "../../../components/logout";

const AddProduct = ({onClose,editItem,editIndex}) => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const productsList = useSelector(state => state.Products.productList)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(editItem){
             setProducts(editItem)
        }
    },[])


     const [products,setProducts] = useState({
          Name:'',
          Description:'',
          img:null,
          Prise:'',
          Categories:''
     })

    const  [errorText,setErrorText] = useState({
        Name:'',
        Description:'',
        img:'',
        Prise:'',
        Categories:''
    })


    const validation = () => {
          let validate = true
        const errorString = {
            Name:'',
            Description:'',
            img:'',
            Prise:'',
            Categories:''
        }

        if(!products.Name){
             errorString.Name = "Fill in the Required Name"
            validate = false
        }
        if(!products.Description){
            errorString.Description = "Fill in the Required Description"
            validate = false

        }
        if(!products.Prise){
            errorString.Prise = "Fill in the Required Prise"
            validate = false

        }
        if(!products.Categories){
            errorString.Categories = "Fill in the Required Categories"
            validate = false

        }
        if(!products.img){
             errorString.img = "Fill in the Required IMG"
             validate = false
        }
         setErrorText(errorString)
        return validate
    }

    const handleChange = (e) => {
        setProducts({...products,[e.target.name]:e.target.value})
        setErrorText({...errorText,[e.target.name]:''})
    }



    const handleChangeSelect = (e) => {
        if(e.target.value || e.target.value === 0)
        categoriesList.forEach((item,index)=>{
            if(index === +e.target.value){
                products.Categories = item.name
            }
            if(item.name === products.Categories ){
                    dispatch(pushProduct({product:products,name:item.name}))

            }

        })


    }



    const updateProducts = async (id) => {
        const body = products
        delete body._id
         const result = await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/products/${id}`,body)
        if(result){
             getProducts()
            onClose()
        }
    }

  const getProducts = async () => {
    const result = await axios.get("https://crudcrud.com/api/930f836115ae432ead0852485b104105/products")
    if (result.data) {
      dispatch(createProducts(result.data))
    }
  }
    const createProductsData = async () => {
         const result = await axios.post("https://crudcrud.com/api/930f836115ae432ead0852485b104105/products",products)
      if(result){
        getProducts()
        onClose()
      }
    }


    const handleClick = async () => {
         if(validation()){
              if(editItem){
                  updateProducts(editItem._id)
              }else{
                  await createProductsData()
              }
             setProducts({...products,
                 Name: '',
                 Description: '',
                 Prise: '',
                 Categories: '',
                 img:""

              })
         }
    }
    const selectChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setProducts({...products,img:reader.result})
        }


    }


     return <div className="add-product">
         <div className="G-container">
             <div className="product-title">
                 <p>Add New Products</p>
             </div>

             <div className="products-add-tools">
                    <CostumersInput
                        onChange={handleChange}
                        name="Name"
                        errorText={errorText.Name}
                        value={products.Name}
                     />
                    <CostumersInput
                        onChange={handleChange}
                        name="Description"
                        errorText={errorText.Description}
                        value={products.Description}

                    />
                    <CostumersInput
                        onChange={handleChange}
                        name="Prise"
                        errorText={errorText.Prise}
                        value={products.Prise}
                    />
                    <div className="select-categories">
                        <p>Enter Categories</p>
                        <select onChange={handleChangeSelect}   name="Categories" id="">
                            <option value="">Select Categories</option>
                            {categoriesList.length? categoriesList.map((item,index)=>{
                                return <option value={index} key={index}>{item.name}</option>
                            }):null}
                        </select>
                        <span>{errorText.Categories}</span>

                    </div>

                     <div className="product-image">
                         {products.img && <img src={products.img} alt=""/>}
                         {/*{products.img &&  <img src={URL.createObjectURL(products.img)} alt=""/>}*/}
                         <input onChange={selectChange}  type="file" id="input-file"/>
                         <label className="icon-upload" htmlFor="input-file">Chose Image</label>
                         <p>{errorText.img}</p>
                     </div>

                 <div className="send-products">
                     <button onClick={handleClick} >Submit</button>
                     <button onClick={onClose}>Close</button>
                 </div>
             </div>

         </div>

     </div>
}
export default AddProduct