// import React, { useEffect, useState } from 'react';
// import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import { motion } from 'framer-motion'; // For animations
// import axios from 'axios';
// import './Product.css'; // Import custom CSS for additional styling

// const Product = () => {
//     const [products, setProducts] = useState([
//         // Initial static data
//         {
//             "id": 1,
//             "title": "Mini Enrobing Machine",
//             "price": "1800000 INR/Unit",
//             "imageUrl": "/assest/images/caraouselImg/blog-1.jpg",
//             "generalUse": "Industrial",
//             "material": "Stainless Steel",
//             "computerized": false,
//             "automatic": true,
//             "controlSystem": "Manual",
//             "coolingSystem": "Air Cooling",
//             "feature": "High Performance"
//         },
//         {
//             "id": 2,
//             "title": "Automatic Packing Machine",
//             "price": "1500000 INR/Unit",
//             "imageUrl": "/assest/images/caraouselImg/blog-3.jpg",
//             "generalUse": "Industrial",
//             "material": "Aluminum",
//             "computerized": true,
//             "automatic": true,
//             "controlSystem": "Digital",
//             "coolingSystem": "Water Cooling",
//             "feature": "High Efficiency"
//         }
//     ]);

//     // useEffect(() => {
//     //     // Replace with your API endpoint
//     //     axios.get('https://api.example.com/products')
//     //         .then(response => setProducts(response.data))
//     //         .catch(error => console.error('Error fetching data:', error));
//     // }, []);

//     return (
//         <Container className='my-4'>
//             <Row className="gy-4">
//                 {products.map((product, index) => (
//                     <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.2 }} // Enhanced staggered animation
//                             className="product-card"
//                         >
//                             <Card className="h-100 shadow-lg border-0 rounded">
//                                 <Card.Img
//                                     variant="top"
//                                     src={product.imageUrl}
//                                     alt={product.title}
//                                     className="card-img"
//                                 />
//                                 <Card.Body>
//                                     <Card.Title className="card-title">{product.title}</Card.Title>
//                                     <Card.Text className="card-price">{product.price}</Card.Text>
//                                     <Card.Text><strong>Material:</strong> {product.material}</Card.Text>
//                                     <Card.Text><strong>Feature:</strong> {product.feature}</Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer className="text-center">
//                                     <Button variant="primary" className="me-2">Get a Quote</Button>
//                                     <Button variant="danger">Inquiry</Button>
//                                 </Card.Footer>
//                             </Card>
//                         </motion.div>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Product;

