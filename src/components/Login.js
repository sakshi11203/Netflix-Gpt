import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setisSignInForm] =useState(true);

    const toggleSignInForm=()=>{
setisSignInForm(!isSignInForm);
    }
  return (
    <div >
      <Header/>
      <div className= "absolute" >
        <img  src ="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
      alt ="logo"/>
      </div>
     <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
      {!isSignInForm &&(  <input type="text" placeholder='Full Name' className="p-4 my-4 w-full rounded border-2 bg-transparent bg-gray-950 " />)}
        <input type="text" placeholder='Email Address' className="p-4 my-4 w-full rounded border-2 bg-transparent bg-gray-950 " />
        <input type="password" placeholder='Password' className="p-4 my-4 w-full  rounded border-2 bg-transparent bg-gray-950" />
        <button className ="p-4  my-4 bg-red-700 w-full">{isSignInForm? "Sign In":"Sign Up"}</button>
       
        
        
            <p className =" py-4 cursor-pointer" onClick={toggleSignInForm} > {isSignInForm? "New to Netflix? Sign Up":"Already a user? Sign In"}</p>
       
        
     </form>
    </div>
  )
}

export default Login;
