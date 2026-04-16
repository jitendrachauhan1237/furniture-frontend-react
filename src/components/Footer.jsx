import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full font-sans bg-orange-100 text-gray-800">
      
      {/* Top Section */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        
        {/* Social */}
        <div>
          <p className="mb-2 text-sm font-medium">Get Social</p>
          <h3 className="mb-4 text-lg font-semibold">Connect with us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/adminpanel">Demo Admin</Link></li>
          </ul>
        </div>

        {/* Notes */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Demo Notes</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li>Fake data powered</li>
            <li>Local demo cart</li>
            <li>Frontend checkout flow</li>
            <li>Portfolio ready UI</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-amber-800 text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 text-xs">
          
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-black text-amber-800">
              F
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/about" className="hover:underline">Brand Story</Link>
              <Link to="/shop" className="hover:underline">Collections</Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            © furnivia Demo Store 2026
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;