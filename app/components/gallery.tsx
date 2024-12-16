'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

const Gallery = () => {
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

  return (
    <section id="gallery" className="py-16 px-8 bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative border-4 border-red-600 p-4 rounded-lg"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">Gallery</h2>

        <div className="grid grid-cols-3 gap-6 justify-center">
          {/* Top Row - 3 Images */}
          {images.slice(0, 3).map((image) => (
            <motion.div
              key={image.id}
              className="relative w-full h-full overflow-hidden rounded-lg"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: image.id * 0.2 }}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 justify-center mt-6">
          {/* Bottom Row - 2 Images */}
          {images.slice(3, 5).map((image) => (
            <motion.div
              key={image.id}
              className="relative w-full h-full overflow-hidden rounded-lg"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: image.id * 0.2 }}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
