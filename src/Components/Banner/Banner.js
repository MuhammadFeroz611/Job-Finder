import React from "react";
import Card from "./Card";
import data from "./Data";
function Banner() {
  return (
    <>
      <div className="container mb-4 mb-md-5">
        <div className="row">
          <Card details={data} />

          {/* 
    <div className="col-md-6 mb-4">
        <div className="card h-100">
          <div className="d-sm-flex align-items-center">
            <div className="pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0">
              <img className="d-block mx-auto" src={banner1} width="86" alt="Icon" />
            </div>
            <div className="card-body text-center text-sm-start">
              <h2 className="h5 mb-2">Recently added jobs</h2>
              <p className="mb-sm-4">
                Nulla sit congue nunc lacus, laoreet nulla iaculis faucibus.
                Ut morbi enim.
              </p>
              <a className="fw-bold text-decoration-none py-1" href="/">Find jobs<i
                  className="fi-chevron-right fs-xs ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <div className="d-sm-flex align-items-center">
            <div className="pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0">
              <img className="d-block mx-auto" src={banner2} width="86" alt="Icon" />
            </div>
            <div className="card-body text-center text-sm-start">
              <h2 className="h5 mb-2">Urgently hiring</h2>
              <p className="mb-sm-4">
                Viverra gravida id magna diam enim morbi enim mi vestibulum.
                Mus aliquet ut facilisi elit.
              </p>
              <a className="fw-bold text-decoration-none py-1" href="/">Find jobs<i
                  className="fi-chevron-right fs-xs ms-2"></i></a>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default Banner;
