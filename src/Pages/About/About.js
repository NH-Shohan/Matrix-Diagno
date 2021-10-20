import React from "react";

const About = () => {
  return (
    <div className="container text-wrap text-center mt-5 pt-5">
      <h3 className="text-primary">A Few Words</h3>
      <h1>About Our Clinic</h1>
      <hr className="w-25 m-auto p-1 bg-primary mb-5" />
      <p className="w-50 m-auto">
        Clinic, an organized medical service offering diagnostic, therapeutic,
        or preventive outpatient services. Often, the term covers an entire
        medical teaching centre, including the hospital and the outpatient
        facilities. The medical care offered by a clinic may or may not be
        connected with a hospital.
      </p>
      <br />
      <br />
      <p className="w-50 m-auto">
        Clinics typically provide non-emergency outpatient care that's routine
        or preventive. Although hospitals can also provide outpatient services,
        they focus more on providing inpatient care. You'll typically go to a
        hospital for specialist care, surgery, or for more serious,
        life-threatening conditions.
      </p>
    </div>
  );
};

export default About;
