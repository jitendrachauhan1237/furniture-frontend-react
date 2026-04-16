import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl bg-[#fefefe] font-sans text-sm text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="rounded-tl-xl bg-[#f3ddcb] p-6">
          <p className="mb-2 text-sm font-medium">Get Social</p>
          <h3 className="mb-4 text-lg font-semibold">Connect with us</h3>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className="bg-[#bfd7b5] p-6">
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/adminpanel">Demo Admin</Link></li>
          </ul>
        </div>

        <div className="rounded-tr-xl bg-[#e6937a] p-6">
          <h3 className="mb-4 text-xl font-bold">Demo Notes</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li>Fake data powered</li>
            <li>Local demo cart</li>
            <li>Frontend checkout flow</li>
            <li>Portfolio ready UI</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between bg-black px-6 py-6 text-xs text-white md:flex-row md:px-20">
        <div className="mb-4 flex items-center gap-3 md:mb-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-black">
            FL
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/about" className="hover:underline">Brand Story</Link>
            <Link to="/shop" className="hover:underline">Collections</Link>
          </div>
        </div>
        <div className="text-center">© furnivia Demo Store 2026</div>
      </div>
    </footer>
  );
};

export default Footer;
