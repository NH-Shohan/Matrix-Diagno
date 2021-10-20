import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceInfo = () => {
  const { serviceID } = useParams();
  return (
    <div className="mt-5 pt-5">
      <h2> This is our {serviceID} service</h2>
      <Link to="/services">
        <button className="btn btn-primary mt-4">Go Back</button>
      </Link>
    </div>
  );
};

export default ServiceInfo;
