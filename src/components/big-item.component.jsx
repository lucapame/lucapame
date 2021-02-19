import React from "react";
import { Fragment } from "react";

const BigItemComponent = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="text-center">
        <img
          src={`/images/portafolio-img/${props.img}`}
          className="img-fluid item-img "
          alt="..."
        />
        <div className="text-center mt-4">
          <h5 className="fw-bold">{props.title}</h5>
          <div className=" text-center">
            {props.tags.map((item, index) => (
              <p
                key={index}
                className="fw-light d-inline-block text-muted text-capitalize m-0 mx-1"
              >
                {item},
              </p>
            ))}
          </div>

          <p className="fw-bold mt-2 text-capitalize  badge bg-primary">
            {props.type}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default BigItemComponent;
