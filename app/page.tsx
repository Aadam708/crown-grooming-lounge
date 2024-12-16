"use client";


import dynamic from 'next/dynamic';


import Link from "next/link";
// import Gallery from "./components/gallery"; // Adjust the path based on your file structure
import Image from "next/image";
// import Services from "./components/services";
// import Contact from "./components/contact";

const Gallery = dynamic(() => import("./components/gallery"), { ssr: false });
const Services = dynamic(() => import("./components/services"), { ssr: false });
const Contact = dynamic(() => import("./components/contact"), { ssr: false });
export default function Home() {

  console.log();
  console.log(Gallery);
  console.log(Contact);

  return (
    <main className="relative min-h-screen bg-[url('https://img.freepik.com/free-vector/black-background-geometric-gradient-design_677411-2886.jpg?semt=ais_hybrid')] bg-cover bg-center">
      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="The Crown Grooming Lounge"
            width={100}
            height={100}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-3 items-center md:gap-5">
          <Link href="#services" className="text-white text-sm md:text-base hover:text-red-500 transition-colors duration-300">
            Services
          </Link>
          <Link href="#gallery" className="text-white text-sm md:text-base hover:text-red-500 transition-colors duration-300">
            Gallery
          </Link>
          <Link href="#contact" className="text-white text-sm md:text-base hover:text-red-500 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center px-5 mt-16 space-y-5 md:mt-32 text-center">
      <h1 className="text-white text-2xl md:text-3xl">The Future of Men&#39;s Grooming</h1>
      <Link href="#services">
          <button className="text-white border border-white rounded-lg px-4 py-2 hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
            Find Out More
          </button>
        </Link>
      </div>

      {/* Spacer to maintain the cool gaps */}
      <div className="h-screen"></div>

      {/* Services Section */}
      <div className="flex flex-col items-center px-5 md:px-0">
        <Services />
      </div>
      <div className="h-screen"></div>

      {/* Gallery Section */}
      <div className="flex flex-col items-center px-5 md:px-0">
        <Gallery />
      </div>
      <div className="h-screen"></div>

      {/* Contact Section */}
      <div className="flex flex-col items-center px-5 md:px-0">
        <Contact />
      </div>
    </main>
  );
}
