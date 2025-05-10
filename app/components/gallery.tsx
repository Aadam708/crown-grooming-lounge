"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

// Dynamically import motion.div from framer-motion with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const images = [
    { id: 1, title: "Skin Fade", image: "/images/img1.jpg" },
    { id: 2, title: "Crew Cut", image: "/images/img2.jpg" },
    { id: 3, title: "Pompadour", image: "/images/img3.jpg" },
    { id: 4, title: "Buzz Cut", image: "/images/img4.jpg" },
    { id: 5, title: "Undercut", image: "/images/img5.jpg" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setZoomPosition({ x, y });
  };

  return (
    <section id="gallery" className="py-16 px-8 bg-black">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative border-4 border-red-600 p-4 rounded-lg"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">Gallery</h2>

        <div className="grid grid-cols-3 gap-6 justify-center">
          {/* Top Row - 3 Images */}
          {images.slice(0, 3).map((image) => (
            <MotionDiv
              key={image.id}
              className="relative w-full h-full overflow-hidden rounded-lg"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: image.id * 0.2 }}
              onClick={() => handleImageClick(image.image)}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </MotionDiv>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 justify-center mt-6">
          {/* Bottom Row - 2 Images */}
          {images.slice(3, 5).map((image) => (
            <MotionDiv
              key={image.id}
              className="relative w-full h-full overflow-hidden rounded-lg"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: image.id * 0.2 }}
              onClick={() => handleImageClick(image.image)}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="relative cursor-zoom-in"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className={`object-contain transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              style={{
                transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`
              }}
              onClick={toggleZoom}
            />
            {!isZoomed && (
              <FaTimes className="absolute top-2 left-[650px] text-white text-4xl hover:cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={closeModal}></FaTimes>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
