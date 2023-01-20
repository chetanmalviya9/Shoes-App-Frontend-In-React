import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart } from '../reductconfig/CartSlice';
import { emptyMessage, logOut } from '../reductconfig/UserSlice';

export default function Header() {
   const { isLogIn ,message } = useSelector(state => state.user.value);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const signout = () => {
      dispatch(emptyCart());
      dispatch(logOut());
      navigate("/signin");
   }
   const closeTag=()=>{
      dispatch(emptyMessage());
   }
   setTimeout(()=>{
      dispatch(emptyMessage());
   },5000)
   return (
      <div>

         <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <Link className="navbar-brand" to="/"><img width="250" height="80" src="images/ShoesLogo.png" alt="#" /></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item ">
                           <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="">Blog</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="">Contact</Link>
                        </li>
                        {
                           !isLogIn &&
                           <li className="nav-item">
                              <Link className="nav-link" to="signup">Sign Up</Link>
                           </li>
                        }
                        {
                           !isLogIn &&
                           <li className="nav-item">
                              <Link className="nav-link" to="/signin">Sign IN</Link>
                           </li>
                        }
                        {isLogIn &&
                           <li className="nav-item">
                              <a className="nav-link" onClick={signout}>Sign Out</a>
                           </li>
                        }

                        <button  className="btn  my-2 my-sm-0 nav_search-btn" >
                           <Link to="/viewcart"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                           </svg></Link>
                        </button>

                     </ul>
                  </div>
               </nav>
            </div>
         </header>
         {message&&
         <div className="alert alert-danger alert-dismissible fade show" role="alert">
         <strong className='text-center'>{message}</strong>
         <button onClick={closeTag} type="button" className="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
         }
      </div>
   )
}