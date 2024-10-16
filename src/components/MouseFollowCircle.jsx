import { useEffect, useState } from "react";

const MouseFollowCircle = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();

    // Mouse move event handler
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Styles for the moving circle
  const circleStyle = {
    position: "fixed",
    zIndex: 2000,
    left: `${mousePos.x}px`,
    top: `${mousePos.y}px`,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 255, 1)", // Red with 50% opacity
    // mixBlendMode: 'multiply',
    transform: "translate(-50%, -50%)", // Center the circle on the cursor
    pointerEvents: "none", // Make sure it does not interfere with mouse events
  };

  return !isTouchDevice && <div style={circleStyle} />;
};

export default MouseFollowCircle;
