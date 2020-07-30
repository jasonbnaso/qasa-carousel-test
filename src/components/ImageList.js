import React, { useState } from "react";
import ImageCard from "./ImageCard";
import Control from "./Control";

const ImageList = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  if (images === []) {
  }
  const prevImg = () => {
    const lastIndex = images.length - 1;
    const resetIndex = imgIndex === 0;
    const index = resetIndex ? lastIndex : imgIndex - 1;
    setImgIndex(index);
  };

  const nextImg = () => {
    const lastIndex = images.length - 1;
    const resetIndex = imgIndex === lastIndex;
    const index = resetIndex ? 0 : imgIndex + 1;
    setImgIndex(index);
  };
  const bgImages = images.map((image) => {
    return <ImageCard key={image.id} image={image.urls.regular} />;
  });
  return (
    <div>
      <Control controlDirection="left" onChange={prevImg} pointer="&#9669;" />
      <div className="image-list">{bgImages[imgIndex]}</div>
      <Control controlDirection="right" onChange={nextImg} pointer="&#9659;" />
    </div>
  );
};

export default ImageList;
