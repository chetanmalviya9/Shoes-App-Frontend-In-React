import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from './Product'

export default function Arrival() {
   
   const brandList = useSelector(state => state.brand.value.brandList)

  return (
    <div>
      <section className="arrival_section">
         <div className="container">
            <div className="box">
               <div className="arrival_bg_box">
                  <img src="images/arrival-bg.png" alt=""/>
               </div>
               <div className="row">
                  <div className="col-md-6 ml-auto">
                     <div className="heading_container remove_line_bt">
                        <h2>
                           #NewArrivals
                        </h2>
                     </div>
                     <p style={{marginTop: "20px",marginBottom: "30px"}}>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <Link to="">
                     Shop Now
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
      <div className='container m-auto '>
            <div className='row mt-5'>
               {brandList.map((brand) => {
                  return <>
                     <div className='col-md-2 font-weight-bold'>
                       <button className='btn btn-lg btn-secondary'> {brand.brandName} </button>
                     </div>
                  </>
               })}
            </div>
         </div>
      <Product/>
    </div>
  )
}
