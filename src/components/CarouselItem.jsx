import React from "react";
import "../styles/Carousel.css";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icon} alt={item.title} />
    </div>
  );
};
