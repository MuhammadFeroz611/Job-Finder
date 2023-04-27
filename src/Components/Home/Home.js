import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="pb-4 pt-5">
        <div className="container py-5">
          <div className="row align-items-center mt-2 mt-md-0 pt-md-4 pt-lg-5 pb-5">
            <div className="col-md-7 order-md-1">
              <h1 className="display-4 text-light pb-2 mb-4 mb-lg-5">
                Hack your way to the <span className="textspan">Dream Job</span>
              </h1>
              <h2 className="h5 text-light mb-4">Popular requests:</h2>
              <div className="d-flex flex-wrap">
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm me-2 mb-2 "
                  href="/"
                >
                  Engineer
                </a>
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm me-2 mb-2"
                  href="/"
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                  Customer Service
                </a>
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm me-2 mb-2"
                  href="/"
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                  Delivery
                </a>
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm me-2 mb-2"
                  href="/"
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                  Cashier
                </a>
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm me-2 mb-2"
                  href="/"
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                  Remote
                </a>
                <a
                  className="btnn text-light btn-xs rounded-pill pb-1 fs-sm mb-2"
                  href="/"
                >
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>IT
                </a>
              </div>
            </div>
          </div>

          <form className="form-group form-group-light d-block rounded-xl-pill mt-n3 mt-md-4 mt-xl-5 mb-md-4">
            <divdiv className="row align-items-center g-0 ms-n2">
              <div className="col-md-5 col-xl-3">
                <div className="inputsearch input-group-lg border-end-md border-light">
                  <input
                    className="frm"
                    type="text"
                    placeholder="Search site..."
                  />
                </div>
              </div>
              <hr className="hr-light d-md-none my-2" />
              <div className="col-md-7 col-xl-4 d-sm-flex">
                <div
                  className="dropdown w-sm-50 border-end-sm border-light"
                  data-bs-toggle="select"
                >
                  <button
                    className="btn btn-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fi-geo me-2"></i>
                    <span className="dropdown-toggle-label">Location</span>
                  </button>
                  <input type="hidden" />
                  <ul className="dropdown-menu dropdown-menu-dark my-3">
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">Dallas</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">Chicago</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">Houston</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">Las Vegas</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">Los Angeles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">New York</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">
                          San Francisco
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="hr-light d-sm-none my-2" />
                <div
                  className="dropdown w-sm-50 border-end-xl border-light"
                  data-bs-toggle="select"
                >
                  <button
                    className="btn btn-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fi-geo me-2"></i>
                    <span className="dropdown-toggle-label">Distance</span>
                  </button>
                  <input type="hidden" />
                  <ul className="dropdown-menu dropdown-menu-dark my-3">
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">10 miles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">20 miles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">30 miles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">40 miles</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <span className="dropdown-item-label">50 miles</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="hr-light d-sm-none my-2" />
                <div className="col-xl-5 d-sm-flex align-items-center">
                  <button
                    className="dbtn btn-primary px-30 w-100 w-sm-50 w-lg-auto rounded-pill mt-4 mt-sm-0"
                    type="button"
                  >
                    Find jobs
                  </button>
                </div>
              </div>
            </divdiv>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
