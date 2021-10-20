import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 py-5 d-flex justify-content-center bg-light w-md-50 ">
      <form className=" w-75">
        <h1 className="text-primary mb-4">Contact Us</h1>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <br />
          <div className="col-md-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="your email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <br />
          <div className="col-md-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="your password"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div className="col-md-12">
            <textarea
              class="form-control "
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="your message..."
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
