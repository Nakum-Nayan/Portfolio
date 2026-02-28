import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';
import projectData from '../data/projectData';
import Footer from './Footer';

const Projects = () => (
  <div>
    <div className="flex justify-center items-center bg-primary-dark min-h-screen mb-5 md:mb-0">
      <div className="max-w-6xl mx-auto w-full text-center px-4 pt-20">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-accent-dark border-1 rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <video
                src={project.video}
                className="w-full h-48 object-cover rounded-t-xl"
                autoPlay
                muted
                loop
                playsInline
                onError={(e) => {
                  e.target.outerHTML = `<img 
                  src="https://placehold.co/600x400?text=${encodeURIComponent(project.video)}" 
                  alt="${project.name}" 
                  class="w-full h-48 object-cover rounded-t-xl" 
                />`;
                }}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-light-background mb-2">{project.name}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-primary-dark text-light-background text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 flex justify-center gap-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-soft-neutral text-accent-dark font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  <Link className="w-5 h-5 mr-2" /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 font-semibold border rounded-lg hover:bg-gray-200 transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Projects;