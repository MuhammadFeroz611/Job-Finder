import React from 'react';
import './Category.css';

function Category() {
  return (
   <>
   <section className="position-relative bg-white rounded-xxl-4 pt-md-3 zindex-5">
    <div className="container pt-5 pb-2 mb-4 mb-md-5">
      <h2 className="h3 pb-2 pb-sm-3">Jobs by category</h2>
      <div className="d-flex flex-wrap flex-column flex-sm-row">
       <a className="iconlists card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">Accounting</h3>
        </a>
        <a className="iconlists card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <div className="icon-box-media bg-light text-primary rounded-circle me-2">
            <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
          </div>
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">
            Marketing
          </h3>
        </a><a
          className="iconlists card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <div className="icon-box-media bg-light text-primary rounded-circle me-2">
            <i className="fa-sharp fa-solid fa-capsules"></i>
          </div>
          <h3 className="icon-box -title fs-sm ps-1 pe-2 mb-0">Medicine</h3>
        </a><a
          className="iconlists  card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <div className="icon-box-media bg-light text-primary rounded-circle me-2">
            <i className="fa-sharp fa-solid fa-wheat-awn"></i>
          </div>
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">
            Agriculture
          </h3>
        </a><a
          className="iconlists  card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <div className="icon-box-media bg-light text-primary rounded-circle me-2">
            <i className="fa-sharp fa-solid fa-computer"></i>
          </div>
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">IT</h3>
        </a><a
          className="iconlists  card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4"
          href="/">
          <div className="icon-box-media bg-light text-primary rounded-circle me-2">
            <i className="fa-sharp fa-solid fa-shield-check"></i>
          </div>
          <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">Security</h3>
        </a>
        <div className="dropdown mb-2 mb-sm-3">
          <a className="iconlists  card flex-row align-items-center flex-shrink-0 comp-hover border-0  rounded-pill py-2 ps-2 pe-4"
            href="/" data-bs-toggle="dropdown">
            <div className="icon-box-media bg-light text-primary rounded-circle me-2">
              <i className="fi-dots-horisontal"></i>
            </div>
            <h3 className="icon-box-title fs-sm ps-1 pe-2 mb-0">More</h3>
          </a>
          <div className="dropdown-menu dropdown-menu-sm-end my-1">
            <a className="dropdown-item fw-bold" href="/"><i
                className="fi-briefcase fs-base opacity-60 me-2"></i>Management</a><a className="dropdown-item fw-bold"
              href="/"><i className="fi-building fs-base opacity-60 me-2"></i>Construction</a><a
              className="dropdown-item fw-bold" href="/"><i
                className="fi-car fs-base opacity-60 me-2"></i>Transportation</a><a className="dropdown-item fw-bold"
              href="/"><i className="fi-cart fs-base opacity-60 me-2"></i>Retail & amp;
              Shopping</a><a className="dropdown-item fw-bold" href="/"><i
                className="fi-cash fs-base opacity-60 me-2"></i>Finance</a>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default Category

