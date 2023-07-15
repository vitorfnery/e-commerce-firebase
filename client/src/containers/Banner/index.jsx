import { useState } from "react";
import { SLIDER_IMAGES } from "~/constants";
import { v4 } from "uuid";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const data = SLIDER_IMAGES;
  const idGenerator = v4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[450px] md:h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((item) => (
            <img
              className="md:w-screen h-full object-cover"
              src={item}
              alt="IgmOne"
              key={idGenerator()}
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            className="
                      w-14 h-12 border border-gray-700 flex items-center justify-center 
                      hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300
                      "
            onClick={prevSlide}
          >
            <HiArrowLeft />
          </div>
          <div
            className="
                      w-14 h-12 border border-gray-700 flex items-center justify-center 
                      hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300
                      "
            onClick={nextSlide}
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
