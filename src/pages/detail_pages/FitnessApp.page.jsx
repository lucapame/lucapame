import React, { useState } from "react";
import { Fragment } from "react";

const FitnesssApp = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 px-4 pb-4 d-none d-md-block">
            <img
              src={`/images/fitness-app/home-page.png`}
              className="img-fluid animated  fadeInUp faster"
              alt="..."
            />
          </div>
          <div className="col-12 text-center col-md-8">
            <div className=" row row-cols-1 row-cols-md-4">
              <div className="col mb-2 d-block d-md-none">
                <img
                  src={`/images/fitness-app/home-page.png`}
                  className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                  alt="..."
                />
              </div>
              <div className="col mb-2">
                <img
                  src={`/images/fitness-app/excercise-screen.png`}
                  className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                  alt="..."
                />
              </div>
              <div className="col mb-2">
                <img
                  src={`/images/fitness-app/running-page.png`}
                  className="img-fluid thumnail-phone ms-4 animated fadeInUp delay-2  "
                  alt="..."
                />
              </div>
              <div className="col mb-2">
                <img
                  src={`/images/fitness-app/gym-accsess.png`}
                  className="img-fluid thumnail-phone ms-4 animated fadeInUp delay-3"
                  alt="..."
                />
              </div>
            </div>

            <div className="text ms-md-4 mt-5  animated  fadeInUp delay-4 text-start">
              <h1 className="fw-bold">Fitness App</h1>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Concept, Product design
              </p>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Experimental{" "}
              </p>

              <div className="mt-4 animated  fadeInUp delay-4">
                <p>
                  This app concept takes away the struggle of keeping track of
                  your fitness life so you can focus into your goals, this app
                  provides you with a way to keep the track of all your activity
                  during the day and also is capable of connecting to your local
                  fitness centers to give you access to their installations or
                  even make a reservation for a private workout session with a
                  registered trainer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FitnesssApp;
