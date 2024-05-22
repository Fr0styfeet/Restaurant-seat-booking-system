import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const Showcase = (props) => {
  const router= useRouter()
let dispatch= useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options)

  let data=useCart()
  let priceRef=useRef()

  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")

  let finalPrice=qty* parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  })


  const handleAddToCart = async () => {
    if (!localStorage.getItem("authToken")) {
      router.push("/Login")
    }
    else{
      toast("Added to cart")
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, Name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.foodItem.img })
        return
      }
      return
    }
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, Name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.img })



  
}
  return (
    <>
    <div  class="row    m-5"> 
    <div>
      <div className="card mt-2 " style={{"width": "18rem","marginLeft":"100px"}}>
        <img src={props.foodItem.img} className="card-img-top" alt="image thi" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.foodItem.name}</h5>
          <p className="card-text text-center">{props.foodItem.description}
          </p>
          <div className="container ">
            <select className="h-100 w-20 p-2 rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>
            <select className=" h-100 p-2 m-2 rounded" onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
                  {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}
            </select>

            <div className="d-inline m-2 fs-6">₹{finalPrice}</div>
          </div>
          <span href="#" className="btn btn-primary mt-3 d-flex flex-column justify-items-center" onClick={handleAddToCart}>
            Add to cart
          </span>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Showcase;
