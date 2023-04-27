import React from 'react';
import home from '../Images/job-board/home-mobile.png'

function Mobileapp() {
  return (
    <>
    <section className=" pb-5 mb-md-4">
    <div className="bg-fd rounded-3 px-3 pt-5 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md-4 order-md-2 text-center">
          <h2 className="mb-md-4" >Download Our App</h2>
          <p className="fs mb-4 mb-md-0" >
            Now finding the new job just got even easier with our new app!
          </p>
        </div>
        <div className="col-md-4 order-md-3">
          <div className="d-flex flex-wrap flex-md-column justify-content-center align-items-center me-md-n4 me-lg-n5">
            <div className="d-flex flex-column flex-sm-row">
              <div className="dbtn">
               <i className="fa-brands fa-google-play"></i><span >Get it  on Play Store</span> 
              </div>
              <div className="dbtn">
               <i className="fa-brands fa-apple"></i><span >Get it  on App Store</span> 
              </div>
             </div>
          </div>
        </div>
        <div className="col-md-4 order-md-1 pt-2 pt-md-4">
          <img className="d-block mx-auto" src={home} width="255" alt="Mobile app" />
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Mobileapp
