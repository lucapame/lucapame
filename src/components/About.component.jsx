import React from "react";

const About = ({ show, handleClose }) => {
  return (
    <div className={show ? "modal-main blur" : "invisible"}>
      <i
        className="fa fa-times float-right text-white p-4 cursor-clickable "
        aria-hidden="true"
        onClick={() => handleClose(!show)}
      ></i>
    </div>
  );
};

export default About;
