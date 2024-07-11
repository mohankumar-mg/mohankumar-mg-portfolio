import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Profile2 from "./assets/profile/MY_Photo_2.jpg";
import "./styles.css";

function Intro({ darkMode }) {
  const [headingTyped, setHeadingTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadingTyped(true);
    }, 3000); // Adjusting this duration for match the typewriting animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-[120px] pl-2 lg:pl-4 custom:mb-[280px]">
      <div className="flex justify-center items-center">
        <img
          src={darkMode ? Profile2 : Profile2}
          alt="Profile image"
          className="h-[80px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] rounded-full animate-spin-slow custom:pr-[20px]"
        />

        <div className="md:ml-20 ">
          <h1 className="font-bold text-base lg:text-4xl xl:text-5xl dark:text-white text-[#3C5B6F] merriweather-bold-italic ">
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
        <br />
        <br /><br />
        <br /><br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Intro;
