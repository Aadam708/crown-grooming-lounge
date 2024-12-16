"use client";

import dynamic from "next/dynamic";
import { FaPhone, FaMapMarkerAlt, FaClock, FaInstagram } from "react-icons/fa";

// Dynamically import motion.div from framer-motion with SSR disabled
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto p-8 rounded-lg border border-red-600"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-around mb-6">
          {/* Address Section */}
          <div className="flex items-center mb-6 md:mb-0 md:w-1/3">
            <FaMapMarkerAlt className="text-red-600 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Address</h3>
              <p>169 Long Rd,<br />Canvey Island SS8 0JD,<br />England</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center mb-6 md:mb-0 md:w-1/3">
            <FaPhone className="text-red-600 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p>01268 681404</p>
            </div>
          </div>

          {/* Hours Section */}
          <div className="flex items-center md:w-1/3">
            <FaClock className="text-red-600 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Hours</h3>
              <p>Monday - Saturday: 9 am–6:30 pm<br />
   Sunday: 10 am–4 pm</p>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="flex items-center justify-center mb-6">
          <FaInstagram className="text-red-600 text-3xl mr-4" />
          <a
            href="https://www.instagram.com/thecrowngrooming/p/C-K8OxSNDSv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold hover:text-red-400 transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>

        {/* Full Hours List */}
        <div className="bg-gray-800 p-4 rounded-lg text-center mb-6">
          <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
          <ul className="grid grid-cols-2 gap-2 text-gray-400">
            <li>Monday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Tuesday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Wednesday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Thursday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Friday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Saturday: <span className="text-white">9 am–6:30 pm</span></li>
            <li>Sunday: <span className="text-white">10 am–4 pm</span></li>
          </ul>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.5488727643717!2d0.5956932157471078!3d51.51810551742653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bb734dd6f21f%3A0xa4e3d8d8e9ff2453!2s169%20Long%20Rd%2C%20Canvey%20Island%20SS8%200JD%2C%20UK!5e0!3m2!1sen!2suk!4v1696873487921!5m2!1sen!2suk"
            width="100%"
            height="300"
            loading="lazy"
            className="border-none"
            allowFullScreen
          ></iframe>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Contact;
