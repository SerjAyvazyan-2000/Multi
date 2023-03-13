import React, {useEffect, useRef, useState} from "react";
import "./style.scss"
import {useParams} from "react-router-dom"
import axios from "axios";
import {useDispatch} from "react-redux";
import {setProduct} from "../../../../../store/combine-reducer/reducer/basket";


const FeaturedDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [count,setCount] = useState(0)
    const [sizes,setSizes] = useState(0)
    const [colors,setColors] = useState('')
    const [featuredProducts,setFeaturedProducts] = useState({
        Name:'',
        Description:'',
        img:null,
        Prise:'',
        sizes:0,
        color:'',
        count:0

    })

    useEffect(()=>{
        getProducts()
    },[])

    useEffect(()=>{
         setFeaturedProducts({...featuredProducts,count:count,sizes: sizes,color: colors})
    },[count,sizes,colors])



    const getProducts = async () => {
         const result = await axios.get("https://crudcrud.com/api/930f836115ae432ead0852485b104105/products")
       if(result.data){
            result.data.forEach((item,index)=>{
                if(item._id === id){
                    setFeaturedProducts(item)
                }
            })
       }
    }

    const handlePlus = () => {
        setCount(count+1)
    }
    const handleMinus = () =>{
        if(count !== 0){
            setCount(count-1)
        }
    }
    const handleChangeRadio = (e) => {
        setSizes(e.target.value)
    }
    const changeColors =(e) => {
         setColors(e.target.value)
    }




    const handleClick = () => {
         dispatch(setProduct(featuredProducts))
    }




    return <>
         <div className="featured-detail">
          <div className="G-container">
             <div className="featured-detail-name">
                   <p>Home /Shop /Shop Detail</p>
             </div>

               <div className="featured-container">
                     <div  className="featured-detail-img-block G-center">
                         <div style={{backgroundImage:`url(${featuredProducts.img})`}} className="featured-detail-img G-image">

                         </div>
                     </div>

                    <div className="featured-detail-info">
                           <div className="information-block">
                                 <p>Product Name {featuredProducts.Name}</p>
                               <div className="stars-container">
                                   <ul>
                                       <li className="star">&#9733;</li>
                                       <li className="star">&#9733;</li>
                                       <li className="star">&#9733;</li>
                                       <li className="star">&#9734;</li>
                                       <li className="star">&#9734;</li>
                                       <li className="star">&#9734;</li>
                                   </ul>
                               </div>

                               <p> {featuredProducts.Prise}$</p>
                               <span>{featuredProducts.Description}</span>
                           </div>

                        <div className="change-block">
                            {/*==================================CHANGE SIZES============================*/}
                            <div className="sizes-change">
                              <h2>Sizes:</h2>
                                <label>
                                    <input onChange={handleChangeRadio} className="P-radio-input" value="20"  type="radio" name="sizes"   hidden />
                                    <span className="p-radio"></span>
                                    <p>XS</p>
                                </label>
                                <label>
                                    <input onChange={handleChangeRadio} className="P-radio-input" value="32" type="radio" name="sizes" hidden/>
                                    <span className="p-radio"></span>
                                    <p>X</p>
                                </label>
                                <label>
                                    <input onChange={handleChangeRadio} className="P-radio-input" value="44" type="radio" name="sizes" hidden/>
                                    <span className="p-radio"></span>
                                    <p>S</p>

                                </label>
                                <label >
                                    <input onChange={handleChangeRadio} className="P-radio-input" value="45" type="radio" name="sizes" hidden/>
                                    <span className="p-radio"></span>
                                    <p>ML</p>
                                </label>
                                <label >
                                    <input onChange={handleChangeRadio} className="P-radio-input" value="46" type="radio" name="sizes" hidden/>
                                    <span className="p-radio"></span>
                                    <p>XL</p>
                                </label>
                            </div>
            {/*==================================CHANGE COLORS============================*/}
                            <div className="change-colors">
                                <h2>Colors:</h2>
                                <label>
                                    <input onChange={changeColors} className="P-radio-input" value="black"  type="radio" name="colors"   hidden />
                                    <span className="p-radio"></span>
                                    <p>black</p>
                                </label>
                                <label>
                                    <input onChange={changeColors} className="P-radio-input" value="red" type="radio" name="colors" hidden/>
                                    <span className="p-radio"></span>
                                    <p>red</p>
                                </label>
                                <label>
                                    <input onChange={changeColors} className="P-radio-input" value="blue" type="radio" name="colors" hidden/>
                                    <span className="p-radio"></span>
                                    <p>blue</p>

                                </label>
                                <label >
                                    <input onChange={changeColors} className="P-radio-input" value="green" type="radio" name="colors" hidden/>
                                    <span className="p-radio"></span>
                                    <p>green</p>
                                </label>
                                <label >
                                    <input onChange={changeColors} className="P-radio-input" value="aqua" type="radio" name="colors" hidden/>
                                    <span className="p-radio"></span>
                                    <p>aqua</p>
                                </label>
                            </div>
                        </div>
                        {/*==========================Counter===============*/}
                        <div className="count-products">
                             <span onClick={handlePlus} className="icon-plus"></span>
                              <p>{featuredProducts.count}</p>
                             <span onClick={handleMinus} className="icon-minus"></span>
                        </div>
                        {/*================================ICONS=======================*/}
                        <div className="contact-products-online">
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Facebook</span>
                                    <span className="icon-facebook2"></span>
                                </li>
                                <li className="icon twitter">
                                   <span className="tooltip">Twitter</span>
                                    <span className="icon-twitter"></span>
                                </li>
                                <li className="icon instagram">
                                   <span className="tooltip">Instagram</span>
                                    <span className="icon-instagram"></span>
                                </li>
                            </ul>
                        </div>

                         {/*================================SUBMIT====================*/}
                         <div className="create-product">
                             <button onClick={handleClick} className="button-submit">
                                 <span className="text">Submit</span>
                                 <i className="icon-checkmark "></i>
                             </button>
                         </div>

                    </div>
               </div>
          </div>
    </div>
        </>
}
export default FeaturedDetail