import React from "react";
import { Fragment } from "react";

const ContactPage = () => {
  return (
    <Fragment>
      <div className="container max-height d-flex align-items-center ">
        <div className="card border-0 ">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-3 text-center">
                <img
                  src="/images/mimoji_2.png"
                  className="img-fluid animated  faster fadeInUp"
                  alt="..."
                />
              </div>
              <div className="col-12 col-md-8 col-lg-9  ps-3 text-center text-md-start">
                <p className="display-3 fw-bold mb-0  animated faster fadeInUp delay-1">
                  Luis C. Parra Mendoza
                </p>
                <p className="lead fw-light text-muted  animated  fadeInUp delay-1">
                  Computer Science Engineer
                </p>
                <p className="fs-3  mb-0 text-muted animated  fadeInUp delay-2">
                  Chihuahua, Chih. MX
                </p>
                <p className="fs-3  mb-0 text-muted animated  fadeInUp delay-3">
                  <strong>E-mail</strong> luiscarlosparramendoza@gmail.com
                </p>
                <p className="fs-3  mb-0 text-muted animated  fadeInUp delay-4">
                  <strong>Mobile</strong> Mobile +52 614 522 0744
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
