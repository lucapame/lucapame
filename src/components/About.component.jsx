import React from "react";

const About = ({ show, handleClose }) => {
  return (
    <div className={show ? "modal-main blur" : "invisible"}>
      <i
        className="fa fa-times float-end text-light p-4 cursor-clickable "
        aria-hidden="true"
        onClick={() => handleClose(!show)}
      ></i>

      <div className="overflow-auto w-50">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../assets/images/mimoji_1.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/images/mimoji_1.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/images/mimoji_1.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
