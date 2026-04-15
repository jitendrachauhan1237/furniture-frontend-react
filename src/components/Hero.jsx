import { ArrowRight, MoveDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden"> {/* Added overflow-hidden here */}
      {/* Background Image */}
      <img
        src="/hero-img.png"
        alt="Modern living room"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent via-30%"></div>

      {/* Hero Text */}
      <div className="absolute w-full flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white px-4"> {/* Changed w-screen to w-full */}
        <h1 className="text-2xl md:text-6xl font-bold mb-4 text-amber-900">
          Modern & Stylish Furniture
        </h1>
        <p className="text-sm md:text-xl max-w-2xl mx-auto text-amber-900 mb-6">
          Upgrade your home with our premium selection of modern, cozy and
          sustainable furniture.
        </p>

        {/* SHOP Button */}
        <div className="flex justify-center">
          <button className="btn w-fit group bg-amber-900 font-sans border-none font-semibold rounded-full text-white flex items-center justify-center gap-0 overflow-hidden px-6 py-2">
            <span className="transition-all duration-300 group-hover:mr-2">
              SHOP NOW
            </span>
            <span className="overflow-hidden w-0 group-hover:w-5 transition-all duration-300">
              <ArrowRight />
            </span>
          </button>
        </div>

        {/* Down Arrow Icon Below Button */}
        <div className="mt-6 flex justify-center animate-bounce">
          <div className="bg-amber-900 text-white rounded-full p-2">
            <MoveDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;