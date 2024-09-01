// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Table, Button, Container, Row, Col, Accordion } from 'react-bootstrap';
// import { getProductById } from '../../../services/ApiServices';
// import { toast } from 'react-toastify';

// const ProductDetails = () => {
//     const { _id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const getProductDetailsById = async () => {
//             try {
//                 const response = await getProductById(_id);
//                 console.log(response, "product by id");
//                 if (response.success) {
//                     setProduct(response.product);
//                 } else {
//                     toast.warn("Something went wrong, please try again later");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch product details");
//             }
//         };

//         getProductDetailsById();
//     }, [_id]);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <Container className="d-flex flex-column align-items-center mt-4 mb-4">
//             <Row className="justify-content-center w-100">
//                 <Col md={8} lg={6}>
//                     <Card>
//                         <Card.Img variant="top" src={`/uploads/${product.imgName}`} alt={product.name} />
//                         <Card.Body>
//                             <Card.Title>{product.name}</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">Price: ${product.price}</Card.Subtitle>
//                             <Card.Text>
//                                 <strong>Condition:</strong> {product.condition}<br />
//                                 <strong>Grade:</strong> {product.grade}<br />
//                                 <strong>Size:</strong> {product.size}<br />
//                                 <strong>Usage:</strong> {product.usage}<br />
//                                 <strong>Delivery Time:</strong> {product.deliveryTime}<br />
//                                 <strong>Supply Ability:</strong> {product.supplyAbility}<br />
//                                 <strong>Main Domestic Market:</strong> {product.mainDomesticMarket}<br />
//                                 <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}<br />
//                                 <strong>Payment Terms:</strong> {product.paymentTerms}<br />
//                                 <strong>Product Description:</strong> {product.productDescription}
//                             </Card.Text>
//                             <Button variant="primary" className="me-2">Request to Call Back</Button>
//                             <Button variant="danger">Send Inquiry</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row className="justify-content-center w-100 mt-4">
//                 <Col md={8} lg={6}>
//                     <h2>Frequently Asked Questions</h2>
//                     <Accordion>
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header>What is the delivery time?</Accordion.Header>
//                             <Accordion.Body>
//                                 The delivery time for this product is {product.deliveryTime}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="1">
//                             <Accordion.Header>What is the minimum order quantity?</Accordion.Header>
//                             <Accordion.Body>
//                                 The minimum order quantity for this product is {product.minimumOrderQuantity}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="2">
//                             <Accordion.Header>What are the payment terms?</Accordion.Header>
//                             <Accordion.Body>
//                                 The payment terms for this product are {product.paymentTerms}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="3">
//                             <Accordion.Header>Is the product new or used?</Accordion.Header>
//                             <Accordion.Body>
//                                 This product is in {product.condition} condition.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         {/* Add more FAQs as needed */}
//                     </Accordion>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default ProductDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Button, Container, Row, Col, Accordion } from 'react-bootstrap';
// import { getProductById } from '../../../services/ApiServices';
// import { toast } from 'react-toastify';
// import './ProductDetails.css';

// const ProductDetails = () => {
//     const { _id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const getProductDetailsById = async () => {
//             try {
//                 const response = await getProductById(_id);
//                 if (response.success) {
//                     setProduct(response.product);
//                 } else {
//                     toast.warn("Something went wrong, please try again later");
//                 }
//             } catch (error) {
//                 toast.error("Failed to fetch product details");
//             }
//         };

//         getProductDetailsById();
//     }, [_id]);

//     if (!product) return <div className="loading">Loading...</div>;

