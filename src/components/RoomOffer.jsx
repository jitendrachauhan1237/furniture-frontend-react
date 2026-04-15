import React from "react";

const promoData = [
   {
    title: "Dining Room",
    image: "/dining.jpg",
  },
  {
    title: "Living Room",
    image: "/livingRoom.jpg",
  },
 
];

const RoomOffers = () => {
  return (
    <div className=" py-16 bg-white max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5">
        {promoData.map((room, index) => (
          <div
            key={index}
            className="relative overflow-hidden group"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 "></div>

            <div className="absolute inset-0 border border-white m-4  pointer-events-none"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-900 text-center px-4">
              <p className="text-xs tracking-widest mb-2">30% OFF ALL ORDER</p>
              <h3 className="text-5xl font-bold mb-4">{room.title}</h3>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm transition">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomOffers;
