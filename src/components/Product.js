import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { updateCart } from "../reductconfig/CartSlice";
import WebService from '../reductconfig/WebService';
import WebApi from '../reductconfig/WebApi';

export default function Product() {
   const productList = useSelector(state => state.product.value.productList)
   // console.log(productList);

   const { isLogIn, user } = useSelector(state => state.user.value); 
   const { cartList } = useSelector(state => state.cart.value);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const addToCart = async (product) => {
      product=JSON.parse(JSON.stringify(product));
      if (isLogIn) {
         let status = true;
         if (cartList.length == 0)
            status = false;
         else {
            status = cartList.some(item => item._id == product._id);
            console.log(status)
         }
         if (status) {
            toast.info("Product is already added");
         }
         else {
            try {
               let response = await WebService.postApi(WebApi.ADD_CART_ITEM, { userId: user._id, product: product });
               product.quantity = 1;
               dispatch(updateCart(product));
               toast.success("Product added in cart");
            }
            catch (error) {
               console.log(error)
               toast.error("Oops! something went wrong..");
            }
         }
      }
      else
         navigate("/signin");
   }
   return (
      <div>
         <ToastContainer />
         <section className="product_section layout_padding">
            <div className="container">
               <div className="heading_container heading_center">
                  <h2>
                     Our <span>products</span>
                  </h2>
               </div>
               <div className="row">
                  {productList.map((product) => {
                     return <>

                        <div className="col-sm-6 col-md-4 col-lg-4">
                           <div className="box">
                              <div className="option_container">
                                 <div className="options">
                                    <Link to="" className="option1">
                                       Add to Favourite
                                    </Link>
                                    <a onClick={() => addToCart(product)} className="option2">
                                       <button className='btn'>Buy Now</button>
                                    </a>
                                 </div>
                              </div>
                              <div className="img-box">
                                 <img src={"/images/" + product.productImage} alt="" />
                              </div>
                              <div className="detail-box">
                                 <h5>
                                    {product.productName}
                                 </h5>
                                 <h6>
                                    ₹{product.productPrice}
                                 </h6>
                              </div>
                           </div>
                        </div>
                     </>
                  })}
               </div>
               <div className="btn-box">
                  <Link to="/product">
                     View All products
                  </Link>
               </div>
            </div>
         </section>

      </div>
   )
}
