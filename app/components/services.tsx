import React from "react";
import dynamic from "next/dynamic";

// Dynamically import motion.div from framer-motion with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

type ServiceDetails = {
  price: number;
  details?: string;
};

type ServiceMap = Record<string, number | ServiceDetails>;

const Services = () => {
  const cuts: ServiceMap = {
    "Dry Cut": 17,
    "Crop Cut": 15,
    "Drop Fade": 16,
    "Haircut & Wash": 20,
    "Scissor Cut": 18,
    "Skin Fade": 21,
    "Skin Fade with Razor": 23,
    "Kids": 15,
    "Weekends": {
      price: 17,
      details: "Excluding Skin Fade and Scissor Trim",
    },
    "O.A.Ps": {
      price: 15,
      details: "Excluding Skin Fade and Scissor Trim",
    },
  };

  const shave: ServiceMap = {
    "Wet Shave": 15,
    "Style Wet Shave": 16,
    "Head Shave": 15,
    "Clipper Beard Trim": {
      price: 12,
      details: "Includes a hot towel",
    },
  };

  const extras: ServiceMap = {
    "Face Mask": 13,
    "Shape Up": 8,
    "Head Wash & Hot Towel": 7,
    "Threading & Waxing": 5,
  };

  const specials: Record<string, ServiceDetails> = {
    "Crown Deluxe": {
      price: 46,
      details: "Skin fade, style beard, steam, facemask, wax, wash & hot towel",
    },
    "Crown Special": {
      price: 39,
      details: "Haircut, steam, shave, facemask, wash & hot towel",
    },
    "Shave Special": {
      price: 26,
      details: "Shave, steam, facemask, wash & hot towel",
    },
    "Haircut Special": {
      price: 21,
      details: "Haircut, wash & hot towel",
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const renderService = (serviceName: string, serviceDetails: number | ServiceDetails) => {
    const isDetailed = typeof serviceDetails === "object";
    const price = isDetailed ? serviceDetails.price : serviceDetails;
    const details = isDetailed ? serviceDetails.details : null;

    return (
      <li key={serviceName} className="flex items-center justify-between mb-2 relative group">
        <span className="flex items-center">
          {serviceName}
          {details && (
            <span className="ml-2 relative group">
              <span className="text-gray-500 cursor-pointer group-hover:text-red-500">
                &#9432;
              </span>
              <span className="absolute left-0 -bottom-14 hidden group-hover:flex bg-gray-800 text-white text-xs rounded-lg p-2 shadow-lg max-w-xs whitespace-normal">
                {details}
              </span>
            </span>
          )}
        </span>
        <span className="font-bold w-16 text-right font-mono">£{price}</span>
      </li>
    );
  };

  return (
    <section id="services" className="p-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-black text-white border-4 border-red-600 rounded-lg p-6"
      >
        <MotionDiv
          className="text-3xl font-bold text-center mb-6"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Service Menu
        </MotionDiv>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cuts Section */}
          <MotionDiv
            className="p-4 border border-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600 w-full sm:w-72"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold capitalize mb-3">Cuts</h2>
            <ul>
              {Object.entries(cuts).map(([name, details]) => renderService(name, details))}
            </ul>
          </MotionDiv>

          {/* Shave Section */}
          <MotionDiv
            className="p-4 border border-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600 w-full sm:w-72"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold capitalize mb-3">Shave</h2>
            <ul>
              {Object.entries(shave).map(([name, details]) => renderService(name, details))}
            </ul>
          </MotionDiv>

          {/* Extras Section */}
          <MotionDiv
            className="p-4 border border-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600 w-full sm:w-72"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold capitalize mb-3">Extras</h2>
            <ul>
              {Object.entries(extras).map(([name, price]) => renderService(name, price))}
            </ul>
          </MotionDiv>

          {/* Specials Section */}
          <MotionDiv
            className="p-4 border border-gray-700 rounded-lg w-full sm:w-[35rem]" // Adjusted width
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold capitalize mb-3">Specials</h2>
            <div className="grid gap-4">
              {Object.entries(specials).map(([specialName, { price, details }]) => (
                <MotionDiv
                  key={specialName}
                  className="p-4 bg-gray-800 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{specialName}</span>
                    <span className="font-bold">£{price}</span>
                  </div>
                  <div className="text-sm bg-red-600 p-2 rounded text-white">{details}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Services;
