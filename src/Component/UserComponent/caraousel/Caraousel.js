import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

const Carousel = ({ apiEndpoint }) => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setCarouselImages(response.data.images); // Assuming the API returns an array of image URLs in the `images` field
      } catch (error) {
        console.error('Error fetching carousel images:', error);
      }
    };

    fetchCarouselImages();
  }, [apiEndpoint]);

  return (
    <Carousel
      autoPlay
      interval={3000} // Change the interval to your preference (3000ms = 3 seconds)
      infiniteLoop
      showThumbs={false} // Optional: Hide thumbnails
      centerMode={true} // Center the slides
      centerSlidePercentage={100} // Make the slides take 100% of the container
    >
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img src={image} className='carousel-img' alt={`carousel-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Caraousel;
