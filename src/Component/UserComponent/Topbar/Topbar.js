import React from 'react';
import "./Topbar.css";


const Topbar = () => {
  return (
    <div className='container-fluid px-5 d-none d-lg-block' style={{backgroundColor:"#FAF4F4"}}>
        <div className='row gx-5 topRow '>
            <div className='col-lg-4 text-center py-3'> 
            <div className="d-inline-flex align-items-center">
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Our Office</h6>
                        <span>235/2, Chhota Bangadda, 14 Gopala Compound BajrangPura Industrial Area, Indore 452015</span>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 text-center border-start border-end py-3' >
            <div className="d-inline-flex align-items-center">
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Email Us</h6>
                        <span>shreeramchandraengineer@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 text-center py-3'>
            <div className="d-inline-flex align-items-center">
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Call Us</h6>
                        <span>+91 79876 39874</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
