import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Armchair, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Dining Chair", image: "/chair.png" },
  { name: "Sofas", image: "/sofa.webp" },
  { name: "Table", image: "/table.png" },
  { name: "Beds", image: "/bed.webp" },
  { name: "Wardrobes", image: "/Wardrobe.webp" },
  { name: "Bookshelves", image: "/bookshelf.avif" },
];

const ShopByCategory = () => {
  return (
    <div className="bg-white md:py-16 px-6 md:px-0 flex flex-col md:flex-row items-start gap-10 mx-auto max-w-screen-2xl">
      
      {/* Left Fixed Content */}
      <div className="md:w-1/6 w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Shop by <br className="md:block hidden" /> categories
        </h2>
        <div className="flex items-center gap-3 text-gray-600 mb-3">
          <Armchair />
          <p className="text-sm">200+ Unique products</p>
        </div>
         <div className="justify-between items-center  md:block flex">
        <a href="#" className="text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-orange-500">
          All Categories &rarr;
        </a>
    
        {/* Arrows on mobile below link */}
        <div className="flex gap-3 mt-4 ">
          <button className="swiper-prev bg-orange-100 p-2 rounded-full shadow">
            <ChevronLeft className="w-5 h-5 text-orange-500" />
          </button>
          <button className="swiper-next bg-orange-100 p-2 rounded-full shadow">
            <ChevronRight className="w-5 h-5 text-orange-500" />
          </button>
        </div>
        </div>
      </div>

      {/* Right Scrollable Slider */}
      <div className="md:w-5/6 w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fff3e1] border border-amber-300 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-40 h-40 aspect-square object-contain mb-4"
                />
                <h3 className="text-xl font-sans font-bold text-gray-800">{cat.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </div>
  );
};

export default ShopByCategory;
