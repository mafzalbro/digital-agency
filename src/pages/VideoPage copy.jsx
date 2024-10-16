import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
import HeroTitle from "../components/HeroTitle";

const VideoPage = () => (
  <div className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-8">
    <HeroTitle>Watch Video</HeroTitle>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-6 p-4 md:my-10 overflow-hidden rounded-lg"
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls
        playIcon={'Play'}
        muted
        volume={10}
        width="100vw"
        // height="480px"
        className="rounded-lg overflow-hidden w-full h-auto object-cover bg-slate-50 dark:bg-black"
      />
    </motion.div>
  </div>
);

export default VideoPage;
