import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillData } from "../data/skillData";
import Footer from "./Footer";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All Skills");
  const tabs = ["All Skills", "Frontend", "Backend", "Tools & Others"];

  const filteredSkills = skillData.filter(
    (skill) => activeTab === "All Skills" || skill.category === activeTab
  );

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <div
        className="pt-20 md:pt-28 px-4 relative flex items-center justify-center bg-white text-white"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are the technologies I work with to bring ideas to life.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center mb-8 p-1 rounded-3xl shadow-lg border border-gray-600 max-w-lg mx-auto bg-white"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out font-medium text-sm md:text-base
              ${activeTab === tab
                    ? "bg-gray-200 text-gray-900 border-b-2 border-indigo-400 shadow-md"
                    : "text-gray-500 hover:bg-gray-100 hover:shadow-xl"
                  }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  className="p-3 sm:p-6 rounded-xl shadow-lg flex flex-col items-center justify-center 
                           transform hover:scale-90 hover:rotate-2 transition-shadow duration-200 cursor-pointer border border-gray-500 hover:border-gray-300 bg-gray-100 text-gray-700"
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  title={skill.name}
                >
                  <div className="mb-3 hover:scale-120 hover:rotate-5">
                    {skill.icon}
                  </div>
                  <p className="text-sm sm:text-lg md:text-xl font-semibold text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
