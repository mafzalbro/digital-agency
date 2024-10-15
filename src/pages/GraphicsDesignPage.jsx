import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingBox from "../components/graphics-page/RotatingBox";
import AnimatedSphere from "../components/graphics-page/AnimatedSphere";
import AnimatedTorus from "../components/graphics-page/AnimatedTorus";
import Ground from "../components/graphics-page/Ground";
import TextSlide from "../components/graphics-page/TextSlide";
import PDFSection from "../components/graphics-page/PDFSection";
import HeroTitle from "../components/HeroTitle";

const GraphicsDesignPage = () => {
  const [numPages1, setNumPages1] = useState(null);
  const [numPages2, setNumPages2] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is enabled
    const checkDarkMode = () => {
      const darkModeEnabled = document.body.classList.contains("dark");
      setIsDarkMode(darkModeEnabled);
    };

    // Initialize dark mode state
    checkDarkMode();

    // Create a MutationObserver to watch for class changes on the body element
    const observer = new MutationObserver(checkDarkMode);

    // Start observing the body element for attribute changes (like class changes)
    observer.observe(document.body, {
      attributes: true, // Look for changes to attributes
      attributeFilter: ["class"], // Specifically watch the 'class' attribute
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  function onDocumentLoadSuccess1({ numPages }) {
    setNumPages1(numPages);
  }

  function onDocumentLoadSuccess2({ numPages }) {
    setNumPages2(numPages);
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-2 md:p-4">
      <HeroTitle>Graphics Design</HeroTitle>

      <div className="flex md:gap-10 w-[80vw] flex-col md:flex-row mb-10">
        {/* Interactive 3D Canvas Section */}
        <div className="w-[80vw] md:w-full md:my-6 mb-20">
          <Canvas style={{ height: "180px" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Ground />
            <RotatingBox
              position={[-4, 0, 0]}
              color="orange"
              isDarkMode={isDarkMode}
            />{" "}
            {/* Shifted more to the left */}
            <AnimatedSphere position={[0, 0, 0]} isDarkMode={isDarkMode} />{" "}
            {/* Center */}
            <AnimatedTorus position={[4, 0, 0]} isDarkMode={isDarkMode} />{" "}
            {/* Shifted more to the right */}
          </Canvas>
        </div>

        {/* Text Slide Section */}
        <TextSlide />
      </div>

      {/* PDF Sections */}
      <div className="flex flex-col lg:flex-row justify-center gap-2 w-full overflow-auto mt-6">
        <div className="lg:max-w-[48%] flex-1">
          <PDFSection
            file="/cv-template.pdf"
            numPages={numPages1}
            onDocumentLoadSuccess={onDocumentLoadSuccess1}
          />
        </div>

        <div className="lg:max-w-[48%] flex-1">
          <PDFSection
            file="/graphic.pdf"
            numPages={numPages2}
            onDocumentLoadSuccess={onDocumentLoadSuccess2}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesignPage;
