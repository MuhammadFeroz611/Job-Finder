import React from 'react';
import './Companies.css'
import cocacola from '../Images/company/cocacola.png';
import google from '../Images/company/google.png';
import indeed from '../Images/company/indeed.png';
import microsoft from '../Images/company/microsoft.png';
import slack from '../Images/company/slack.png';
import walmart from '../Images/company/walmart.png';

function Companies() {
  return (
    <>
    <h2 className="title text-sm-start mb-sm-4">Top companies</h2>
    <div className="container-fluid pb-5 mb-md-3 mt-n2 mt-sm-0">
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={cocacola} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={google} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={indeed} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={microsoft} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={slack} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={walmart} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={cocacola} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={google} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={indeed} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={microsoft} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={slack} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={walmart} height="100" width="250" alt="" />
		</div>
	</div>
</div>














   {/* <h2 className="heading text-center text-sm-start mb-sm-4">Top companies</h2>
    <div className="cwrapper tns-carousel-wrapper d-flex tns-nav-outside tns-nav-outside-flush">
      <div className="tns-outer" id="tns2-ow">
        <div className="v-hidden" aria-live="polite" aria-atomic="true">
          slide <span className="current">13 to 11</span> of 6
        </div>
      </div>
      <div id="tns2-mw" className="tns-ovh">
        <div className="tns-inner" id="tns2-iw">
          <div className="tns-carousel-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
            data-carousel-options="{&quot;controls&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2},&quot;480&quot;:{&quot;items&quot;:3},&quot;680&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 12},&quot;850&quot;:{&quot;items&quot;:5, &quot;gutter&quot;: 16},&quot;1100&quot;:{&quot;items&quot;:6, &quot;gutter&quot;: 24}}}"
            id="tns2">
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={cocacola} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={cocacola} width="196" alt="Coca Cola"></img>
              </a>
            </div>
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={google} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={googleg} width="196" alt="Coca Cola"></img>
              </a>
            </div>
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={indeed} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={indeedg} width="196" alt="Coca Cola"></img>
              </a>
            </div>
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={microsoft} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={microsoftg} width="196" alt="Coca Cola"></img>
              </a>
            </div>
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={slack} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={slackg} width="196" alt="Coca Cola"></img>
              </a>
            </div>
            <div className="pb-1 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
              <a className="swap-image" href="/">
                <img className="swap-to" src={walmart} width="196" alt="Coca Cola"></img>
                <img className="swap-from" src={walmartt} width="196" alt="Coca Cola"></img>
              </a>
            </div>
        </div>
      </div>
    </div>
    </div>  */}
  </div>
    </>
  )
}

export default Companies
