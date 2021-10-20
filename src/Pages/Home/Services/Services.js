import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = (props) => {
  const [services, setServices] = useState([]);
  const { view } = props;

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        if (view === 3) {
          setServices(data.slice(0, 4));
        } else {
          setServices(data);
        }
      });
  }, [services, view]);

  return (
    <div className="mt-5 pt-5 mb-5">
      <h1>Our Services</h1>
      <div className="container service-container mt-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
