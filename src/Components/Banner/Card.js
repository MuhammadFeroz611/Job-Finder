import React from 'react';


function Card(props) {
    return(<>
      {props.details.map((value, index)=> (
   <div className="col-md-6 mb-4" key={index}>
        <div className="card h-100">
          <div className="d-sm-flex align-items-center">
            <div className="pt-4 ps-sm-4 py-sm-4 p-lg-5 flex-shrink-0">
              <img className="d-block mx-auto" src={value.img} width="86" alt="Icon" />
            </div>
            <div className="card-body text-center text-sm-start">
              <h2 className="h5 mb-2">{value.title}</h2>
              <p className="mb-sm-4 text-dark">
                {value.description}
              </p>
              <a className="fw-bold text-decoration-none py-1" href="/">{value.link}<i
                  className="fi-chevron-right fs-xs ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      ))};
   </>
   
  )
}

export default Card
