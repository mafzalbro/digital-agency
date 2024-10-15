import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GraphicsDesignPage = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer1 = setTimeout(() => setLoading1(false), 1000);
    const timer2 = setTimeout(() => setLoading2(false), 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8">
      <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white"
        >
          Graphics Design
        </motion.h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-2 w-full overflow-auto mt-6">
        <div className="lg:max-w-[40%] flex-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="min-w-[300px] h-screen border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-auto transition-transform transform hover:scale-105"
          >
            {loading1 ? (
              <Skeleton height={800} />
            ) : (
              <iframe
                src="/cv-template.pdf" // Path to your HTML document
                className="w-full h-full"
                title="CV Template"
                onLoad={() => setLoading1(false)}
                style={{ border: "none" }}
              />
            )}
            {!loading1 && <p className="text-right text-gray-500">Page 1</p>}
          </motion.div>
        </div>
        <div className="lg:max-w-[40%] flex-1">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="min-w-[300px] h-screen border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-auto transition-transform transform hover:scale-105"
          >
            {loading2 ? (
              <Skeleton height={800} />
            ) : (
              <iframe
                src="/graphic.pdf" // Path to your HTML document
                className="w-full h-full"
                title="Graphic Design"
                onLoad={() => setLoading2(false)}
                style={{ border: "none" }}
              />
            )}
            {!loading2 && <p className="text-right text-gray-500">Page 1</p>}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesignPage;
