import { motion } from 'framer-motion';

const TextSlide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-justify mt-8 md:w-[70vw]"
    >
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Design Inspirations</h3>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Explore the intersection of creativity and technology in graphic design. 
        Here you will find unique concepts, color schemes, and layouts that inspire.
      </p>
    </motion.div>
  );
};

export default TextSlide;
