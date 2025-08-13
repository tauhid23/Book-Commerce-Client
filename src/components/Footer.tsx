import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative mx-auto  text-gray-600 py-8 mt-12 overflow-hidden">
      {/* Background emojis */}
      <div className="absolute inset-0 flex justify-center items-center text-6xl opacity-5 pointer-events-none select-none">
        📚 📖 📕 📗 📘 📙
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6">
          <h2 className="text-xl font-bold text-gray-800">BookStore</h2>
          <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500">
            <a href="#" className="hover:text-gray-800"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-800"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-800"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-800"><FaGithub /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">About Us</h3>
            <p className="text-gray-500">
              MyBookStore is your go-to place for amazing books, reviews, and recommendations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">Categories</a></li>
              <li><a href="#" className="hover:text-gray-800">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Email: support@mybookstore.com</li>
              <li>Phone: +880 1234 567 890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
