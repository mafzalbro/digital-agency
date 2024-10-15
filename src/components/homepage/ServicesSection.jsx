import { motion } from 'framer-motion';
import { FaLaptopCode, FaPenFancy, FaMobileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaLaptopCode />, title: 'Web Design', description: 'Modern and responsive websites.' },
  { icon: <FaPenFancy />, title: 'Graphic Design', description: 'Creative graphics for your brand.' },
  { icon: <FaMobileAlt />, title: 'UI/UX Design', description: 'User-centered design solutions.' },
];

const ServicesSection = () => (
  <div className="py-16 px-8 bg-white dark:bg-gray-900">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-gray-800 dark:text-white text-center"
    >
      Our Services
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10, rotateZ: 2 }} // Subtle tilt effect
          transition={{ duration: 0.3 }} // Smooth transition
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-shadow hover:shadow-lg border-2 border-blue-400 flex flex-col items-center text-center"
        >
          <div className="text-8xl text-blue-600 dark:text-blue-400 mb-6 p-2">{service.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default ServicesSection;
