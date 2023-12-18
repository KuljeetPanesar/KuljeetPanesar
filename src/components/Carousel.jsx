import React, { useState, useRef } from "react";
import { CarouselItem } from "./CarouselItem";
import "../styles/Carousel.css";

export const Carousel = ({ items, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      // Swipe right, move to the previous slide
      updateIndex(activeIndex - 1);
    } else if (deltaX < -50) {
      // Swipe left, move to the next slide
      updateIndex(activeIndex + 1);
    }

    touchStartX.current = null;
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => (
          <CarouselItem key={item.id} item={item} width={width} />
        ))}
      </div>

      <div className="carousel-buttons">
        {/* Previous button */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>

        {/* Indicators */}
        <div className="indicators">
          {items.map((item, index) => (
            <button
              key={index}
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span
                className={`material-symbols-outlined ${
                  index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }`}
              >
                radio_button_checked
              </span>
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
