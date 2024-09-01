import React from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <div className="container-fluid py-1 px-5 border rounded shadow p-3 my-5 bg-body">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1 className=" text-uppercase mb-4">
              Welcome to the
              <span className="Mytext-primary"> Shree Ram Engineers </span>
            </h1>
            <h5 className="text-uppercase mb-3 text-body">
              At Shree Ramchandra Engineers, we specialize in delivering
              high-quality engineering solutions tailored to meet your needs.
              Located at 235/2, Chhota Bangadda, 14 Gopala Compound BajrangPura
              Industrial Area, Indore 452015, we are your trusted partner for
              cutting-edge industrial equipment.
            </h5>
            <h6>
              <p>Our Experties</p>
            </h6>
            <div className="row gx-5 py-2">
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Steel Cooling
                  Towers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Ball Mills &
                  Holding Tanks
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Chocolates
                  Holding Tanks
                </p>
              </div>
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Enrobing
                  Machines
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Industrial
                  Cooling Towers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>And more...
                </p>
              </div>
            </div>
            <h6>
              <p>Customer Satisfection</p>
            </h6>
            <p className="mb-4">
              At Shree Ramchandra Engineers, customer satisfaction is our top
              priority. We strive to build lasting relationships with our
              clients by providing exceptional products and personalized
              service. Your success is our success, and we go above and beyond
              to ensure that your needs are met with efficiency and
              professionalism.
            </p>
          </div>
          <div className="col-lg-5 pb-5 " style={{ minHeight: "400px" }}>
            <div className="position-relative  h-100 ">
              <img
                className="w-100 h-100 ms-4"
                id="myabout"
                src="assest/images/about1.jpg"
                style={{ objectFit: "cover" }}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
