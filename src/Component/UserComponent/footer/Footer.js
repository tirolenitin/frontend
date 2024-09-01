

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer container-fluid text-white py-5 px-5"
      style={{
        background: "linear-gradient(135deg, #2C3E50, #4CA1AF)",
      }}
    >
      <div className="row">
        <div className="col-lg-4 mb-4">
          <h6 className="text-uppercase text-white">Quick Links</h6>
          <div className="d-flex flex-column">
            <Link className="text-white mb-3" to="/">
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Home
            </Link>
            <Link className="text-white mb-3" to="/about">
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              About Us
            </Link>
            <Link className="text-white mb-3" to="/product">
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Product
            </Link>
            <Link className="text-white mb-3" to="/contact">
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <h6 className="text-uppercase text-white">Address</h6>
          <p className="mt-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            235/2, Chhota Bangadda, 14 Gopala Compound BajrangPura Industrial
            Area, Indore 452015
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
            +91 79876 39874
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            shreeramchandraengineer@gmail.com
          </p>
        </div>

        <div className="col-lg-4 mb-4">
          <h6 className="text-uppercase text-white">Key Personnel</h6>
          <p>Mr. Satyajeet Bai</p>
          <p>Mobile: +91 79876 39874 </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square rounded-circle me-3 shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square rounded-circle me-3 shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square rounded-circle me-3 shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square rounded-circle shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Footer;

