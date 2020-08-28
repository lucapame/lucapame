import React, { useState } from "react";
import "./style.scss";
import { withRouter, useHistory } from "react-router-dom";
import About from "../../components/About.component";

const Landing = () => {
  const [animation1, setanimation1] = useState("fadeInUp");

  const [animation2, setanimation2] = useState("fadeInUp");

  const [animation3, setanimation3] = useState("fadeInUp");

  const [showModal, setshowModal] = useState(false);

  const history = useHistory();

  return (
    <div className="bg p-4">
      <About handleClose={setshowModal} show={showModal}></About>

      <nav class="navbar navbar-light">
        <div className=" ">
          <p className="text-white font-weight-bold m-0  animated fadeInUp  faster">
            LUIS C.
            <br />
            PARRA
          </p>
        </div>

        <div className=" ">
          <p className="text-white font-weight-light m-0  animated fadeInUp  faster">
            Write
          </p>
        </div>
      </nav>
      <div className="h-75 container-fluid">
        <div className="d-flex flex-md-row flex-column align-items-center h-100  justify-content-around">
          <h1
            className={`font-weight-bold btn-link  animated faster ${animation1}`}
            onClick={() => {
              setanimation1("fadeOutUp");
              setTimeout(() => history.push("/showcase"), 300);
            }}
          >
            About
          </h1>
          <h1
            className={`font-weight-bold btn-link  animated  ${animation2}`}
            onClick={() => {
              setanimation2("fadeOutUp");
              setTimeout(() => history.push("/showcase"), 300);
            }}
          >
            Portfolio
          </h1>
          <h1
            className={`font-weight-bold btn-link  animated  ${animation3}`}
            onClick={() => {
              setanimation3("fadeOutUp");
              setTimeout(() => history.push("/showcase"), 300);
            }}
          >
            Experiments
          </h1>
        </div>
        <footer>
          <div className="d-flex  flex-column align-items-left justify-content-around w-25">
            <p className="my-3 btn-link-sm text-white">
              <i className="fab fa-instagram "></i>
              <small className="btn-link-sm text"> Instagram</small>
            </p>
            <p className="my-3 btn-link-sm text-white">
              <i className="fab fa-linkedin "></i>
              <small className="btn-link-sm text"> LinkedIn</small>
            </p>
            <p className="my-3 btn-link-sm text-white">
              <i className="fas fa-envelope "></i>
              <small className="btn-link-sm text"> Contact</small>
            </p>
          </div>
        </footer>
      </div>

      {/* <div className={`footer pb-4 animated  ${animation}`}>
        <p
          onClick={() => {
            setanimation("fadeOutUp");
            setTimeout(() => history.push("/showcase"), 500);
          }}
          className="text-white font-weight-bold m-0 h6 text-center cursor-clickable"
        >
          See Work
        </p>
      </div> */}
    </div>
  );
};

export default Landing;
