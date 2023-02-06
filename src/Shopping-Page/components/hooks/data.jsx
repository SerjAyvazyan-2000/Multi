import React, {useEffect, useState} from "react";
import categoriesClothes from  "../../../assets/image/categories-Clothes.jpg"
import categoriesPhotographic from  "../../../assets/image/categories-photographic-equipment.jpg"
import categoriesCream from  "../../../assets/image/categories-cream.jpg"
import categoriesShoes from  "../../../assets/image/ccategories-shoes.jpg"
import carousel1 from "../../../assets/image/carousel-1.jpg";
import carousel2 from "../../../assets/image/carousel-2.jpg";
import carousel3 from "../../../assets/image/carousel-3.jpg";
import ofter1 from "../../../assets/image/offer-1.jpg";
import ofter2 from "../../../assets/image/offer-2.jpg";
import photographic1 from "../../../assets/image/photographic-product-1.jpg";
import cloth1 from "../../../assets/image/cloth-blue-product-2.jpg";
import lamp from "../../../assets/image/lamp-product-3.jpg";
import shoe from "../../../assets/image/botas-product-4.jpg";
import photographic2 from "../../../assets/image/photographic-product-5.jpg";
import clock from "../../../assets/image/clock-product-6.jpg";
import cloth2 from "../../../assets/image/cloth-black-product-7.jpg";
import cream2 from "../../../assets/image/cream-product-8.jpg";
import advertisement1 from "../../../assets/image/advertisement-1.jpg"
import advertisement2 from "../../../assets/image/advertisement-2.jpg"
import advertisement3 from "../../../assets/image/advertisement-3.jpg"
import advertisement4 from "../../../assets/image/advertisement-4.jpg"
import advertisement5 from "../../../assets/image/advertisement-5.jpg"
import advertisement6 from "../../../assets/image/advertisement-6.jpg"
import advertisement7 from "../../../assets/image/advertisement-7.jpg"
import advertisement8 from "../../../assets/image/advertisement-8.jpg"

const useProducts = () => {


    const [carousel,setCarousel] = useState( [
        {img: carousel1, title: "Men Fashion", description: "Lorem rebum magna amet lorem magna erat diam stet. " +
                "Sadips duo stet amet amet ndiam elitr ipsum diam", id:1},
        {img: carousel2, title: "Men Fashion", description: "Lorem rebum magna amet lorem magna erat diam stet. " +
                "Sadips duo stet amet amet ndiam elitr ipsum diam", id:2},
        {img: carousel3, title: "Men Fashion", description: "Lorem rebum magna amet lorem magna erat diam stet. " +
                "Sadips duo stet amet amet ndiam elitr ipsum diam", id:3}
    ])

    const [discount,setDiscount] = useState([
          {img: ofter1, title: "SAVE 20%", description: "Special Offer", click: "Shop Now", id:1},
          {img: ofter2, title: "SAVE 20%", description: "Special Offer", click: "Shop Now", id: 3}
    ])

    const [advertisement ,setAdvertisement] = useState([
        {img:advertisement1}, {img:advertisement2}, {img:advertisement3},
        {img:advertisement4}, {img:advertisement5}, {img:advertisement6},
        {img:advertisement7}, {img:advertisement8},

    ])




return [discount,carousel,advertisement]

}
export  default useProducts