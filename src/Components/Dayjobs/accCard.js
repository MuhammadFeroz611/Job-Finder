import React from 'react';

function accCard(props) {
  return (
    <>
         {props.details.map((value, index)=> (
     <div className="card mb-2" data-bs-toggle="collapse" data-bs-target="#jobCollapse1" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={value.img} width="24" alt="IT Pro Logo" /><span
                    className="fs-sm text-dark opacity-80 ps-1">{value.title1}</span>
                </div>
              </div>
              <h3 className="h6 card-title pt-1 mb-0">{value.title2}</h3>
            </div>
            <div className="collapse" id="jobCollapse1" data-bs-parent="#accordionJobs">
              <div className="card-body mt-n1 pt-0">
                <p className="fs-sm">
                {value.description}<a href="/">{value.link}</a>
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fs-sm">
                    <span className="text-nowrap me-3"><i className="fi-map-pin text-muted me-1"> </i>{value.country}</span><span
                      className="text-nowrap me-3"><i className="fi-cash fs-base text-muted me-1"></i>{value.salary}</span>
                  </div>
                  <button className="btn btn-icon btn-light btn-xs text-primary shadow-sm rounded-circle" type="button"
                    data-bs-toggle="tooltip" title="Add to saved jobs">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))};
    </>
  )
}

export default accCard
