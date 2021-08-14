import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slidecs.css";
import arrow from "../Images/Arrow.svg";
import arrow2 from "../Images/anesthesia.svg";
import arrow3 from "../Images/cardiologist.svg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={arrow} onDragStart={handleDragStart} />,
  <img src={arrow2} onDragStart={handleDragStart} />,
  <img src={arrow3} onDragStart={handleDragStart} />,
  <img src={arrow} onDragStart={handleDragStart} />,
  <img src={arrow} onDragStart={handleDragStart} />,
  <img src={arrow} onDragStart={handleDragStart} />
];

const SimpleSlider = () => {
  return (
    <AliceCarousel

      mouseTracking
      items={items}
      responsive={{
        0: {
          items: 1,
        },
        1024: {
          items: 4,
        },
      }}
    />
  );
};
export default SimpleSlider;