//     return (
//         <Container className="product-details-container">
//             <Row className="justify-content-center">
//                 <Col md={8} lg={6}>
//                     <Card className="text-center">
//                         <Card.Img variant="top" src={`/uploads/${product.imgName}`} alt={product.name} className="product-image" />
//                         <Card.Body>
//                             <Card.Title className="product-title">{product.name}</Card.Title>
//                             <Card.Subtitle className="mb-3 text-muted">Price: ${product.price}</Card.Subtitle>
//                             <Card.Text className="product-details-text">
//                                 <strong>Condition:</strong> {product.condition}<br />
//                                 <strong>Grade:</strong> {product.grade}<br />
//                                 <strong>Size:</strong> {product.size}<br />
//                                 <strong>Usage:</strong> {product.usage}<br />
//                                 <strong>Delivery Time:</strong> {product.deliveryTime}<br />
//                                 <strong>Supply Ability:</strong> {product.supplyAbility}<br />
//                                 <strong>Main Domestic Market:</strong> {product.mainDomesticMarket}<br />
//                                 <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}<br />
//                                 <strong>Payment Terms:</strong> {product.paymentTerms}<br />
//                                 <strong>Product Description:</strong> {product.productDescription}
//                             </Card.Text>
//                             <div className="button-group">
//                                 <Button variant="primary" className="me-2">Request to Call Back</Button>
//                                 <Button variant="danger">Send Inquiry</Button>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row className="justify-content-center mt-5">
//                 <Col md={8} lg={6}>
//                     <h2 className="faq-title">Frequently Asked Questions</h2>
//                     <Accordion>
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header>What is the delivery time?</Accordion.Header>
//                             <Accordion.Body>
//                                 The delivery time for this product is {product.deliveryTime}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="1">
//                             <Accordion.Header>What is the minimum order quantity?</Accordion.Header>
//                             <Accordion.Body>
//                                 The minimum order quantity for this product is {product.minimumOrderQuantity}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="2">
//                             <Accordion.Header>What are the payment terms?</Accordion.Header>
//                             <Accordion.Body>
//                                 The payment terms for this product are {product.paymentTerms}.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="3">
//                             <Accordion.Header>Is the product new or used?</Accordion.Header>
//                             <Accordion.Body>
//                                 This product is in {product.condition} condition.
//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { getFandQ, getProductById } from "../../../services/ApiServices";
import { toast } from "react-toastify";
import "./ProductDetails.css";
import InquiryModal from "../model/InquiryModel";

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [productFandQ, setProductFandQ] = useState(null);

  const [showModal,setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const getProductDetailsById = async () => {
      try {
        const response = await getProductById(_id);
        if (response.success) {
          setProduct(response.product);
        } else {
          toast.warn("Something went wrong, please try again later");
        }
      } catch (error) {
        toast.error("Failed to fetch product details");
      }
    };

    const getProductFandQ = async () => {
      try {
        const response = await getFandQ(_id);
        // console.log(response.data.faqs,"product fand q");
        if (response.success) {
          setProductFandQ(response.data.faqs);
        } else {
          toast.warn("Something went wrong, please try again later");
        }
      } catch (error) {
        toast.error("Failed to fetch product details");
      }
    };

    getProductDetailsById();
    getProductFandQ();
  }, [_id]);

  console.log(productFandQ, "this is from state");

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <Container className="product-details-container">
      <Row className="justify-content-center">
        <Col md={8} lg={8}>
          <Card className="text-center">
            <Card.Img
              variant="top"
              src={`/uploads/${product.imgName}`}
              alt={product.name}
              className="product-image"
            />
            <Card.Body>
              <Card.Title className="product-title">{product.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Price: ${product.price}
              </Card.Subtitle>
              <Card.Text className="product-details-text">
                <table className="product-details-table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Condition:</strong>
                      </td>
                      <td>{product.condition}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Grade:</strong>
                      </td>
                      <td>{product.grade}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Size:</strong>
                      </td>
                      <td>{product.size}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Usage:</strong>
                      </td>
                      <td>{product.usage}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Delivery Time:</strong>
                      </td>
                      <td>{product.deliveryTime}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Supply Ability:</strong>
                      </td>
                      <td>{product.supplyAbility}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Main Domestic Market:</strong>
                      </td>
                      <td>{product.mainDomesticMarket}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Minimum Order Quantity:</strong>
                      </td>
                      <td>{product.minimumOrderQuantity}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Payment Terms:</strong>
                      </td>
                      <td>{product.paymentTerms}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Product Description:</strong>
                      </td>
                      <td>{product.productDescription}</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Text>
              <div className="button-group d-flex justify-content-between">
                <Button variant="primary" className=" w-75" onClick={handleShow}>
                  Request to Call Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <InquiryModal
       show={showModal}
       handleClose={handleClose}
       productName={product.name}
      />
      </Row>

      {productFandQ ? (
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={8}>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <Accordion>
              {productFandQ.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={faq._id}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      ) : (
        null
      )}

    </Container>
  );
};

export default ProductDetails;
