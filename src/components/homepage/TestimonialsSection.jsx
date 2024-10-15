// File: TestimonialsSection.jsx

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    text: '"Amazing design services! Our brand has never looked better."',
    author: 'Client 1',
  },
  {
    id: 2,
    text: '"The team exceeded our expectations. Highly recommend their services!"',
    author: 'Client 2',
  },
  {
    id: 3,
    text: '"Professional, creative, and responsive. They brought our vision to life!"',
    author: 'Client 3',
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="py-16 px-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">What Our Clients Say</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-800 dark:text-gray-300">{testimonial.text}</p>
              <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">- {testimonial.author}</p>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
