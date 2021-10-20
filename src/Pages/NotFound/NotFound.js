import React from "react";
import notfound from "../../Image/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img className="img-fluid mx-auto d-block" src={notfound} alt="" />
      <Link to="/home">
        <button type="button" className="btn btn-outline-primary mt-3 px-5">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
