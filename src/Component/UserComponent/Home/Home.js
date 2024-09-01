import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import Card from "../Card/Card";
import { hotProducts } from "../../../services/ApiServices";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getHotProducts = async () => {
    const response = await hotProducts();
    if (response.success) {
      setProducts(response.products);
    } else {
      toast.error("Please Reload the Page");
    }
  };

  console.log("hot products", products);
  useEffect(() => {
    getHotProducts();
  }, []);

  return (
    <>
      <div>
        <Carousel
          autoPlay
          interval={3000} // Change the interval to your preference (3000ms = 3 seconds)
          infiniteLoop
          showThumbs={false} // Optional: Hide thumbnails
          centerMode={true} // Center the slides
          centerSlidePercentage={100} // Make the slides take 100% of the container
        >
          <div>
            <img
              src="assest/images/caraouselImg/blog-1.jpg"
              className="carousel-img"
              alt="img"
            />
          </div>
          <div>
            <img
              src="assest/images/caraouselImg/blog-2.jpg"
              className="carousel-img"
              alt="img"
            />
          </div>
          <div>
            <img
              src="assest/images/caraouselImg/blog-3.jpg"
              className="carousel-img"
              alt="img"
            />
          </div>
        </Carousel>
      </div>
      <div className="container py-4">
        <center>
          <h1 className="hot-product-title">
            <span className="hot-product-underline">Our Hot Product</span>
          </h1>
        </center>
        <div className="row mt-4">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card
                image={`/uploads/${product.imgName}`}
                title={product.name}
                description={product.productDescription}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
