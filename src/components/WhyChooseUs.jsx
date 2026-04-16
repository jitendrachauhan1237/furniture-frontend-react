import React from "react";
import { Truck, ShoppingBag, Headphones, RotateCcw } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast & Free Shipping",
    description:
      "Get your furniture delivered quickly and for free on all eligible orders.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Easy to Shop products",
    description:
      "Simple navigation and smooth checkout for a hassle-free experience.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Support Team",
    description: "Our team is always ready to assist you, day or night.",
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Hassle Free Returns",
    description: "Not satisfied? Return your item easily within 7 days.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 py-12 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Join thousands of happy customers enjoying the best in furniture
            shopping.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 bg-white rounded-2xl border hover:shadow-xl hover:border-orange-400 transition duration-300"
              >
                <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-3 md:mb-4">
                  <div className="bg-orange-100 p-2 md:p-3 rounded-full text-orange-500 group-hover:rotate-12 transition duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg text-left">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image with decorative blobs */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/Whychooseus.png"
            alt="Why Choose Us"
            className="rounded-3xl  w-full relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
