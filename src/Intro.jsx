import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Profile2 from "./assets/profile/MY_Photo_2.jpg";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Intro({ darkMode }) {
  const [headingTyped, setHeadingTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadingTyped(true);
    }, 3000); // Adjusting this duration for match the typewriting animation duration
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="pt-[120px] pl-2 lg:pl-4 custom:mb-[230px]">
      <div className="flex justify-center items-center lg:flex-row custom:flex-col custom:justify-center custom:items-center mb-[330px]">
        <img
          data-aos="fade-right"
          src={darkMode ? Profile2 : Profile2}
          alt="Profile image"
          className="custom:h-[160px] custom:w-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] rounded-full animate-spin-slow custom:pr-[20px] custom:mt-[130px] custom:mb-[20px]"
        />
        <div className="md:ml-20">
          <h1 className="font-bold text-base lg:text-4xl xl:text-5xl dark:text-white text-[#3C5B6F] merriweather-bold-italic custom:text-md">
            <span className="typewriter-text">
              Hi! I am <span>MOHANKUMAR M G...</span>
            </span>
            <br />
            <span
              className={classNames(
                "m-2 lobster-regular font-semibold text-xs lg:text-2xl xl:text-3xl dark:text-pink-400 text-[#803D3B] subtitle",
                {
                  "subtitle-visible": headingTyped,
                }
              )}
            >
              <span className="dark:text-white">An &nbsp;</span>
              Aspiring Software Development Engineer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Intro;
