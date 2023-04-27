import React from "react";
import "./Cities.css";
import dubai from "../Images/city/dubai.png";
import newyork from "../Images/city/new.york.png";
import paris from "../Images/city/paris.png";
import london from "../Images/city/london.png";
import bangkok from "../Images/city/bangkok.png";
import barcelona from "../Images/city/barcelona.png";

function Cities() {
  return (
    <>
      <section className=" pt-2 pt-sm-0 pb-5 mb-md-4">
        <div className=" d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">

    <div className=" ">

<h2 className="title"> Jobs by city</h2>
<div id="product-slider">
<div className="product-box">
<img src={dubai} alt="Jobs"/>
<div className="product-desc">
<h4>1530 jobs</h4>
<p>Dubai</p>
<button>Explore</button>
</div>
</div>
<div className="product-box">
<img src={newyork} alt="jobs"/>
<div className="product-desc">
<h4>1180 jobs</h4>
<p>New York</p>
<button>Explore</button>
</div>
</div>
<div className="product-box">
<img src={paris} alt="jobs"/>
<div className="product-desc">
<h4>1070 jobs</h4>
<p>Paris</p>
<button>Explore</button>
</div>
</div>
<div className="product-box">
<img src={london} alt="jobs"/>
<div className="product-desc">
<h4>1245 jobs</h4>
<p>London</p>
<button>Explore</button>
</div>
</div>
<div className="product-box">
<img src={bangkok} alt="jobs"/>
<div className="product-desc">
<h4> 1290 jobs</h4>
<p>Bangkok</p>
<button>Explore</button>
</div>
</div>
<div className="product-box">
<img src={barcelona}alt="jobs" />
<div className="product-desc">
<h4>1145 jobs</h4>
<p>Barcelona</p>
<button>Explore</button>
</div>
</div>

</div>
</div>
    </div>




      </section>
      
    </>
  );
}

export default Cities;
