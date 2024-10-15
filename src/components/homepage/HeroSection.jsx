import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import RoundedButton from '../RoundedButton';

const HeroSection = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [scale, setScale] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000; // Scale factor based on scroll
      setScale(newScale);
    };

    // Mouse move handler
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });
    };

    // Add event listeners for scroll and mouse move
    const heroElement = heroRef.current;
    window.addEventListener('scroll', handleScroll);
    heroElement.addEventListener('mousemove', handleMouseMove);

    // Animation timeout
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 1500);

    return () => {
      // Cleanup event listeners
      window.removeEventListener('scroll', handleScroll);
      heroElement.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Calculate image position based on mouse movement, moving opposite
  const imageStyle = {
    transform: `translate(calc(-50% + ${-(mousePos.x / window.innerWidth) * 20 + 10}px), calc(-50% + ${-(mousePos.y / window.innerHeight) * 20 + 10}px)) scale(${scale})`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div
      ref={heroRef} // Set the ref on the container
      className="h-[60vh] flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white z-10"
      >
        <Typewriter
          options={{
            strings: ['Design Your Future', 'Elevate Your Brand', 'Create with Us'],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 text-center z-10"
      >
        Professional design services for your business.
      </motion.p>
      {animationDone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 z-10"
        >
          <RoundedButton className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Get Started
          </RoundedButton>
        </motion.div>
      )}
      {/* Right Side Image */}
      <motion.img
        src="/hero.png"
        alt="Hero"
        className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full object-cover opacity-10 dark:opacity-10 pointer-events-none"
        style={imageStyle}
      />
    </div>
  );
};

export default HeroSection;
