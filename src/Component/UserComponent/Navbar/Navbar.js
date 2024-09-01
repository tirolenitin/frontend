// import React from 'react';
import './Navbar.css';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   return (
//     <div
//       className="container-fluid sticky-top navbar-dark w-100 py-3 px-5"
//       style={{
//         background: "linear-gradient(135deg, #2C3E50, #4CA1AF)", // Matching the footer's gradient
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <div className="container-fluid d-flex justify-content-between align-items-center">
//           <Link className="navbar-brand d-flex align-items-center text-white" to="/">
//             <img className="self-img ms-3 rounded-circle" src="assest/images/logo.jpg" alt="Img" style={{ width: '50px', height: '50px' }} />
//             <div className="ms-3">
//               <h4 className="m-0 text-uppercase d-none d-lg-block d-md-block">
//                 Shree RamChandra Engineers
//               </h4>
//               <h4 className="m-0 text-uppercase d-block d-lg-none d-md-none">
//                 S.R. Engineers
//               </h4>
//             </div>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//             aria-controls="navbarCollapse"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-0">
//               <Link className="nav-item nav-link text-white px-3" to="/" style={{ transition: "color 0.3s" }}>
//                 Home
//               </Link>
//               <Link className="nav-item nav-link text-white px-3" to="/about" style={{ transition: "color 0.3s" }}>
//                 About
//               </Link>
//               <Link className="nav-item nav-link text-white px-3" to="#" style={{ transition: "color 0.3s" }}>
//                 Product
//               </Link>
//               <Link className="nav-item nav-link text-white px-3" to="/our-work" style={{ transition: "color 0.3s" }}>
//                 Our Work
//               </Link>
//               <Link className="nav-item nav-link text-white px-3" to="/contact" style={{ transition: "color 0.3s" }}>
//                 Contact
//               </Link>
//               <Link
//                 className="btn btn-outline-light d-flex align-items-center px-3"
//                 to="/login"
//                 style={{
//                   borderRadius: "20px",
//                   transition: "background-color 0.3s, border-color 0.3s",
//                 }}
//               >
//                 Login <FontAwesomeIcon icon={faUser} className="ms-2" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import an icon for the login button if needed

const Navbar = () => {
  return (
    <div
      className="container-fluid sticky-top navbar-dark w-100 py-3 px-5"
      style={{
        background: "linear-gradient(135deg, #2C3E50, #4CA1AF)",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-flex align-items-center text-white" to="/">
            <img className="self-img me-2" src="assest/images/logo.jpg" alt="Img" />
            <h4 className="text-uppercase m-0 d-none d-md-block">Shree RamChandra Engineers</h4>
            <h4 className="text-uppercase m-0 d-block d-md-none">S.R. Engineers</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link className="nav-item nav-link text-white px-3" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link text-white px-3" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link text-white px-3" to="/product">
                Product
              </Link>
              {/* <Link className="nav-item nav-link text-white px-3" to="/our-work">
                Our Work
              </Link> */}
              <Link className="nav-item nav-link text-white px-3" to="/contact">
                Contact
              </Link>
              {/* <Link
                className="btn btn-outline-light d-flex align-items-center px-3"
                to="/login"
              >
                Login <FontAwesomeIcon icon={faUser} className="ms-2" />
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

