import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-6 text-center border-t border-gray-300">
      <h2 className="text-lg font-semibold">
        <span className="text-purple-950">Nayan </span>Nakum
      </h2>
      <p className="text-sm mb-4">
        Building digital experiences with creativity and code.
      </p>

      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/Nakum-Nayan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full hover:bg-purple-100 transition text-gray-700"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nayan-nakum-10674b374"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full hover:bg-purple-100 transition text-gray-700"
        >
          <FaLinkedinIn className="text-xl" />
        </a>
        <a
          href="nayannakum08@gmail.com"
          className="p-2 border rounded-full hover:bg-purple-100 transition text-gray-700"
        >
          <HiOutlineMail className="text-xl" />
        </a>
      </div>

      <hr className="border-gray-300 mb-4" />
      <p className="text-xs text-gray-600 mt-10 md:mt-0">
        © 2025 Nayan Nakum. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
