import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { BsVolumeUp, BsVolumeMute } from "react-icons/bs";
import { MdSpeed } from "react-icons/md";
import HeroTitle from "../components/HeroTitle";

const VideoPage = () => {
  const [playing, setPlaying] = useState(false); // Default paused
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1); // Set default speed to 1x
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const playerRef = useRef(null);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
      setVolume(0.8); // Reset volume to 80% if unmuted
    } else {
      setMuted(true);
      setVolume(0); // Set volume to 0 if muted
    }
  };

  const handleVolumeChange = (e) => {
    const volumeValue = parseFloat(e.target.value);
    setVolume(volumeValue);
    setMuted(volumeValue === 0); // Mute if volume is set to 0
  };

  const handleSpeedChange = () => {
    const speeds = [1, 1.25, 1.5, 1.75, 2.0]; // Add 1x (normal) speed option
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length; // Cycle through speeds
    setPlaybackRate(speeds[nextIndex]);
  };

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleVideoReady = () => {
    setLoading(false); // Set loading to false when video is ready
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-8">
      <HeroTitle>Watch Video</HeroTitle>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 p-4 md:my-10 overflow-hidden rounded-lg"
      >
        {loading ? (
          // Loading spinner or skeleton
          <div className="dark:text-white h-96 flex justify-center items-center">Loading...</div>
        ) : (
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing={playing}
            muted={muted}
            volume={volume}
            playbackRate={playbackRate}
            width="100vw"
            onProgress={handleProgress}
            onDuration={handleDuration}
            onPlay={() => setPlaying(true)} // Sync with YouTube's play button
            onPause={() => setPlaying(false)} // Sync with YouTube's pause button
            controls={false} // Hide YouTube native controls
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1, // Autoplay video
                  cc_lang_pref: "en", // Set default captions language
                  cc_load_policy: 1, // Show captions by default
                  color: "white", // Progress bar color (red or white)
                  controls: 0, // Hide default controls
                  disablekb: 1, // Disable keyboard shortcuts
                  enablejsapi: 1, // Allow control via IFrame API
                  end: 120, // End video at 120 seconds
                  hl: "en", // Set player's interface language
                  iv_load_policy: 3, // Hide video annotations (info button)
                  modestbranding: 1, // Remove YouTube branding
                  rel: 0, // Show related videos from the same channel
                  start: 10, // Start playing video from 10 seconds
                  playsinline: 1, // Inline playback for iOS
                  loop: 1, // Loop video (need playlist param)
                  playlist: "dQw4w9WgXcQ", // To loop the same video, set it as the playlist
                },
              },
            }}
            className="rounded-lg overflow-hidden w-full h-auto object-cover bg-slate-50 dark:bg-black"
          />
        )}
      </motion.div>

      {!loading && (
        <>
          {/* Custom Controls */}
          <div className="flex justify-between items-center w-full max-w-lg mt-4">
            {/* Play / Pause */}
            <button onClick={togglePlayPause} className="focus:outline-none">
              {playing ? (
                <AiOutlinePauseCircle className="text-3xl text-gray-800 dark:text-white" />
              ) : (
                <AiOutlinePlayCircle className="text-3xl text-gray-800 dark:text-white" />
              )}
            </button>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <button onClick={toggleMute} className="focus:outline-none">
                {muted ? (
                  <BsVolumeMute className="text-2xl text-gray-800 dark:text-white" />
                ) : (
                  <BsVolumeUp className="text-2xl text-gray-800 dark:text-white" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gray-600 rounded-lg cursor-pointer"
              />
            </div>

            {/* Speed Control */}
            <button
              onClick={handleSpeedChange}
              className="flex items-center focus:outline-none"
            >
              <MdSpeed className="text-2xl text-gray-800 dark:text-white mr-1" />
              <span className="text-sm text-gray-800 dark:text-white">
                {playbackRate}x
              </span>
            </button>
          </div>

          {/* Duration and Time */}
          <div className="flex justify-between items-center w-full max-w-lg mt-2 text-gray-800 dark:text-white text-sm">
            <span>{formatTime(playedSeconds)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPage;
