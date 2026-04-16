import React from "react";
import { motion } from "framer-motion";
import { Truck, PercentCircle, ShieldCheck, Headphones, Undo2, Lock, Leaf } from "lucide-react";

const benefits = [
  { title: "Free & Fast Delivery", icon: <Truck size={24} className="text-gray-500" /> },
  { title: "Exclusive Discounts", icon: <PercentCircle size={24} className="text-gray-500" /> },
  { title: "Premium Quality", icon: <ShieldCheck size={24} className="text-gray-500" /> },
  { title: "24/7 Support", icon: <Headphones size={24} className="text-gray-500" /> },
  { title: "Hassle-Free Returns", icon: <Undo2 size={24} className="text-gray-500" /> },
  { title: "Secure Payments", icon: <Lock size={24} className="text-gray-500" /> },
  { title: "Eco-Friendly Materials", icon: <Leaf size={24} className="text-gray-500" /> },
];

const InfiniteBenefitsScroll = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white py-12 overflow-hidden relative">

      {/* LEFT GRADIENT */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

      {/* RIGHT GRADIENT */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...benefits, ...benefits].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 min-w-fit px-6 hover:scale-105 transition-transform duration-300"
          >
            {item.icon}
            <h3 className="text-md font-semibold text-gray-700">
              {item.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBenefitsScroll;