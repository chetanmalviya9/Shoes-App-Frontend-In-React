import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebApi from "../reductconfig/WebApi";
import WebService from "../reductconfig/WebService";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reductconfig/UserSlice";
import { fetchCart } from "../reductconfig/CartSlice";
export default function SignIn(){
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const signin = async (e)=>{
    e.preventDefault();
    try{
     let response = await WebService.postApi(WebApi.USER_SIGNIN,{email: email, password: password});
    //  console.log(response.data)
     if(response.data.status){
        dispatch(setCurrentUser(response.data.userDetail));
        dispatch(fetchCart(response.data.userDetail._id));
        navigate("/product");
     }  
     
    }
    catch(error){
        toast.error("Invalid email or password");
    }  
  }
  return <>
   
         <ToastContainer/>
     <div className="container">
       <div className="row">
         <div  className="col-6 m-auto">
         <form onSubmit={signin}>
             <div className="form-group">
               <label>Email</label>
               <input type="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
             </div>
             <div className="form-group">
               <label>Password</label>
               <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
             </div>
             <div className="form-group">
               <button type="submit" disabled={(email=="" || password=="") ? true : false }   className="btn btn-success">Sign in</button>
             </div>
         </form>
         </div>
         </div> 
     </div>
</>  
}

