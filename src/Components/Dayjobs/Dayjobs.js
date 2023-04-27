import React from 'react';
import hot from '../Images/jobs/hot.png';
import hot2 from '../Images/jobs/hot2.png';
import featured from '../Images/jobs/featured.png';
import featured2 from '../Images/jobs/featured2.png';
import illustration from '../Images/illustrations/post-resume-cta2.png';
import accCard from './accCard';
import data from './accData';

function Dayjobs() {
  return (
    <>
     <div className="container pb-5 mb-md-4">
    <div className="row">
      <div className="col-md-6 mb-3 mb-md-0">
        <div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
          <h2 className="h3 mb-sm-0">Jobs of the day</h2>
          <a className="butnn btn-arrow fw-normal p-0" href="/">
            View all
            <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
          </a>
        </div>


        
        <div id="accordionJobs">
  
         
          
          <div className="card mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse1">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={hot} width="24" alt="IT Pro Logo" /><span
                    className="fs-sm text-dark opacity-80 ps-1">IT Pro TV</span>
                </div>
                <span className="badge bg-faded-danger rounded-pill fs-sm">Hot</span>
              </div>
              <h3 className="h6 card-title pt-1 mb-0">Business Analyst</h3>
            </div>
            <div className="collapse" id="jobCollapse1" data-bs-parent="#accordionJobs">
              <div className="card-body mt-n1 pt-0">
                <p className="fs-sm">
                  Euismod nec sagittis sit arcu libero, metus. Aliquam nisl
                  rhoncus porttitor volutpat, ante cras tincidunt. Nec sit
                  nunc, ornare tincidunt enim, neque. Ornare pulvinar enim
                  fames orci enim in libero. <a href="/">Read more...</a>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-sm">
                    <span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>Chicago</span><span
                      className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$7,500</span>
                  </div>
                  <button className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button"
                    data-bs-toggle="tooltip" title="Add to saved jobs">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse2">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={featured} width="24" alt="Xbox Logo" /><span
                    className="fs-sm text-dark opacity-80 ps-1">Xbox Company</span>
                </div>
                <span className="badge  rounded-pill fs-sm">Featured</span>
              </div>
              <h3 className="h6 card-title pt-1 mb-0">Full-Stack Developer</h3>
            </div>
            <div className="collapse show" id="jobCollapse2" data-bs-parent="#accordionJobs">
              <div className="card-body mt-n1 pt-0">
                <p className="fs-sm">
                  Euismod nec sagittis sit arcu libero, metus. Aliquam nisl
                  rhoncus porttitor volutpat, ante cras tincidunt. Nec sit
                  nunc, ornare tincidunt enim, neque. Ornare pulvinar enim
                  fames orci enim in libero. <a href="/">Read more...</a>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-sm">
                    <span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>Washington</span><span
                      className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$13,000</span>
                  </div>
                  <button className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button"
                    data-bs-toggle="tooltip" title="Add to saved jobs">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse3">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={hot2} width="24" alt="XAMPP Logo" /><span
                    className="fs-sm text-dark opacity-80 ps-1">XAMPP Company</span>
                </div>
                <span className="badge bg-faded-danger rounded-pill fs-sm">Hot</span>
              </div>
              <h3 className="h6 card-title pt-1 mb-0">Sales Manager</h3>
            </div>
            <div className="collapse" id="jobCollapse3" data-bs-parent="#accordionJobs">
              <div className="card-body mt-n1 pt-0">
                <p className="fs-sm">
                  Euismod nec sagittis sit arcu libero, metus. Aliquam nisl
                  rhoncus porttitor volutpat, ante cras tincidunt. Nec sit
                  nunc, ornare tincidunt enim, neque. Ornare pulvinar enim
                  fames orci enim in libero. <a href="/" >Read more...</a>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-sm">
                    <span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>New
                      Jersey</span><span className="text-nowrap me-3"><i
                        className="fi-cash fs-base text-muted me-1"></i>$6,500</span>
                  </div>
                  <button className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button"
                    data-bs-toggle="tooltip" title="Add to saved jobs">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse4">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={featured2} width="24" alt="Elastic Logo" /><span
                    className="fs-sm text-dark opacity-80 ps-1">Elastic Inc.</span>
                </div>
                <span className="badge bg-faded-accent rounded-pill fs-sm">Featured</span>
              </div>
              <h3 className="h6 card-title pt-1 mb-0">Senior Credit Analyst</h3>
            </div>
            <div className="collapse" id="jobCollapse4" data-bs-parent="#accordionJobs">
              <div className="card-body mt-n1 pt-0">
                <p className="fs-sm">
                  Euismod nec sagittis sit arcu libero, metus. Aliquam nisl
                  rhoncus porttitor volutpat, ante cras tincidunt. Nec sit
                  nunc, ornare tincidunt enim, neque. Ornare pulvinar enim
                  fames orci enim in libero. <a href="/">Read more...</a>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-sm">
                    <span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>Dallas</span><span
                      className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>$8,000</span>
                  </div>
                  <button className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button"
                    data-bs-toggle="tooltip" title="Add to saved jobs">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 

      </div>
      <div className="col-md-1">
        <hr className="hr-vertical mx-auto" />
      </div>
      <div className="col-md-5 text-center text-md-start">
        <img className="d-block mx-auto mb-4" src={illustration} width="416"
          alt="Illustration" />
        <h2 className="h3 pt-2 mb-4">
          Professional CV is your ticket to the dream job
        </h2>
        <p className="pb-md-3">
          Create a great resume on Finder and take a step toward finding
          your dream job!
        </p>
        <a className=" butn  ms-sm-auto" href="/">Post Resume</a>
      </div>
    </div>
  </div>
    </>
  )
}

export default Dayjobs
