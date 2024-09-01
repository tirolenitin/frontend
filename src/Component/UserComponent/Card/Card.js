import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import "./Card.css";
import { useSearchParams } from 'react-router-dom';
import InquiryModal from '../model/InquiryModel';

const Card = ({ image, title, description, price }) => {

  const [showModal,setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='card product-card'>
      <img src={image} alt={title} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <p className='card-price'>${price}</p>
        <button className='btn btn-primary btn-show-more' onClick={handleShow}>Get More Details</button>
      </div>

      <InquiryModal
        show={showModal}
        handleClose={handleClose}
        productName={title}
      />
    </div>
  );
}


export default Card;

