import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 py-10">
      {/* Container for footer content */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* About Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a team of passionate developers dedicated to building high-quality web applications. Our goal is to provide innovative solutions that meet our clients' needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 flex items-center gap-2"><FaEnvelope /> info@example.com</p>
          <p className="text-gray-400 flex items-center gap-2"><FaPhoneAlt /> +123 456 7890</p>
          
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillTwitterCircle />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillFacebook />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
