import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import WebApi from '../reductconfig/WebApi';
import WebService from '../reductconfig/WebService';

export default function SignUp() {
    const [email, setEmail] = useState();
    const navigate= useNavigate();
    const [password, setPassword] = useState();
    const signup = async (e)=>{
      toast.success("sign up successfully");
        e.preventDefault();
        let response = await WebService.postApi(WebApi.USER_SIGNUP,{email: email, password: password});
        console.log(response)
        if(response.data.status)
          {
            // navigate("/signin");
          }

        else
          window.alert("Signup Failed...");   
      }
    return (<>
          <ToastContainer/>
      <div className="container">
          <div className="row">
            <div  className="col-5 m-auto">
            <form onSubmit={signup} className="form-group">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                  <button type="submit" disabled={(email=="" || password=="") ? true : false } className="btn btn-primary ">Signup</button>
                </div>
            </form>
            </div>
            </div> 
        </div>
        </>
    )
}
