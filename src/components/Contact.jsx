import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "./Footer";

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSendMessage = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div>
      <motion.section
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        className="bg-white text-gray-900 flex flex-col items-center justify-center mt-8 md:mt-14"
      >
        <motion.h1
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="md:text-5xl text-4xl font-bold"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="text-gray-700 mb-8 text-center"
        >
          Ready to collaborate or have a question? Reach out and I'll respond as soon as possible!
        </motion.p>

        <motion.div
          variants={scaleIn}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-8 w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg"
        >
          <motion.div
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <textarea placeholder="Your Message" className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </motion.div>
          <motion.div
            variants={slideRight}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="bg-gray-100 rounded-lg p-6 hidden md:block text-center shadow-inner flex-1"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Let's Connect</h2>
            <p className="text-gray-700 mb-6">
              I'm currently available for freelance work or full-time positions. If you have a project that you want to get started or need help with something, feel free to reach out.
            </p>
            <p className="text-purple-950 font-medium mb-6">nayannakum08@gmail.com</p>
            <div className="p-4 bg-white rounded-full border w-fit m-auto text-2xl text-gray-800 border-gray-300">
              <HiOutlineMail />
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-2xl text-sm md:text-lg flex items-center justify-between gap-3 w-64 md:w-fit"
            >
              <span>Message Sent Successfully!</span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
        <Footer />
    </div>
  );
};

export default Contact;
