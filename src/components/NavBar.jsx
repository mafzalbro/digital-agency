import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme);
      document.body.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDarkMode ? "dark" : "light";
      setDarkMode(defaultTheme);
      document.body.classList.toggle("dark", prefersDarkMode);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = darkMode === "dark" ? "light" : "dark";
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode === "dark");
    localStorage.setItem("theme", newDarkMode);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll < 200) {
      setIsSticky(false); // Don't stick if scrolled less than 100
    } else if (currentScroll < prevScroll) {
      setIsSticky(true); // Stick if scrolling up
    } else {
      setIsSticky(false); // Unstick if scrolling down
    }
    setPrevScroll(currentScroll); // Update previous scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  return (
    <nav
      className={`bg-gray-100 translate-y-0 dark:bg-gray-900 transition-transform duration-500 ease-in-out ${
        isSticky
          ? " p-3 sticky top-0 z-50 shadow-md backdrop-blur-lg bg-blue-100 dark:bg-opacity-80 bg-opacity-80 translate-y-0"
          : " p-4 -translate-y-24"
      }`}
    >
      <motion.nav className="flex justify-between items-center transition-shadow duration-300">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold"
        >
          <Link to="/" className="text-gray-900 dark:text-gray-100">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-green-400 dark:via-blue-300 dark:to-purple-400">
              XYZ
            </span>
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              &nbsp;Company
            </span>
          </Link>
        </motion.div>
        <motion.ul
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className={`hidden md:flex space-x-6 text-gray-900 dark:text-gray-100`}
        >
          <li>
            <Link to="/graphics">Graphics Design</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </motion.ul>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode === "dark" ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-blue-500" />
            )}
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <IoCloseOutline className="text-gray-900 dark:text-gray-100" />
            ) : (
              <CiMenuFries className="text-gray-900 dark:text-gray-100" />
            )}
          </button>
        </div>
      </motion.nav>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <ul className="p-4 space-y-4 text-gray-900 dark:text-gray-100">
            <li>
              <Link to="/graphics" onClick={toggleMenu}>
                Graphics Design
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={toggleMenu}>
                Videos
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
