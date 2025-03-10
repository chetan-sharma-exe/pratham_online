import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageScroller = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Set up auto scroll with a 2-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl sm:max-w-6xl mx-auto mt-20">
      {/* Main image container */}
      <div className="relative overflow-hidden h-40 sm:h-80 bg-gray-100 ">
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-fill flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
