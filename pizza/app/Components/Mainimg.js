import React from 'react';

const Mainimg = () => {
  return (
    <>
    <div className="position-relative  d-inline-block" >
      <video autoPlay muted loop className="w-100" >
        <source src="/pizzavid2.mp4" type="video/mp4"  />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
     <h1 className='text-light font-weight-bold font-monospace text-center display-2' style={{fontWeight: 'bold'}}><b>
     UNLEASH A SYMPHONY  OF <br /> FLAVORS IN EVERY <br /> IRRESISTIBLE BITE
    </b> </h1>
    
  <div className="mt-3 ">
    <button type="button" className="btn btn-warning btn-lg font-weight-bold  text-white display-1" ><b>EXPLORE NOW</b></button>
  </div>
</div>
    </div>
    <br /><br /><br /><br />
   <h3 className=' font-weight-bold  text-center'>
   Craft your own pizza perfection with our 'Create Your Own Pizza'! <br />From crust to toppings, it's your flavor playground. <br />
   </h3>
    <br />
    <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
    <button type="button" className="btn btn-warning btn-lg font-weight-bold  text-white" ><b>CUSTOMIZE NOW</b></button>
    </div>
    <br /><br />
    <h3 className=' font-monospace text-center text-muted'>
        OR
    </h3>
    <br /><br />
    <h3 className=' font-weight-bold  text-center'>
    Discover the classics that steal the show! <br /> Check out our fan-favorite Standard Pizzas that have won hearts
   </h3>
</>
  );
};

export default Mainimg;



