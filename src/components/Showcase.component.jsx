import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import About from "./About.component";

const ShowcaseElement = ({ title, img, font, colors, tools }) => {
  const [showModal, setshowModal] = useState(false);

  console.log(tools);
  return (
    <div className="card border-0">
      <About handleClose={setshowModal} show={showModal}></About>
      <div className="card-body">
        <div className="row align-items-center ">
          <div className="col-12 col-md-5">
            <div className="titleSection text-center">
              <p className="display-4 font-weight-bold d-md-none d-block mb-4">
                {title}{" "}
              </p>
            </div>{" "}
            <Fade bottom>
              {" "}
              <img
                className="img-fluid"
                src={require("../assets/images/portafolio-img/" + img)}
                alt=""
              />
            </Fade>
          </div>

          <div className="col">
            <div className="fontSection">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <Fade bottom>
                        {" "}
                        <p className="text-size-custom  sub-title m-0">Font</p>
                      </Fade>
                      <Fade bottom>
                        {" "}
                        <h2
                          className="font-weight-bold text-size-custom  title"
                          style={{ fontFamily: font }}
                        >
                          {font}
                        </h2>
                      </Fade>
                    </div>

                    <div className="col d-none d-md-block">
                      <Fade bottom>
                        <p
                          className="text-size-custom mt-4 sub-title"
                          style={{ fontFamily: font }}
                        >
                          ABCDEFGHIJKLMNOPQRSTWXYZ <br></br>{" "}
                          abcdefghijklmnopqrstwxyz
                          <br></br>1234567890
                        </p>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="colorsSection my-4">
              <Fade bottom>
                <p className="text-size-custom  sub-title">Colors</p>
              </Fade>

              <Fade bottom cascade>
                {" "}
                <div className="row " style={{ maxWidth: "300px" }}>
                  {colors
                    ? colors.map((c) => (
                        <div className="col" key={c}>
                          <div
                            style={{ backgroundColor: c }}
                            className="circle"
                          ></div>
                          <div className="pt-2 font-weight-bold text-center">
                            {c}
                          </div>
                        </div>
                      ))
                    : "No Colors"}
                </div>
              </Fade>
            </div>

            <div className="row">
              <div className="col">
                <div className="toolsSection mt-4">
                  <Fade bottom>
                    <p className="text-size-custom  sub-title">Tools</p>
                  </Fade>

                  <Fade bottom cascade>
                    <div className="d-flex ">
                      {tools
                        ? tools.map((t) => (
                            <div className="" key={t.toolName}>
                              <div className="pt-2 font-weight-bold mx-2">
                                <i className={`${t.icon} fa-2x text-muted`}></i>
                                <div className="pt-2 font-weight-light ">
                                  {t.toolName}
                                </div>
                              </div>
                            </div>
                          ))
                        : "No Colors"}
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col d-none d-md-block">
                <div className="titleSection text-left pr-3">
                  <Fade bottom>
                    {" "}
                    <p
                      className="h1 font-weight-bold cursor-clickable"
                      onClick={() => {
                        setshowModal(!showModal);
                      }}
                    >
                      {title}{" "}
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseElement;
