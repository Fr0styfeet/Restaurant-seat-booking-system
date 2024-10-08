"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


const Page = () => {
  const router = useRouter()
  const [cred,setCred]=useState({Name:" " ,email:" ",location:" ",password:""});

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({Name:cred.Name,email:cred.email,location:cred.location,password:cred.password
      })
    })
    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("Enter Valid credentials")
    }
    else{
      // toast("Signup Successful")
      alert("Signup Successful")
      router.push('/')      
    }
  }

  const onchange =(e)=>{
    setCred({...cred,[e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-50">
        <div className="signup-container bg-light p-4 rounded text-center shadow hover">
          <h1 className="signup-title">Sign Up</h1>
          <img src="/Images/pizzaeat.webp" className="img-fluid mt-3" alt="..." />
         
         <form onSubmit={handleSubmit}>
          <div className="signup-content mt-5">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="name" placeholder="e.g. John Doe, Jane Doe" name='Name' value={cred.Name} onChange={onchange} />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="email@example.com" name='email' value={cred.email} onChange={onchange}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
             <div className="form-floating mb-3">
              <input type="text" className="form-control" id="location" placeholder="Address" name='location' value={cred.location} onChange={onchange}/>
              <label htmlFor="floatingInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={cred.password} onChange={onchange}/>
              <label htmlFor="floatingInput">Password</label>
            </div>
           
            <button type="submit" id='signup-button' className="btn btn-success btn-lg mt-4">Create Account</button>
            <p className='m-3 text-primary cursor-pointer'><Link href="/Login " >Already a user?</Link></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;


