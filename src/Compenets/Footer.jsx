import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Huzaifa Yousafzai</h2>
          <p className="text-sm">Front-End Developer & UI/UX Designer</p>
        </div>
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com/" className="hover:text-purple-500 transition duration-300">
            <AiOutlineGithub />
          </a>
          <a href="https://linkedin.com/" className="hover:text-purple-500 transition duration-300">
            <AiOutlineLinkedin />
          </a>
          <a href="https://instagram.com/" className="hover:text-purple-500 transition duration-300">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
