import React, { Fragment, useState } from "react";
import ShowcaseElement from "../../components/Showcase.component";
import About from "../../components/About.component";

const SowcasePage = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <Fragment>
      <About handleClose={setshowModal} show={showModal}></About>
      <div className="overflox-hidden">
        <div className=" p-4">
          <p className="font-weight-bold m-0 h6 animated text-center  faster">
            LUIS C.
            <br />
            PARRA
          </p>
        </div>
        <div className="container-fluid">
          <ShowcaseElement
            img="places-app.png"
            font="Montserrat"
            title="Places App"
            tools={[
              { toolName: "Figma", icon: "fab fa-figma" },
              { toolName: "Photoshop", icon: "fab fa-adobe" },
            ]}
            colors={["#79B0BC", "#B7B0B6", "#89653F"]}
          ></ShowcaseElement>
          <div className="blank"></div>
          <ShowcaseElement
            img="big-sur-spotify.png"
            font="Montserrat"
            title="Spotify Big Sur redisign"
            tools={[{ toolName: "Figma", icon: "fab fa-figma" }]}
            colors={["#1DB954", "#333840", "#605448"]}
          ></ShowcaseElement>
          <div className="blank"></div>
          <ShowcaseElement
            img="tv-concept.png"
            font="SF Pro Text"
            title="Smart TV UI Concept"
            tools={[{ toolName: "Figma", icon: "fab fa-figma" }]}
            colors={["#B20710", "#262422", "#556464"]}
          ></ShowcaseElement>
        </div>
      </div>
    </Fragment>
  );
};

export default SowcasePage;
