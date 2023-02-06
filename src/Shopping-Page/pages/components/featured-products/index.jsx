import React, {useEffect, useState} from "react";
import "./style.scss"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../../store/combine-reducer/reducer/basket";
import Logout from "../../../../Admin-page/components/logout";


const FeaturedProducts = ({item,index}) => {
    const basketList = useSelector(state => state.BasketList.basketList)
    const [createBasket,setCreateBasket] = useState(true)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(createBasket){
            dispatch(setProduct(item))
        }

    }


    const handleClickHeart = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }

    useEffect(()=>{
        if(basketList.length){
            basketList.forEach((element,i)=>{
                 if(element._id === item._id ){
                     setCreateBasket(false)
                 }
            })
        }
    },[basketList])


    return <Link to={`/featuredDetail/${item._id}`} className="featured-products-box">
          <div className="featured-img">
              <div className="img G-image" style={{backgroundImage:`url(${item.img})`}}>
                  <div className="featured-bg"></div>
              </div>
                    {/*<img src={item.img} alt=""/>*/}
                    <div className="featured-heart-basket">
                        <span onClick={(e)=>handleClickHeart(e)} className= "icon-heart"></span>
                        { createBasket?<span onClick={(e)=>handleClick(e)} className="icon-cart"></span> : null}
                    </div>

          </div>

        <div className="featured-info">
                 <h2>{item.Name}</h2>
                  <p>{item.Description}</p>
                 <p>{item.Prise}$</p>
        </div>
        {/*{!createBasket ? <p>Created</p> : null}*/}
    </Link>
}
export default FeaturedProducts