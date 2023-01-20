import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
   return (
      <div>
         <footer>
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <div className="full">
                        <div className="logo_footer">
                           <Link to="#"><img width="210" src="images/logo.png" alt="#" /></Link>
                        </div>
                        <div className="information_f">
                           <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                           <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                           <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <div className="row">
                        <div className="col-md-7">
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="widget_menu">
                                    <h3>Menu</h3>
                                    <ul>
                                       <li><Link to="#">Home</Link></li>
                                       <li><Link to="#">About</Link></li>
                                       <li><Link to="#">Services</Link></li>
                                       <li><Link to="#">Testimonial</Link></li>
                                       <li><Link to="#">Blog</Link></li>
                                       <li><Link to="#">Contact</Link></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="widget_menu">
                                    <h3>Account</h3>
                                    <ul>
                                       <li><Link to="#">Account</Link></li>
                                       <li><Link to="#">Checkout</Link></li>
                                       <li><Link to="#">Login</Link></li>
                                       <li><Link to="#">Register</Link></li>
                                       <li><Link to="#">Shopping</Link></li>
                                       <li><Link to="#">Widget</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-5">
                           <div className="widget_menu">
                              <h3>Newsletter</h3>
                              <div className="information_f">
                                 <p>Subscribe by our newsletter and get update protidin.</p>
                              </div>
                              <div className="form_sub">
                                 <form>
                                    <fieldset>
                                       <div className="field">
                                          <input type="email" placeholder="Enter Your Mail" name="email" />
                                          <input type="submit" value="Subscribe" />
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}
