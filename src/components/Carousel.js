import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import EmptySearch from "./EmptySearch";
const Carousel = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (userInput) => {
    try {
      const response = await unsplash.get("search/photos", {
        params: { query: userInput },
      });
      setImages(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="carousel">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {images.length === 0 ? <EmptySearch /> : <ImageList images={images} />}
    </div>
  );
};

export default Carousel;
