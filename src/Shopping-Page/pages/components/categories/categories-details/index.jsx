import React, {useEffect, useState} from "react";
import "./style.scss"
import {useParams} from "react-router-dom"
import Header from "../../../../header";
import useProducts from "../../../../components/hooks/data";
import CostumersCheckbox from "../costumers-checkbox";
import FeaturedProducts from "../../featured-products";
import axios from "axios";

const CategoriesDetail =() => {
    const {id} = useParams()
    const [featured] = useProducts()

    const [productsDetails,setProductsDetails] = useState([])
    const [checkedValue,setCheckedValue] = useState(null)


    useEffect(()=>{
        getProducts()
    },[checkedValue])

    const getProducts = async () => {
         const result = await axios.get("https://crudcrud.com/api/930f836115ae432ead0852485b104105/products")
        setProductsDetails(result.data)
        if(checkedValue === "10000"){
            setProductsDetails(result.data)
        }

        if(checkedValue === "100"){
         let filter100 = result.data.filter(item => item.Prise < 100 )
            setProductsDetails(filter100)

        }
        if(checkedValue === "200"){
            let filter200 = result.data.filter(item => item.Prise > 100 && item.Prise < 200)
            setProductsDetails(filter200)

        }
        if(checkedValue === "300"){
            let filter300 = result.data.filter(item => item.Prise > 200 && item.Prise < 300)
            setProductsDetails(filter300)

        }
        if(checkedValue === "400"){
            let filter400 = result.data.filter(item => item.Prise > 300 && item.Prise < 400)
            setProductsDetails(filter400)

        }
        if(checkedValue === "500"){
            let filter500 = result.data.filter(item => item.Prise > 400 && item.Prise < 500)
            setProductsDetails(filter500)

        }

    }

    const handleClick = (e) => {
        setCheckedValue(e.target.value)

    }


    return <>
    <div className="categories-detail">
          <div className="G-container">

                 <div className="categories-detail-title">
                       <p>Home / Shop / Categories Detail / List</p>
                 </div>

                <div className="detail-container">
                    {/*==========================FILTER PRODUCT=================*/}
                    <div className="filter-product">
                          <div className="filter-name">
                                <p>FILTER BY PRICE</p>
                          </div>
                        <div className="filter-container">
                         <CostumersCheckbox
                             onclick={handleClick}
                             type="radio"
                             number="1000"
                             info="All Price"
                             name="check"
                             value="10000"
                         />
                         <CostumersCheckbox
                             onclick={handleClick}
                             value="100"
                             type="radio"
                             number="150"
                             info="$0 - $100"
                             name='check' />
                         <CostumersCheckbox
                             onclick={handleClick}
                             type="radio"
                             value="200"
                             number="250"
                             info="$100 - $200"
                             name='check'/>
                         <CostumersCheckbox
                             onclick={handleClick}
                             type="radio"
                             value="300"
                             number="350"
                             info="$200 - $300"
                             name='check'/>
                         <CostumersCheckbox
                             onclick={handleClick}
                             type="radio"
                             number="450"
                             value="400"
                             info="$300 - $400"
                             name='check'/>
                         <CostumersCheckbox
                             onclick={handleClick}
                             value="500"
                             type="radio"
                             number="550"
                             info="$400 - $500"
                             name='check'/>
                        </div>
                        <div className="filter-name">
                              <p>FILTER BY Categories</p>
                        </div>
                        <div className="filter-container">
                            <CostumersCheckbox type="radio"  info="All Color" />
                            <CostumersCheckbox type="radio"  info="Red" />
                            <CostumersCheckbox type="radio"  info="Black" />
                            <CostumersCheckbox type="radio"  info="White" />
                            <CostumersCheckbox type="radio"  info="Green" />
                            <CostumersCheckbox type="radio"  info="Blue" />
                        </div>
                    </div>

{/*===========================================Product LIST================== */}
                     <div className="detail-product-list">
                         {productsDetails.length ? productsDetails.map((item,index)=>{
                              return <FeaturedProducts  item={item} key={index}/>
                         }):<span className="loader">Loading....</span>}
                     </div>

                </div>
          </div>
    </div>
        </>
}

export default CategoriesDetail