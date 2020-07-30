import React from "react";

const ImageCard = ({ image }) => {
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return <div className="carousel-image" style={bgImage}></div>;
};

export default ImageCard;