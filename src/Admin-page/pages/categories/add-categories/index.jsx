import React, {useEffect, useState} from "react";
import "./style.scss"
import CostumersInput from "../../../components/costumers-Input";
import {useDispatch, useSelector,} from "react-redux";
import {setCategories} from "../../../../store/combine-reducer/reducer/categories";
import axios from "axios";

const AddCategories = ({onClose, item, editIndex, editItem}) => {
  const categoriesList = useSelector(state => state.Categories.categoriesList)
  const dispatch = useDispatch()
  const [categories, setCategoriesData] = useState({
    name: '',
    img: null,
    productsList: [],
    productsCount: 0,

  })
  const [errorText, setErrorText] = useState({
    name: '',
    img: ''
  })

  useEffect(() => {
    if (editItem) {
      setCategoriesData(editItem)
    }
  }, [])

  const validation = () => {
    let validate = true
    let errorString = {
      name: "",
      img: ''
    }

    if (!categories.name) {
      errorString.name = "Fil in the Required Name"
      validate = false
    }
    if (!categories.img) {
      errorString.img = "Fil in the Required Image"
      validate = false
    }
    setErrorText(errorString)
    return validate
  }


  const handleChange = (e) => {
    setCategoriesData({...categories, [e.target.name]: e.target.value})
    setErrorText({...errorText, name: ''})
  }

  const selectChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setCategoriesData({...categories, img: reader.result})
    }
  }


  const handleClick = async () => {
    if (validation()) {
      if (editItem) {
        updateData(editItem._id)
      } else {
        await createCategories()
      }
      // setCategoriesData({...categories, name: '', img: ''})
    }
  }

  const updateData = async (id)=>{
    const body = categories
    delete body._id
    const result = await  axios.put(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categories/${id}`, body)
    if(result){
      getCategories()
      onClose()
    }
  }

  const getCategories = async () => {
    const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categories')
    if (result.data) {
      dispatch(setCategories(result.data))
    }
  }


  const createCategories = async () => {
    const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categories', categories)
    if (result.data) {
      // console.log(getCategories)
     await getCategories()
      onClose()
    }
  }

  return <div className="add-categories">
    <div className="G-container">
      <div className="container-name">
        <h1>Add Categories</h1>
      </div>
      <CostumersInput
        onChange={handleChange}
        name="name"
        value={categories.name}
        type="text"
        errorText={errorText.name}
      />

      <div className="categories-image G-center-flex-direction">
        {categories.img && <img src={categories.img} alt=""/>}
        {/*{categories.img && <img src={URL.createObjectURL(categories.img)} alt=""/>  }*/}
        <input onChange={selectChange} type="file" id="upload-image"/>
        <label className="icon-upload" htmlFor="upload-image">Chose Image</label>
        <p>{errorText.img}</p>
      </div>

      <div className="send-categories">
        <button onClick={handleClick}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
}
export default AddCategories