import React from "react";
import { motion } from "framer-motion";
import { Truck, PercentCircle, ShieldCheck, Headphones, Undo2, Lock, Leaf } from "lucide-react";

const benefits = [
  { title: "Free & Fast Delivery", icon: <Truck size={24} className="text-orange-500" /> },
  { title: "Exclusive Discounts", icon: <PercentCircle size={24} className="text-orange-500" /> },
  { title: "Premium Quality", icon: <ShieldCheck size={24} className="text-orange-500" /> },
  { title: "24/7 Support", icon: <Headphones size={24} className="text-orange-500" /> },
  { title: "Hassle-Free Returns", icon: <Undo2 size={24} className="text-orange-500" /> },
  { title: "Secure Payments", icon: <Lock size={24} className="text-orange-500" /> },
  { title: "Eco-Friendly Materials", icon: <Leaf size={24} className="text-orange-500" /> },
];

const InfiniteBenefitsScroll = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto bg-white py-12 overflow-hidden relative">
      <motion.div
        className="flex gap-8"
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
            className="min-w-[240px] bg-gradient-to-br from-orange-100 to-white border border-orange-200 rounded-xl shadow-md px-6 py-5 text-center flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBenefitsScroll;
