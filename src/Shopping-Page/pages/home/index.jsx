import React, {useEffect, useState} from "react";
 import "./style.scss"
import Slider from "react-slick"
import ProductNews from "../components/product-news";
import Carousel from "../components/carousel";
import Categories from "../components/categories";
import useProducts from "../../components/hooks/data";
import FeaturedProducts from "../components/featured-products";
import Discount from "../components/discount";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Advertisement from "../components/advertisement";
import axios from "axios";

const Home = () => {

    const  [discount,carousel,advertisement] = useProducts()
     const [categories,setCategories] = useState([])
     const [featured ,setFeatured] = useState([])


    let settingsCarousel = {
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots:true,
            arrows:false

        };
    let settingsAdvertisement = {
            slidesToShow: 6,
            slidesToScroll: 2,
             autoplaySpeed: 3000,
            autoplay: true,
            arrows:false
    }
    useEffect(()=>{
        getCategories()
        getProducts()
    },[])

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/categories')
        if(result.data){
          setCategories(result.data)
        }
    }
    const getProducts = async () =>{
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/products')
        if(result.data){
          setFeatured(result.data)
        }

    }
     return <>
          <div className=" G-container">
              <div className="carousel-container">
                  <div className="slider-container">
                     <Slider {...settingsCarousel}>
                         {carousel.length? carousel.map((item,index)=> {
                             return  <div>
                                 <Carousel item={item} key={index}/>
                             </div>
                         }):null}
                     </Slider>
                  </div>
               <div className="discount-box-carousel">
                  {discount.length ? discount.map((item,index)=> {
                      return <Discount item={item} key={index}/>
                  }): null}
               </div>
              </div>

              <ProductNews/>

              <div className="categories-block">
                  <p>CATEGORIES</p>
                <div className="categories-box">
                    {categories.length? categories.map((item,index)=> {
                        return <Categories item={item} key={index}/>
                    }):<span>Loading....</span>}
                </div>
              </div>
              <div className="featured-products">
                    <p>FEATURED PRODUCTS</p>
                  <div className="featured-products-block">
                      {featured.length?featured.map((item,index)=> {
                           return <FeaturedProducts item={item} index={index} key={index}/>
                      }) :<span>Loading....</span>}
                  </div>
              </div>
              <div className="discount-block">
                      {discount.length?discount.map((item,index)=> {
                          return <Discount item={item} key={index}/>
                      }) :null}
              </div>
              <div className="slider-advertisement">
                  {advertisement.length?
                 <Slider {...settingsAdvertisement}>
                     {advertisement.map((item,index)=>{
                         return <div>
                                <Advertisement item={item} key={index}/>
                         </div>
                     })}
                 </Slider>
                      :null}
            </div>

     </div>
         </>
}
export default Home