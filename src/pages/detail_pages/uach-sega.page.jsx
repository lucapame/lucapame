import React from "react";
import { Fragment } from "react";
import ImageViwer from "../../components/image-viwer.component";

const UachSegaPage = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="">
          <ImageViwer
            imgs={[
              "home.png",
              "home-dark.png",
              "grades.png",
              "grades-dark.png",
              "time-table.png",
              "time-table-dark.png",
              "kardex.png",
              "kardex-dark.png",
              "absence.png",
              "absence-dark.png",
            ]}
            path={"uach-sega"}
          ></ImageViwer>

          <div className="text ms-4 mt-5  animated  fadeInUp delay-1">
            <h1 className="fw-bold">UACH Sega Redisign</h1>
            <p className="fw-light  text-muted text-capitalize m-0 mx-1">
              Concept, Product design, UX reaserch, UI reaserch, Usability
              testing
            </p>
            <p className="fw-light  text-muted text-capitalize m-0 mx-1">
              Academic{" "}
            </p>
            <a
              href="https://luiscarlosparramendoza.medium.com/why-i-found-my-college-web-portal-the-worst-site-i-had-to-deal-with-2b4dec70188b"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mt-3"
            >
              Read medium post
            </a>

            <div className="mt-4 animated  fadeInUp delay-2 ">
              <p>
                What you will find here is a study case of my school website
                offering solutions or potential solutions to address some of the
                website problems as well as ideas for future implementations. My
                process was guided by user research, topics I have learned, and
                my design ideas. As a result of my research, I ended up with a
                new modern look for the old portal.
              </p>
              <p className="mb-4">
                {" "}
                If you are interested on know more about this project I suggest
                you open the Medium post I wrote of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UachSegaPage;
