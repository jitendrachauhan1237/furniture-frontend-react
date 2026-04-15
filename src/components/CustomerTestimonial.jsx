import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStore } from "../context/StoreContext";

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-orange-100 p-2 text-orange-500"
  >
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-orange-100 p-2 text-orange-500"
  >
    <FaArrowRight />
  </div>
);

const CustomerTestimonials = () => {
  const { testimonials } = useStore();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-2xl bg-white px-4 py-10 text-[#523022] md:px-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Client voices</p>
      <h2 className="mb-2 text-3xl font-bold">What Clients Say</h2>
      <p className="mb-6 text-gray-500">Realistic demo feedback for a complete storefront feel.</p>

      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.name} className="p-6">
            <div className="flex flex-col items-center rounded-xl border p-6 shadow-md">
              <img
                src={t.image}
                alt={t.name}
                className="mb-4 h-24 w-24 rounded-full object-cover"
              />
              <p className="mb-4 text-center text-gray-600">{t.feedback}</p>
              <FaQuoteLeft className="mb-2 text-3xl text-orange-500" />
              <h4 className="text-lg font-semibold text-black">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerTestimonials;
