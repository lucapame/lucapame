import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BigItemComponent from "../../components/big-item.component";
import "./style.scss";

const Landing = () => {
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="about text-center">
          <img
            src="/images/mimoji_1.png"
            className="img-fluid animated faster fadeIn"
            alt="..."
          />

          <h1 className="fw-bold animated  fadeInUp">Luis C. Parra Mendoza</h1>
          <div className="">
            <p className="mx-md-5 m-3 animated  fadeInUp">
              I'm a computer science engineer passionate about UX design. I
              understand that the perfect User Interface should look great and
              work even better. I like to think creatively to bring innovation
              to my work, and my philosophy is all about designing beautiful
              experiences that leave a positive impact on people.
            </p>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row container  row-cols-1 row-cols-md-2 m-0">
            <div className="col mt-4 animated  fadeInUp delay-1">
              <Link to="/fitness-app" className="unstyled-link ">
                <BigItemComponent
                  img="fitness_app.png"
                  tags={["concept", "product", "design"]}
                  type="experimental"
                  title="Fitness App"
                />
              </Link>
            </div>

            <div className="col mt-4 animated  fadeInUp delay-2">
              <Link
                to="/uach-sega"
                className="unstyled-link animated  fadeInUp delay-1"
              >
                <BigItemComponent
                  img="uach_sega.png"
                  tags={[
                    "concept",
                    "product design",
                    "UX reaserch",
                    "UI reaserch",
                    "usability testing",
                  ]}
                  type="academic"
                  title="UACH Sega redisign"
                />
              </Link>
            </div>

            <div className="col mt-4 animated  fadeInUp delay-1">
              <Link
                to="/lol-boosting"
                className="unstyled-link animated  fadeInUp delay-1"
              >
                <BigItemComponent
                  img="lol_boosting.png"
                  tags={["web design", "concept", "UX design"]}
                  type="client request"
                  title="Client Website"
                />
              </Link>
            </div>
            <div className="col mt-4 animated  fadeInUp delay-2">
              <Link
                to="/freedom-school"
                className="unstyled-link animated  fadeInUp delay-1"
              >
                <BigItemComponent
                  img="music_freedom.png"
                  tags={["web design", "concept"]}
                  type="client request"
                  title="Music School website"
                />
              </Link>
            </div>
            <div className="col mt-4 animated  fadeInUp delay-1">
              <Link
                to="/places-app"
                className="unstyled-link animated  fadeInUp delay-1"
              >
                <BigItemComponent
                  img="places_app.png"
                  tags={["UI reaserch", "product design", "concept"]}
                  type="For fun"
                  title="Conceptual App"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default Landing;
