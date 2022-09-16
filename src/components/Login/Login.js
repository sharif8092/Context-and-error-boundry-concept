import React from "react";
// import {useState} from "react";
import "./Login.css"
// import Profile from "./Profile.js";
import { userContext } from "../contex/contextlogin.js";



const Login = (props)=>{
   
  const {setUserName, setShowprofile} = React.useContext(userContext);
     
    return(
      <div className="login-box">
        <div className="login">
    
        <input type="text" placeholder='Username'  onChange={(e)=>setUserName(e.target.value)} />
        <input type="text" placeholder='Password'   />
        <button className="login-btn"
        onClick={()=>setShowprofile(true)}
        >Login</button>  
   </div>
   </div>     

    )
}
export default Login;