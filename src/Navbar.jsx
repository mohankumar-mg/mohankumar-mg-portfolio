import React, { useState, useEffect } from "react";
import logo from "./assets/others/logo.svg";
import MoonLogo from "./assets/theme/moon.svg";
import BulbLogo from "./assets/theme/bulb.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar({ activeSection, toggleDarkMode, darkMode, refs }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getLinkClass = (section) => {
    const isActive = activeSection === section;
    return isActive
      ? darkMode
        ? "text-white"
        : "text-[#FF996D]"
      : darkMode
      ? "text-[#7f8c8d]"
      : "text-white";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = ref.current.getBoundingClientRect().top + window.scrollY - 80; // 65 is the height of the navbar
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div data-aos="fade-down" className="bg-[#2c3e50] dark:bg-[#282828] px-4 py-2 md:px-8 md:py-4 flex justify-between items-center h-[65px] fixed top-0 w-full z-50">
      <div
        className="flex items-center cursor-pointer relative"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="h-8 w-8 md:h-10 md:w-10 mr-2 md:mr-4"
        />
        <div>
          <h1 className="text-white text-sm md:text-lg font-bold font-serif">
            MOHANKUMAR M G
          </h1>
          <h3 className=" text-white text-xs md:text-sm font-bold italic">
            Aspiring <span className="text-[#FF996D]">SDE</span>
          </h3>
        </div>
      </div>
      <div className="flex items-center">
        {/* Hamburger menu for small screens */}
        <div className="block md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items for medium and larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className={`font-sans font-bold text-sm custom:text-xs md:text-lg ${getLinkClass(
              "about"
            )}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.educationRef)}
            className={`font-sans font-bold text-sm custom:text-xs md:text-lg ${getLinkClass(
              "education"
            )}`}
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection(refs.skillsRef)}
            className={`font-sans font-bold text-sm custom:text-xs md:text-lg ${getLinkClass(
              "skills"
            )}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(refs.projectsRef)}
            className={`font-sans font-bold text-sm custom:text-xs md:text-lg ${getLinkClass(
              "projects"
            )}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className={`font-sans font-bold text-sm custom:text-xs md:text-lg ${getLinkClass(
              "footer"
            )}`}
          >
            Contact
          </button>
          <div
            onClick={toggleDarkMode}
            className="bg-white rounded-full flex items-center justify-center h-7 w-7 md:h-8 md:w-8 cursor-pointer"
          >
            <img
              src={darkMode ? BulbLogo : MoonLogo}
              alt="DarkModeLogo"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {dropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg md:hidden">
          <button
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer w-full text-start"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.educationRef);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer w-full text-start"
          >
            Education
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.skillsRef);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer w-full text-start"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.projectsRef);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer w-full text-start"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.contactRef);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer w-full text-start"
          >
            Contact
          </button>
          <div
            onClick={() => {
              toggleDarkMode();
              setDropdownOpen(false);
            }}
            className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            Theme
            <img
              src={darkMode ? BulbLogo : MoonLogo}
              alt="DarkModeLogo"
              className="h-6 w-6 md:h-8 md:w-8 drop-shadow-xl ml-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
