import React from 'react';

const Mainimg = () => {
  return (
    <>
    <div className="position-relative  d-inline-block" >
      <video autoPlay muted loop className="w-100" >
        <source src="Images/restroimg.mp4" type="video/mp4"  />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
     <h1 className='text-light font-weight-bold font-monospace text-center display-2' style={{fontWeight: 'bold'}}><b>
     YOUR TABLE AWAITS <br/> BOOK THE PERFECT MOMENT
    </b> </h1>
    
  <div className="mt-3 ">
    <button type="button" className="btn btn-warning btn-lg font-weight-bold  text-white display-1" ><b>EXPLORE NOW</b></button>
  </div>
</div>
    </div>
    <br /><br /><br /><br />
    <h3 className=' font-weight-bold  text-center'>
    Discover a symphony of flavours with our curated restaurant partners – <br/>explore, indulge, and book your table now <br/> for an unforgettable dining experience
   </h3>
</>
  );
};

export default Mainimg;



