import React from "react";

const CarouselImage = ({ images }) => {
  const bgImage = {
    backgroundImage: `url(${images})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return <div className="carousel-image" style={bgImage}></div>;
};
export default CarouselImage;