import { motion } from "framer-motion";

const HeroTitle = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-800 dark:to-transparent rounded-lg flex items-center justify-center my-5 md:my-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} // Optional: Add transition for smoothness
        className="text-5xl font-bold text-text-dark dark:text-white"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default HeroTitle;
