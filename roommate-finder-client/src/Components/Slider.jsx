import React from "react";
import { Fade } from "react-awesome-reveal";

// Slide data (at least 3 required)
const slideData = [
  { id: 1, image: "https://i.ibb.co/pBj71cLk/4.png" },
  { id: 2, image: "https://i.ibb.co/tj1Wk7n/3.png" },
  { id: 3, image: "https://i.ibb.co/wZRchQKL/2.png" },
  { id: 4, image: "https://i.ibb.co/JjhffvV6/1.png" },
];

const Slider = () => {
  return (
    <div className="my-10 max-h-[70vh] overflow-hidden rounded-xl">
      <Fade direction="up" triggerOnce>
        <div className="carousel w-full h-[60vh] relative">
          {slideData.map((slide, index) => {
            const prevSlide = index === 0 ? slideData.length : index;
            const nextSlide = index === slideData.length - 1 ? 1 : index + 2;

            return (
              <div
                key={slide.id}
                id={`slide${slide.id}`}
                className="carousel-item relative w-full h-full"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-10">
                  <a href={`#slide${prevSlide}`} className="btn btn-circle bg-opacity-70">
                    ❮
                  </a>
                  <a href={`#slide${nextSlide}`} className="btn btn-circle bg-opacity-70">
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Slider;
