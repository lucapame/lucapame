import React from "react";
import { Fragment } from "react";

const PlacesApp = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 px-4 pb-4 d-none d-md-block">
            <img
              src={`/images/places-app/home.png`}
              className="img-fluid animated  fadeInUp faster"
              alt="..."
            />
          </div>
          <div className="col-12 text-center col-md-8">
            <div className=" row row-cols-1 row-cols-md-4">
              <div className="col mb-2 d-block d-md-none">
                <img
                  src={`/images/places-app/home.png`}
                  className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                  alt="..."
                />
              </div>
              <div className="col mb-2">
                <img
                  src={`/images/places-app/profile.png`}
                  className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                  alt="..."
                />
              </div>
              <div className="col mb-2">
                <img
                  src={`/images/places-app/review.png`}
                  className="img-fluid thumnail-phone ms-4 animated fadeInUp delay-2  "
                  alt="..."
                />
              </div>
            </div>

            <div className="text ms-4 mt-5  animated  fadeInUp delay-4 text-start">
              <h1 className="fw-bold">Places review app</h1>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                UI Reaserch, Product design, concept
              </p>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Just for fun{" "}
              </p>

              <div className="mt-4 animated  fadeInUp delay-4">
                <p>
                  This concept is intended to be an aesthetic place-review app,
                  I made this concept with the intention of try new techniques
                  and concepts that I found fun at the time, like GlassMorphisim
                  and 3D text placement, creating an interesting layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlacesApp;
