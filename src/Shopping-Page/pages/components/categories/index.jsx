import React from "react";
import "./style.scss"
import {Link} from "react-router-dom"

const Categories = ({item}) => {
  return <Link to={`/photographic/${item._id}`} className="categories">
    <div className="categories-img G-image" style={{backgroundImage: `url(${item.img})`}}>
    </div>
    <div className="categories-info">
      <p>{item.name}</p>
    </div>
  </Link>
}
export default Categories