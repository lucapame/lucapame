import React from "react";
import { Fragment } from "react";

const FreedomSchool = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6   ">
            <div className="maxheight">
              <img
                src={`/images/freedom-school/landing-page.png`}
                className="img-fluid animated  fadeInUp faster"
                alt="..."
              />
            </div>
          </div>
          <div className="col-6">
            <div className="images d-flex d-none d-md-block">
              <img
                src={`/images/freedom-school/phone-mock.png`}
                className="img-fluid thumnail-phone ms-4 animated  fadeInUp delay-1 "
                alt="..."
              />
            </div>

            <div className="text ms-md-4 mt-md-5   animated  fadeInUp delay-4">
              <h1 className="fw-bold">Music School Site</h1>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Web design, concept
              </p>
              <p className="fw-light  text-muted text-capitalize m-0 mx-1">
                Client request{" "}
              </p>

              <div className="mt-4 animated  fadeInUp delay-4">
                <p>
                  This is a simple web design I made for a client who has a
                  music school, the client came to me with a brief and photos to
                  integrate into the website, I decided on all the conceptual
                  ideas and ended up with this simple and minimalistic design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FreedomSchool;
