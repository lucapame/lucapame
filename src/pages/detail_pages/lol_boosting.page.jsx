import React from "react";
import { Fragment } from "react";

const LolBoostingSite = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6   ">
            <div className="maxheight">
              <img
                src={`/images/lol-boosting/landing.png`}
                className="img-fluid animated  fadeInUp faster"
                alt="..."
              />
              <img
                src={`/images/lol-boosting/calculator.png`}
                className="img-fluid animated  fadeInUp faster"
                alt="..."
              />
            </div>
          </div>
          <div className="col-6 ">
            <div className="images d-flex d-none d-md-block">
              <img
                src={`/images/lol-boosting/phone-mock.png`}
                className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                alt="..."
              />
            </div>

            <div className="text ms-md-4 mt-md-5 animated  fadeInUp delay-4">
              <h1 className="fw-bold">LOL Boosting Site</h1>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Web design, concept, UX design
              </p>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Client request{" "}
              </p>

              <div className="mt-4 animated  fadeInUp delay-4">
                <p>
                  This is a simple web design I made for a client, the client
                  came to me with a brief and I designed two layouts for his
                  website using a simple but original aesthetic giving the
                  website a fun and easy-to-watch layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LolBoostingSite;