import React, {  useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion'; // For animations
import './Product.css'; // Import custom CSS for additional styling
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../services/ApiServices';

const Product = () => {
    const [products, setProducts] = useState([
        // Initial static data
        {
            "id": 1,
            "title": "Mini Enrobing Machine",
            "price": "1800000 INR/Unit",
            "imageUrl": "/assest/images/caraouselImg/blog-1.jpg",
            "generalUse": "Industrial",
            "material": "Stainless Steel",
            "computerized": false,
            "automatic": true,
            "controlSystem": "Manual",
            "coolingSystem": "Air Cooling",
            "feature": "High Performance"
        },
        {
            "id": 2,
            "title": "Automatic Packing Machine",
            "price": "1500000 INR/Unit",
            "imageUrl": "/assest/images/caraouselImg/blog-3.jpg",
            "generalUse": "Industrial",
            "material": "Aluminum",
            "computerized": true,
            "automatic": true,
            "controlSystem": "Digital",
            "coolingSystem": "Water Cooling",
            "feature": "High Efficiency"
        }
    ]);

    useEffect(() => {
      const getproduct = async ()=>{
        const response = await fetchProducts();
        if(response.success){
            setProducts(response.products);
        }
        else{

        }
        console.log(response,"responsefrompage");
      }

      getproduct();
    }, []);

    console.log(products,"products");

    return (
        <Container className='my-4 '>
            <Row className="gy-4 m-4">
                {products.map((product, index) => (
                    <Col key={product.id} xs={12} sm={6} md={6} lg={6} >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }} // Enhanced staggered animation
                            className="product-card"
                        >
                            <Card className="h-100 border-0 rounded d-flex flex-row p-3">
                                <div className="card-img-container my-5">
                                    <Card.Img
                                        variant="top"
                                        src={`/uploads/${product.imgName}`}
                                        alt={product.title}
                                        className="card-img-left"
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <Card.Title className="card-title">{product.name}</Card.Title>
                                        <Card.Text className="card-price">{product.price}</Card.Text>
                                    </div>
                                    <ListGroup variant="flush" className="mt-3">
                                        <ListGroup.Item><strong>Size:</strong> {product.size}</ListGroup.Item>
                                        <ListGroup.Item><strong>Usage:</strong> {product.usage}</ListGroup.Item>
                                        <ListGroup.Item><strong>Computerized:</strong> {product.computerized ? 'Yes' : 'No'}</ListGroup.Item>
                                        <ListGroup.Item><strong>Automatic:</strong> {product.automatic ? 'Yes' : 'No'}</ListGroup.Item>
                                        <ListGroup.Item><strong>Control System:</strong> {product.controlSystem}</ListGroup.Item>
                                        <ListGroup.Item><strong>Cooling System:</strong> {product.coolingSystem}</ListGroup.Item>
                                        <ListGroup.Item><strong>Payment Terms:</strong> {product.paymentTerms}days</ListGroup.Item>
                                    </ListGroup>
                                     <Card.Footer className="text-center mt-auto">
                                        <Link to={`/productDetails/${product._id}`} >
                                        <Button variant="primary" className="me-2 mt-2">More Detils</Button>
                                        </Link>
                                    </Card.Footer> 
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Product;



// import React, { useEffect, useState } from 'react';
// import { Card, Button, Row, Col, Container, ListGroup } from 'react-bootstrap';
// import { motion } from 'framer-motion'; // For animations
// import axios from 'axios';
// import './Product.css'; // Import custom CSS for additional styling

// const Product = () => {
//     const [products, setProducts] = useState([
//         // Initial static data
//         {
//             "id": 1,
//             "title": "Mini Enrobing Machine",
//             "price": "1800000 INR/Unit",
//             "imageUrl": "/assest/images/caraouselImg/blog-1.jpg",
//             "generalUse": "Industrial",
//             "material": "Stainless Steel",
//             "computerized": false,
//             "automatic": true,
//             "controlSystem": "Manual",
//             "coolingSystem": "Air Cooling",
//             "feature": "High Performance"
//         },
//         {
//             "id": 2,
//             "title": "Automatic Packing Machine",
//             "price": "1500000 INR/Unit",
//             "imageUrl": "/assest/images/caraouselImg/blog-3.jpg",
//             "generalUse": "Industrial",
//             "material": "Aluminum",
//             "computerized": true,
//             "automatic": true,
//             "controlSystem": "Digital",
//             "coolingSystem": "Water Cooling",
//             "feature": "High Efficiency"
//         }
//     ]);

//     // useEffect(() => {
//     //     // Replace with your API endpoint
//     //     axios.get('https://api.example.com/products')
//     //         .then(response => setProducts(response.data))
//     //         .catch(error => console.error('Error fetching data:', error));
//     // }, []);

//     return (
//         <Container className='my-4'>
//             <Row className="gy-4">
//                 {products.map((product, index) => (
//                     <Col key={product.id} xs={12} sm={6} md={6} lg={6}>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.2 }} // Enhanced staggered animation
//                             className="product-card"
//                         >
//                             <Card className="h-100 border-0 rounded d-flex flex-row">
//                                 <Card.Img
//                                     variant="top"
//                                     src={product.imageUrl}
//                                     alt={product.title}
//                                     className="card-img-left"
//                                 />
//                                 <Card.Body className="d-flex flex-column justify-content-between">
//                                     <div>
//                                         <Card.Title className="card-title">{product.title}</Card.Title>
//                                         <Card.Text className="card-price">{product.price}</Card.Text>
//                                     </div>
//                                     <ListGroup variant="flush" className="mt-3">
//                                         <ListGroup.Item><strong>General Use:</strong> {product.generalUse}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Material:</strong> {product.material}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Computerized:</strong> {product.computerized ? 'Yes' : 'No'}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Automatic:</strong> {product.automatic ? 'Yes' : 'No'}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Control System:</strong> {product.controlSystem}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Cooling System:</strong> {product.coolingSystem}</ListGroup.Item>
//                                         <ListGroup.Item><strong>Feature:</strong> {product.feature}</ListGroup.Item>
//                                     </ListGroup>
//                                     <Card.Footer className="text-center mt-auto">
//                                         <Button variant="primary" className="me-2">Get a Quote</Button>
//                                         <Button variant="danger">Inquiry</Button>
//                                     </Card.Footer>
//                                 </Card.Body>
//                             </Card>
//                         </motion.div>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Product;
