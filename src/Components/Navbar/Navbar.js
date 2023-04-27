import React from 'react';
import logo from '../Images/main-logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <>
   <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top m-0 p-0" data-scroll-header>
    <div className="container">
      <a className="navbar-brand me-0 me-xl-4" href="/"><img className="d-block" src={logo} width="116"
          alt="Finder" /></a>
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button><a
        className="btnnav btn-light btn-sm d-none d-lg-block order-lg-3" href="/signin"   >Sign in</a>
        <a className="butn btn-primary btn-sm rounded-pill ms-2 order-lg-3"
        href="/" >Post resume</a>
        <a
      className=" btnnav  btn-light btn-sm d-none d-lg-block order-lg-3  ms-2" href="/signup"
        > Sign Up <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
      </a>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll">
            <li className="nav-item dropdown me-lg-2">
              <a className="nav-link dropdown-toggle align-items-center pe-lg-4" href="/" data-bs-toggle="dropdown"
                role="button" aria-expanded="false"><i className="fa-sharp fa-solid fa-layer-group"></i>Demos<span
                  className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light"
                  ></span></a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="/">
                    Real Estate
                    Demo</a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/">Car Finder Demo
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/">Job Board
                    Demo</a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/">City Guide Demo</a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="main.html"><i className="fi-home fs-base me-2"></i>Main Page</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Components</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Documentation</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Home</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="/">For Job Seekers</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">For Employers</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Catalog</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="/">List of Jobs</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Single Job Page</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Account</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="/">Account Pages</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">Profile Settings</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">My Resumes</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Saved Jobs</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Notifications</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signin">Sign In</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">Sign Up</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="/">Post Resume</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">Step 1: Basic Info</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Step 2: Education</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Step 3: Work Experience</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Step 4: Skills</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Step 5: Review</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Ad Promotion Page</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Employer / Company Page</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Pages</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="/">About</a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">Blog Grid</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Contacts</a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Help Center</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">Help Topics</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Single Topic</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="/">404 Not Found</a>
                </li>
              </ul>
            </li>
            <li className="nav-item d-lg-none">
              <a className="nav-link" href="/signin" data-bs-toggle="modal"><i className="fi-user me-2"></i>Sign in</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
    </>
  )
}

export default Navbar
