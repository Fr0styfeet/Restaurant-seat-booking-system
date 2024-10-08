"use client"
import React from 'react';
import Link from 'next/link';
import  { useState } from 'react';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const router = useRouter()
  const [cred,setCred]=useState({email:" ",password:""});

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:cred.email,password:cred.password
      })
    })
    const json = await response.json()
    console.log(json)

    if(!json.success){
      // toast("Enter Valid credentials")
      alert("Enter valid credentials")
    }
    else{
      alert("Login Successful")
      router.push('/')      
      localStorage.setItem("authToken",json.authToken)
      localStorage.setItem("userEmail",cred.email)
      // console.log(localStorage.getItem("authToken"))
    }
  }

  const onchange =(e)=>{
    setCred({...cred,[e.target.name]: e.target.value})
  }
  return (
   <>
    <div>
    <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="signup-container bg-light p-4 rounded text-center shadow hover">
          <h1 className="signup-title">Login</h1>
          <img src="/Images/pizzaeat.webp" className="img-fluid mt-3" alt="..." />
         
         <form onSubmit={handleSubmit}>
          <div className="signup-content mt-5">
            
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' value={cred.email} onChange={onchange}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={cred.password} onChange={onchange}/>
              <label htmlFor="password">Password</label>
            </div>
           
            <button type="submit" id='login-button' className="btn btn-success btn-lg mt-4">Login</button>
            <p className='m-3 text-primary cursor-pointer'><Link href="/Signup " >Not a user?</Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
   </>
  );
};

export default Page;
