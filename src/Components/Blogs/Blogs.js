import React from "react";
import img3 from "../Images/blog/03.jpg";
import img4 from "../Images/blog/04.jpg";
import img5 from "../Images/blog/05.jpg";
import "./Blogs.css";
import avatars1 from "../Images/avatars-1.png";
import avatars2 from "../Images/avatars-2.png";
import avatars3 from "../Images/avatars-3.png";
function Blogs() {
  return (
    <>
      <section className="container  pb-4 pb-md-5 mb-2 mb-md-3">
        <div className="d-sm-flex align-items-center justify-content-between pb-4 mb-sm-2">
          <h2 className="h3 mb-sm-0">Online journal by top HRs</h2>
          <a className="butnn btn-arrow fw-normal p-0" href="/">
            Go to blog
            <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-md-5 mb-4">
            <article className="card card-hover border-0 shadow-sm h-100">
              <a
                className="card-img-top overflow-hidden position-relative"
                href="/"
              >
                <span className="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">
                  New
                </span>
                <img className="imge" src={img3} alt="Image-new" />
              </a>
              <div className="card-body pb-3">
                <a
                  className="fs-xs text-uppercase text-decoration-none"
                  href="/"
                >
                  Guides
                </a>
                <h3 className="fs-base pt-1 mb-2">
                  <a className="p-link" href="/">
                    How to Hire World-Class Engineers
                  </a>
                </h3>
                <p className="fs-sm text-muted m-0">
                  Nunc, hac augue ante in facilisi id. Consectetur egestas orci,
                  arcu ac tellus. Morbi orci, nunc dictum...
                </p>
              </div>
              <a
                className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1"
                href="/"
              >
                <img
                  className="rounded-circle"
                  src={avatars1}
                  width="44"
                  alt="Avatar"
                />
                <div className="ps-2">
                  <h6 className="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                  <div className="d-flex text-body fs-xs">
                    <span className="me-2 pe-1">
                      <i className="fi-calendar-alt opacity-70 me-1"></i>May 23
                    </span>
                    <span>
                      <i className="fi-chat-circle opacity-70 me-1"></i>4
                      comments
                    </span>
                  </div>
                </div>
              </a>
            </article>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-6 mb-4">
                <article className="card card-hover border-0 shadow-sm h-100">
                  <a
                    className="card-img-top overflow-hidden position-relative"
                    href="/"
                  >
                    <img className="imge" src={img4} alt="Image-4" />
                  </a>
                  <div className="card-body pb-3">
                    <a
                      className="fs-xs text-uppercase text-decoration-none"
                      href="/"
                    >
                      Guides
                    </a>
                    <h3 className="fs-base pt-1 mb-2">
                      <a className="p-link" href="/">
                        How to Choose Your First Job In Tech
                      </a>
                    </h3>
                  </div>
                  <a
                    className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1"
                    href="/"
                  >
                    <img
                      className="rounded-circle"
                      src={avatars2}
                      width="44"
                      alt="Avatar"
                    />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">
                        Annette Black
                      </h6>
                      <div className="d-flex text-body fs-xs">
                        <span className="me-2 pe-1">
                          <i className="fi-calendar-alt opacity-70 me-1"></i>May
                          21
                        </span>
                        <span>
                          <i className="fi-chat-circle opacity-70 me-1"></i>No
                          comments
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
              <div className="col-sm-6 mb-4">
                <article className="card card-hover border-0 shadow-sm h-100">
                  <a
                    className="card-img-top overflow-hidden position-relative"
                    href="/"
                  >
                    <img className="imge" src={img5} alt="Image-5" />
                  </a>
                  <div className="card-body pb-3">
                    <a
                      className="fs-xs text-uppercase text-decoration-none"
                      href="/"
                    >
                      Tips &amp; Advice
                    </a>
                    <h3 className="fs-base pt-1 mb-2">
                      <a className="p-link" href="/">
                        15 Tips for a Better Resume
                      </a>
                    </h3>
                  </div>
                  <a
                    className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1"
                    href="/"
                  >
                    <img
                      className="rounded-circle"
                      src={avatars3}
                      width="44"
                      alt="Avatar"
                    />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">
                        Ralph Edwards
                      </h6>
                      <div className="d-flex text-body fs-xs">
                        <span className="me-2 pe-1">
                          <i className="fi-calendar-alt opacity-70 me-1"></i>May
                          19
                        </span>
                        <span>
                          <i className="fi-chat-circle opacity-70 me-1"></i>1
                          comment
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
