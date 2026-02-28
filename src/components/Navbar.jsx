import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/NavbarLink";

const Navbar = () => {
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Nakum-Nayan', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/nayan-nakum-10674b374', label: 'LinkedIn' },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.nav
        className="md:hidden flex fixed top-0 left-0 right-0 z-50 bg-accent-dark bg-opacity-90 backdrop-blur-sm p-4 md:p-6 shadow-lg justify-between items-center"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" className="flex items-center text-yellow-400 text-xl font-bold">
          <span className="mr-1">&lt;</span> Nayan <span className="ml-1">/&gt;</span>
        </Link>
        <ul>
          <li className="flex space-x-4 border-l border-gray-700 pl-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/70"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </li>
        </ul>
      </motion.nav>
      <motion.ul
        className="fixed bottom-10 left-3 right-3 z-50 bg-accent-dark bg-opacity-90 backdrop-blur-3xl p-3 flex justify-center md:hidden text-gray-900 rounded-lg shadow-lg border border-gray-600 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`px-3 py-2 transition ${currentPath === item.path ? "text-yellow-400 border-b-2 border-yellow-400" : "text-soft-neutral"}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>

      <motion.nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-accent-dark bg-opacity-90 backdrop-blur-sm p-4 md:p-6 shadow-lg  justify-between items-center"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" className="flex items-center text-yellow-400 text-xl font-bold">
          <span className="mr-1">&lt;</span> Nayan <span className="ml-1">/&gt;</span>
        </Link>

        <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 transition ${currentPath === item.path ? "text-yellow-400 border-b-2 border-yellow-400" : "text-soft-neutral"}`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}

          <li className="flex space-x-4 border-l border-gray-700 pl-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/70"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
