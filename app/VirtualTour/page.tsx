"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation"; // Import router for navigation
import Link from "next/link";

const VirtualTour = () => {
  const images = ["/images/crown_hall.jpg", "/images/crown_hall2.jpeg"];
  const router = useRouter(); // Initialize router

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track if mouse is over the arrows
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Always keep autoplay enabled
    autoplaySpeed: 2000,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentImage(images[newIndex]);
      setCurrentIndex(newIndex);
    },
    arrows: false,  // Disable default arrows to use custom ones
  };

  // Ensure the slider initializes correctly when the component is mounted
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();  // Explicitly play the slider
    }
  }, []); // Empty dependency array ensures this runs only once

  // Control autoplay based on mouse hover
  useEffect(() => {
    if (sliderRef.current) {
      if (isHovered) {
        sliderRef.current.slickPause();  // Pause autoplay when hovering over arrows
      } else {
        sliderRef.current.slickPlay();  // Resume autoplay when mouse leaves
      }
    }
  }, [isHovered]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative transition-all duration-700 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      {/* Return Home Button */}
      <div className="absolute top-5 left-5 z-20">
        <button
          onClick={() => router.push("/")} // Navigate to home
          className="px-4 py-4 font-bold text-red-500  md:text-base rounded-lg border border-transparent transition-all duration-300 hover:border-white"
        >
          Return Home
        </button>
      </div>

      {/* Dark Overlay for better visibility */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Slider */}
      <Slider {...settings} ref={sliderRef} className="absolute w-full h-full z-10">
        {images.map((_src, index) => (
          <div key={index} className="w-full h-screen"></div> // Empty div to trigger bg change
        ))}
      </Slider>

      {/* Custom Arrows */}
      <PrevArrow
        onClick={() => sliderRef.current?.slickPrev()}
        onMouseEnter={() => setIsHovered(true)} // Pause autoplay when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Resume autoplay when mouse leaves
      />
      <NextArrow
        onClick={() => sliderRef.current?.slickNext()}
        onMouseEnter={() => setIsHovered(true)} // Pause autoplay when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Resume autoplay when mouse leaves
      />

      {/* Custom Dots (Built Outside the Slider) */}
      <div className="absolute bottom-5 w-full flex justify-center z-10">
        <div className="flex space-x-2 bg-black/30 p-2 rounded-lg">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-white opacity-100" : "bg-gray-400 opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const PrevArrow = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <button
      className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
      onClick={onClick} // Attach onClick handler
      onMouseEnter={onMouseEnter} // Pause autoplay on hover
      onMouseLeave={onMouseLeave} // Resume autoplay on mouse leave
    >
      ❮
    </button>
  );
};

const NextArrow = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <button
      className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
      onClick={onClick} // Attach onClick handler
      onMouseEnter={onMouseEnter} // Pause autoplay on hover
      onMouseLeave={onMouseLeave} // Resume autoplay on mouse leave
    >
      ❯
    </button>
  );
};

export default VirtualTour;
