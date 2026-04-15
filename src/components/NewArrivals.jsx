import React from "react";

const newArrivals = [
  {
    id: 1,
    title: "Velvet Modern Sofa",
    price: "₹24,999",
    image: "/bed.webp",
  },
  {
    id: 2,
    title: "Solid Wood King Bed",
    price: "₹34,499",
    image: "/chair.png",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    price: "₹12,999",
    image: "sofa.webp",
  },
  {
    id: 4,
    title: "Minimalist Coffee Table",
    price: "₹8,499",
    image: "/table.png",
  },
];

const NewArrivals = () => {
  return (
    <div className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-700">{item.title}</h3>
              <p className="text-orange-600 font-bold mt-1">{item.price}</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-full transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
