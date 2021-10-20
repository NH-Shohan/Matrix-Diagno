import React from "react";
import Services from "./Services/Services";
import bannerOne from "../../Image/banner/1.png";
import bannerTwo from "../../Image/banner/2.png";
import bannerThree from "../../Image/banner/3.png";
import Departments from "./Departments/Departments";

const Home = (props) => {
  return (
    <div>
      <section className="mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div>
              <div className="carousel-item active">
                <img src={bannerOne} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerTwo} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bannerThree} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Services view={3}></Services>
      </section>
      <section className="mb-5 pb-5">
        <Departments></Departments>
      </section>
    </div>
  );
};

export default Home;
