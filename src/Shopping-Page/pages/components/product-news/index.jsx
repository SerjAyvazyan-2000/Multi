import React from "react";
 import "./style.scss"

const ProductNews = () => {

     return      <section className="product-news-block">
         <div className="about-us">

             <div className="about-icon">
                 <span className="icon-checkmark"></span>
             </div>
             <div className="about-info">
                 <span>Quality Product</span>
             </div>

         </div>

         <div className="about-us">

             <div className="about-icon">
                 <span className="icon-truck"></span>
             </div>
             <div className="about-info">
                 <span>Free Shipping</span>
             </div>

         </div>

         <div className="about-us">

             <div className="about-icon">
                 <span className="icon-loop"></span>
             </div>
             <div className="about-info">
                 <span>14-Day Return</span>
             </div>

         </div>

         <div className="about-us">

             <div className="about-icon">
                 <span className="icon-phone"></span>
             </div>
             <div className="about-info">
                 <span>24/7 Support</span>
             </div>

         </div>
     </section>
}
export default ProductNews