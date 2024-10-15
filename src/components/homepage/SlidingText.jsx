import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Punch words for the animation
const punchWords = ['Foundation', 'Stability', 'Support', 'Growth'];

const SlidingText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [randomDirection, setRandomDirection] = useState({ x: 0, y: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the word every 3 seconds
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % punchWords.length);
      
      // Generate random direction (top, bottom, left, or right)
      setRandomDirection(getRandomDirection());
    }, 800); // Adjust timing as needed

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Function to randomly select direction for word to appear from
  const getRandomDirection = () => {
    const directions = [
      { x: 0, y: 100 },  // From bottom
      { x: 0, y: -100 }, // From top
      { x: 100, y: 0 },  // From right
      { x: -100, y: 0 }, // From left
    ];

    // Randomly pick one direction
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <div className="flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 dark:text-white text-gray-900 py-10">
      <div className="flex space-x-8">
        <motion.span
          key={currentWordIndex} // Use key to trigger re-mounting for animation
          initial={{ opacity: 0, x: randomDirection.x, y: randomDirection.y }} // Random start position
          animate={{ opacity: 1, x: 0, y: 0 }} // Animate to center
          exit={{ opacity: 0, x: randomDirection.x, y: randomDirection.y }} // Random exit direction
          transition={{
            duration: 0.2, // Duration for fade in/out
            ease: 'easeInOut',
          }}
          className="text-6xl lg:text-9xl font-extrabold whitespace-nowrap" // Prevent text wrapping
        >
          {punchWords[currentWordIndex]} {/* Display current word */}
        </motion.span>
      </div>
    </div>
  );
};

export default SlidingText;
