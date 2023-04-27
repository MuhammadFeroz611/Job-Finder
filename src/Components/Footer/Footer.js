import React from 'react';
import footerimg from '../Images/job-board/footer-mobile.png';
import './Footer.css';
import insta from '../Images/Social/insta.png';
import fb from '../Images/Social/facebook.png';
import twitter from '../Images/Social/twitter.png';
import telegram from '../Images/Social/telegram.png';
import gmail from '../Images/Social/gmail.png';
function Footer() {
  return (
    <footer className="footer bg  pt-5">
    <div className="container pb-2">
      <div className="row align-items-center pb-4">
        <div className="col-md-6 col-xl-5">
          <div className="row">
            <div className="col-sm-4 mb-4 ele">
              <h3 className="h6 mb-2 pb-1 fs-base text-light">Finder</h3>
              <ul className="list-style fs-sm">
                <li>
                  <a className="decoration" href="/">About us</a>
                </li>
                <li>
                  <a className="decoration" href="/">News</a>
                </li>
                <li>
                  <a className="decoration" href="/">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 mb-4">
              <h3 className="h6 mb-2 pb-1 fs-base text-light">For Job Seekers</h3>
              <ul className="list-style fs-sm">
                <li>
                  <a className="decoration" href="/">Find job</a>
                </li>
                <li>
                  <a className="decoration" href="/">Post a resume</a>
                </li>
                <li>
                  <a className="decoration" href="/">Vacancy mailing</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 mb-4">
              <h3 className="h6 mb-2 pb-1 fs-base text-light">For Employers</h3>
              <ul className="list-style fs-sm">
                <li>
                  <a className="decoration" href="/">Find resume</a>
                </li>
                <li>
                  <a className="decoration" href="/">Post a job</a>
                </li>
                <li>
                  <a className="decoration" href="/">Resume mailing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="icokeeper text-nowrap border-top border-light py-4" >
           <a href='/'><img className='imgico  ' href="/" src={gmail} alt=''/></a>
           <a href='/'><img className='imgico ' href="/" src={insta} alt=''/></a>
           <a href='/'><img className='imgico ' href="/" src={fb} alt=''/></a>
           <a href='/'><img className='imgico ' href="/" src={telegram} alt=''/></a>
           <a href='/'><img className='imgico ' href="/" src={twitter} alt=''/></a>
          </div>
        </div>
        <div className="col-md-6 offset-xl-1">
          <div className="d-flex align-items-center">
            <div className="mcard card card-light card-body p-4 p-xl-5 my-2 my-md-0 text-white" >
              <div>  
              <h3 className="h4 text-light">Download Our App</h3>
              <p>
                  Now finding the new job just got even easier with our new app!
                </p>
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
            <img
                className="d-none d-xl-block ms-n4"
                src={footerimg}
                width="116"
                alt="Mobile app"
              />
          </div>
        </div>
      </div>
      <p className="fs-sm text-center text-sm-start mb-4">
        <span className="text-light opacity-50"
          >&copy; All rights reserved. Made by </span
        ><a className="nav-link-light fw-bold"  href="/"
          target="_blank"
          rel="noopener"
          >Portfolio</a>
      </p>
    </div>
  </footer>

  )
}

export default Footer
