import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, image, details } = service;
  return (
    <div class="card border-info ">
      <div className="card-body">
        <img src={image} class="card-img-top img-fluid" alt="..." />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
      </div>
      <div class="card-footer">
        <Link to={`/serviceInfo/${id}`} className="btn btn-primary">
          See Info
        </Link>
      </div>
    </div>
  );
};

export default Service;
