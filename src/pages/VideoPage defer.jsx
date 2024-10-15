// VideoPage.jsx

import React from 'react';
import { motion } from "framer-motion";
import HeroTitle from "../components/HeroTitle";
import CustomVideoPlayer from "../components/video-page/CustomVideoPlayer";

const VideoPage = () => {
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with your YouTube video URL

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-8">
      <HeroTitle>Watch Video</HeroTitle>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 p-4 md:my-10 overflow-hidden rounded-lg"
      >
        <CustomVideoPlayer videoUrl={videoUrl} />
      </motion.div>
    </div>
  );
};

export default VideoPage;
