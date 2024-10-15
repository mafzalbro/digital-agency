// File: AboutSection.jsx

import { motion } from 'framer-motion';

const AboutSection = () => (
  <div className="py-16 px-8 bg-white dark:bg-gray-900 flex flex-col md:flex-row items-center gap-2 md:gap-8 lg:gap-20">
    <div className="md:w-1/2">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 dark:text-white"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 dark:text-gray-300 mt-4"
      >
        XYZ Company is a full-service design agency specializing in digital and graphic design. We bring your ideas to life with professional and creative design solutions.
      </motion.p>
    </div>

    <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/about.png" alt="Graphic Design" width={400} height={400} className="rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </div>
);

export default AboutSection;
