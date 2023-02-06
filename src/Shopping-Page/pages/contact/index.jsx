import React from "react";
import "./style.scss"
import Header from "../../header";


const Contact = () => {

    return  <>
        <div className="contact-block">
         <div className="G-container">
              <div className="contact-container">
                  <div className="contact-home">
                      <p>Home/Contact</p>
                  </div>
                  <div className="contact-name">
                      <p>CONTACT US</p>
                  </div>
              </div>

              <div className="contact-user">
                   <div className="contact-form">

                       <div className="input-block">
                           <label>
                               <input type="text" placeholder="Your Name"/>
                           </label>
                       </div>

                       <div className="input-block">
                           <label>
                               <input type="text" placeholder="Your Email"/>
                           </label>
                       </div>
                       <div className="input-block">
                           <label>
                               <input type="text" placeholder="Subject"/>
                           </label>
                       </div>

                       <div className="input-block">
                           <label>
                               <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                           </label>
                       </div>
                     <button>Send Message</button>
                   </div>

                   <div className="contact-iframe">

                         <div className="iframe-container">
                             <iframe src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0"></iframe>
                         </div>

                         <div className="contact-online">
                             <span className="icon-location_on">  123 Street, New York, USA</span>
                             <span className="icon-envelop">  mail@domain.com</span>
                             <span className="icon-phone">  +012 345 67890</span>
                         </div>

                   </div>
              </div>
         </div>

    </div>
        </>
}
export default Contact