import React, { useState } from "react";
import { Fragment } from "react";

const ImageViwer = ({ path, imgs }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <i
          onClick={() => {
            if (imgs.length - 1 > selectedImg) setSelectedImg(selectedImg - 1);
            else setSelectedImg(0);
          }}
          className={` ${
            selectedImg === 0 ? "fadeOutUp hidden" : "faster"
          } fas fa-chevron-circle-left fa-2x mx-2  selectable-item animated fadeInUp`}
        ></i>
        <div className="">
          <img
            src={`/images/${path}/${imgs[selectedImg]}`}
            className="img-fluid animated  fadeInUp   "
            alt={`${imgs[selectedImg]}`}
          />
        </div>
        <i
          className="fas fa-chevron-circle-right fa-2x mx-2  selectable-item animated fadeInUp delay-1"
          onClick={() => {
            if (imgs.length - 1 > selectedImg) setSelectedImg(selectedImg + 1);
            else setSelectedImg(0);
          }}
        ></i>
      </div>

      {/* <div className="">
        <div className="d-flex justify-content-center">
          <div className="">
            <img
              src={`/images/${path}/${selectedImg}`}
              className="img-fluid animated  fadeInUp  "
              alt="..."
            />
          </div>
        </div>
        <div className="  sclorll-img-box mt-4">
          {imgs.map((item, index) => (
            <img
              onClick={() => setSelectedImg(item)}
              key={item}
              src={`/images/${path}/${item}`}
              className="img-fluid thumnail m-2 d-inline-block animated  fadeInUp  "
              alt="..."
            />
          ))}
        </div>
      </div> */}
    </Fragment>
  );
};

export default ImageViwer;
