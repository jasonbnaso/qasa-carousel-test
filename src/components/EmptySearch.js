import React from "react";

const EmptySearch = () => {
  const bgImage = {
    backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg?resize=640:*"})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return <div className="carousel-image" style={bgImage}></div>;
};

export default EmptySearch;
