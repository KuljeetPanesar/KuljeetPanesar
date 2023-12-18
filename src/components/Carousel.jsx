import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { useSwipeable } from "react-swipeable";
import "../styles/Carousel.css";

export const Carousel = ({ items, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleSwipe = (direction) => {
    if (direction === "left") {
      updateIndex(activeIndex + 1);
    } else if (direction === "right") {
      updateIndex(activeIndex - 1);
    }
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
    <div className="carousel" {...handlers}>
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
