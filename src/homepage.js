import React, { Fragment } from 'react';
import { ArrowRight,Bicycle } from 'react-bootstrap-icons';
import Footer from './Footer';
import Media from 'react-media';
import topbar from './img/ev_topbar.jpeg'
import './homepage.css'

const Homepage = () => {
    const [view,setView]=React.useState(false);
    const onclick=()=>{setView(!view)};
    return (
      <>
        {/* //Topbar */}
        <div className="">
          <Media
            queries={{
              small: "(max-width: 1199px)",
              large: "(min-width: 1199px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    <div className='container'>
                    <img
                      src="topbarsmall.jpeg"
                      alt="..."
                      className='mb-2'
                      style={{ width: "100%" }}
                    />
                      <div className="d-flex justify-content-center">
                        <h1
                          className="fw-light "
                          style={{ fontSize: "1.5rem" }}
                        >
                          The&nbsp;
                        </h1>
                        <h1
                          className="fw-bold "
                          style={{ fontSize: "1.5rem", color: "rgb(0 91 222)" }}
                        >
                          EV Charge App
                        </h1>
                      </div>
                      <h5
                        className=" text-secondary"
                        style={{ marginBottom: "2rem" }}
                      >
                        Stay connected on the ride with smart e-Vehicles
                      </h5>
                      <div className="">
                        <h5>
                          {" "}
                          The web-app is to provide<br/> EV owner the convenience of
                          locating charging stations on aerial map, exchange the
                          batteries, recommendations on paying charges online!
                        </h5>
                      </div>
                    </div>

                  </div>
                )}
                {matches.large && (
                  <div>
                    <div className="head-text">
                      <div className="head-image">
                        <img
                          src="ev_topbar.jpeg"
                          style={{ width: "100%" }}
                          alt="..."
                        />
                      </div>
                      <div className="text-on-image">
                        <div>
                          <div className="d-flex justify-content-start">
                            <h1
                              className="fw-light text-start"
                              style={{ fontSize: "2.5rem" }}
                            >
                              The&nbsp;
                            </h1>{" "}
                            <h1
                              className="fw-bold text-start"
                              style={{ fontSize: "2.5rem", color:"" }}
                            >
                              EV Charge App
                            </h1>
                          </div>
                          <h5
                            className="text-start text-secondary"
                            style={{ marginBottom: "3rem" }}
                          >
                            Stay connected on the ride with smart e-Vehicles
                          </h5>
                          <div className="">
                            <h5 className="text-start fw-light" style={{width: '40%'}}>
                              {" "}
                              The web-app is to provide EV owner the convenience
                              of locating charging stations on aerial map,
                              exchange the batteries, recommendations on paying
                              charges online!
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>

        {/* Three cards */}

        <div
          className="row "
          style={{
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          <div
            className="col-md-4 d-flex align-items-center"
            style={{ justifyContent: "center" }}
          >
            <div class="card m-4" style={{ maxWidth: "18rem", border: "none" }}>
              <img src="business.svg" style={{ height: "70px" }} alt="..." />
              <div class="card-body">
                <h3 class="card-title m-2">Experience</h3>
                <p class="card-text">
                  Premium EV charging for customers with 24/7 availablity
                </p>
                <button
                  className="btn rounded-pill text-white"
                  style={{
                    backgroundColor: "rgb(255 99 1)",
                    border: "none",
                  }}
                >
                  Explore your options
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 d-flex align-items-center"
            style={{ justifyContent: "center" }}
          >
            <div class="card m-4" style={{ maxWidth: "18rem", border: "none" }}>
              <img src="fleet.svg" style={{ height: "70px" }} alt="..." />
              <div class="card-body">
                <h3 class="card-title m-2">Reliable</h3>
                <p class="card-text">
                  Intelligent, flexible charging solutions to meet all your
                  Vehicles needs.
                </p>
                <button
                  className="btn rounded-pill text-white"
                  style={{
                    backgroundColor: "rgb(255 99 1)",
                    border: "none",
                  }}
                >
                  Explore your options
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 d-flex align-items-center"
            style={{ justifyContent: "center" }}
          >
            <div class="card m-4" style={{ maxWidth: "18rem", border: "none" }}>
              <img src="drivers.svg" style={{ height: "70px" }} alt="..." />
              <div class="card-body">
                <h3 class="card-title m-2">Adaptable</h3>
                <p class="card-text">
                  We make it easy to charge here, there and everywhere.
                </p>
                <button
                  className="btn rounded-pill text-white"
                  style={{
                    backgroundColor: "rgb(255 99 1)",
                    border: "none",
                  }}
                >
                  Explore your options
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Flowchart */}
        <div className="container my-4">
          <div className="row" style={{marginBottom: '4rem'}}>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div
                style={{
                  backgroundColor: "rgb(247 247 247)",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <img src="roadmap.jpeg" style={{ width: "100%" }} alt="..." />
              </div>{" "}
            </div>

            <div className="col-lg-6 ">
                <div className=''><h2 className='text-start' style={{color: "rgb(0 91 202)",marginBottom: '3rem'}}>Delievering <br />the latest technology</h2>
                <h4 className='text-start w-75 fw-light'> We are trying to make EV charging quick and convenient for you. Get access to our growing network of Public EV Charging points across the country on this Charge web app. Relax and enjoy your EV ride  no matter where you are going.</h4>
                </div>
                <button className='btn btn-success btn-bg d-flex justify-content-center my-4 '>Book a slot</button>
            </div>
          </div>
        </div>

        {/* //images */}
        <div className="mt-4">
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <img
                    src="bannersmall.jpeg"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                )}
                {matches.medium && (
                  <img src="banner.jpeg" alt="..." style={{ width: "100%" }} />
                )}
                {matches.large && (
                  <img src="banner.jpeg" alt="..." style={{ width: "100%" }} />
                )}
              </Fragment>
            )}
          </Media>
        </div>

        {/* chat */}
        <div className="fixed-bottom " style={{width: '100vw'}}>
          <div className="d-flex justify-content-end">
            {view && (
              <div className="m-2 ">
                <div
                  class="card"
                  style={{ maxWidth: "20rem", borderRadius: "10px" }}
                >
                  <div
                    class="card-body text-light "
                    style={{
                      backgroundColor: "rgb(0 123 204)",
                      borderStartEndRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <h5 class="card-title">Get In Touch</h5>
                  </div>
                  <img src="chatimg.jpeg" class="card-img-top" alt="..." />
                  <div class="card-body text-start">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <textarea
                      className="form-control p-2 w-100"
                      aria-label="Send a message"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={onclick}
              style={{ background: "none", border: "none" }}
            >
              {" "}
              <img
                src="call.png"
                className="m-4"
                style={{ height: "4rem", margin: "10px" }}
                alt=""
              />
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
}
 
export default Homepage;