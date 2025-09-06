import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nayan from "../assets/Nayan.png";
import Nayanpdf from "../assets/Nayan Nakum.pdf"
import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "./Footer";

const textLines = [
  { label: "Fullstack Developer" },
  { label: "MERN Stack Developer" },
];

const MotionLink = motion(Link);
const Home = ({ smoothScroll }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse justify-center h-screen md:flex-row items-center gap-14 md:gap-10 mt-17 md:mt-0 scroll-auto">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-3xl text-gray-900 sm:text-3xl md:text-5xl lg:text-6xl font-extrabold md:mb-4 leading-tight text-light-background"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-soft-neutra text-gray-900">Nayan Nakum</span>
          </motion.h1>

          <motion.div
            className="flex flex-row flex-wrap justify-center md:justify-start text-2xl sm:text-2xl md:text-3xl gap-2 py-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="flex md:w-fit w-full items-center justify-center text-light-background text-gray-800">A passionate</span>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              className="text-yellow-600 font-bold"
            >
              {textLines[index].label}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto md:mx-0 px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Graduation: 2026. I love building{" "}
            <span className="font-bold text-gray-900">
              scalable and robust web applications
            </span>{" "}
            that bring ideas to life.
          </motion.p>

          <div className="mt-6 flex flex-row flex-wrap-anywhere sm:flex-row items-center gap-3 sm:gap-4">
            <MotionLink
              to="/projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3, 
                delay: 0.1,
              }}
              whileHover={{
                scale: 1.03, 
                backgroundColor: "#4f46e5",
                boxShadow: "0 5px 10px -2px rgba(79, 70, 229, 0.3)",
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-l sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium shadow-md bg-indigo-600 text-white"
            >
              <span className="relative z-10 whitespace-nowrap sm:hidden ">
                View Projects
              </span>
              <motion.span
                initial={{ x: -3 }}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:inline-block text-lg"
              >
                View Projects →
              </motion.span>
            </MotionLink>

            <MotionLink
              to="/contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.15,
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(243, 244, 246, 0.7)",
                borderColor: "#6b7280",
                boxShadow: "0 5px 10px -2px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-l sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium border border-gray-300 text-gray-700 bg-white/80"
            >
              <span className="relative z-10 whitespace-nowrap">
                Get in touch
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:inline-block text-lg"
              >
                ✉️
              </motion.span>
            </MotionLink>
          </div>
          <motion.a
            href={Nayanpdf}
            download
            className="flex flex-row gap-3 shadow-[0px_5px_13px_#1f2937] w-fit text-white bg-gray-700 mt-5 md:px-22 px-8.5 md:py-3 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-600 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl animate-bounce"><MdOutlineFileDownload /></span>
            <span>Download Resume</span>
          </motion.a>
        </div>

        <motion.div
          className="flex-1 flex  justify-center mt-6 md:mt-0 md:justify-end sm:w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={Nayan}
            alt="Nayan Nakum"
            className=" sm:h-64 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] object-cover shadow-3xl"
          />
        </motion.div>
      </div>
        <Footer />
    </div>
  );
};

export default Home;
