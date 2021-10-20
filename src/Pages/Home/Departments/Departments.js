import React from "react";

import image1 from "../../../Image/department-icon/Cardiology.png";
import image2 from "../../../Image/department-icon/Dental.png";
import image3 from "../../../Image/department-icon/Diagnostics.png";
import image4 from "../../../Image/department-icon/For disabled.png";
import image5 from "../../../Image/department-icon/Laboratory.png";
import image6 from "../../../Image/department-icon/Ophthalmology.png";
import image7 from "../../../Image/department-icon/Pulmonary.png";
import image8 from "../../../Image/department-icon/Traumatology.png";

const Departments = () => {
  const departments = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className="mt-5 pt-5">
      <h1>Our Departments</h1>
      <div className="container mt-5">
        <div className="row g-2 row-cols-md-4 ">
          {departments.map((department) => (
            <div className=" col-6  rounded-3">
              <div className="m-1 bg-primary border border-4">
                <img
                  className="img-fluid p-5 rounded-3"
                  src={department}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
