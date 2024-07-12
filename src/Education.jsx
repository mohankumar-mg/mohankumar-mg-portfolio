import React, { useState, useEffect } from "react";
import school1Image from "./assets/education/school1.png";
import school2Image from "./assets/education/school2.png";
import school3Image from "./assets/education/school3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationComponent = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const academicDetails = {
    sslc: {
      label: "SSLC",
      details: [
        "School: ",
        "Government Higher Secondary School Vanganur",
        "Percentage Scored: ",
        "98.6%",
        "Year of Completion: ",
        "2020",
      ],
      image: school1Image,
    },
    hsc: {
      label: "HSC",
      details: [
        "School: ",
        "Sri Divya Chaitanya Matriculation Higher Seconday School",
        "Percentage Scored: ",
        "95.83%",
        "Year of Completion: ",
        "2022",
      ],
      image: school2Image,
    },
    ug: {
      label: "UG",
      details: [
        "College: ",
        "Chennai Institute of Technology",
        "CGPA: ",
        "8.93 (Scale of 10)",
        "Year of Completion: ",
        "2026",
        "Program: ",
        "B.E. Computer Science and Engineering",
      ],
      image: school3Image,
    },
  };

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
  };

  const handleExitClick = () => {
    setSelectedHouse(null);
  };

  const isCollege =
    selectedHouse && academicDetails[selectedHouse].details.length > 6;

  return (
    <div className={`mb-[180px] custom:mb-[30px] `}>
      <h1 data-aos="fade-right" className="text-4xl custom:text-3xl font-extrabold text-center text-[#3C5B6F] dark:text-white">
        Education Details...
      </h1>
      <br />
      <br />
      <div
        className={`w-full h-[300px] ${
          selectedHouse == null ? "custom:h-[200px]" : "custom:h-[400px]"
        } flex items-start justify-center `}
      >
        {selectedHouse ? (
          <div data-aos="zoom-in" className="relative w-full h-full flex items-start">
            <div className="flex flex-col items-center justify-center p-4">
              <img
                data-aos="fade-up"
                src={academicDetails[selectedHouse].image}
                alt={academicDetails[selectedHouse].label}
                className="w-[250px] h-[250px] custom:w-[150px] custom:h-[100px]"
              />
              <label data-aos="fade-right" className="text-center font-bold mt-2 dark:text-[#dcdcdc]">
                {academicDetails[selectedHouse].label}
              </label>
            </div>
            <div data-aos="fade-down" className="flex flex-col justify-center items-center mx-8 custom:mx-1 mt-[24px]">
              <div className="w-5 h-5 rounded-full bg-[#915eff] " />
              <div className="w-1 h-[300px] custom:h-[230px] bg-gradient-to-b from-violet-500 " />
            </div>
            <div data-aos="fade-left" className=" flex flex-col items-start justify-start h-[280px] custom:mb-[20px]">
              <h3 className="font-extrabold text-lg custom:text-sm custom:pt-[50px] text-[#915eff]">
                <span className="text-[#915eff]">
                  {academicDetails[selectedHouse].label}
                </span>{" "}
                Details
              </h3>
              <br />
              <p className="text-lg custom:text-sm italic font-bold text-[#803D3B]">
                <span className="font-bold text-[#2c3e50] dark:text-[#dcdcdc]">
                  {academicDetails[selectedHouse].details[0]}
                </span>
                {academicDetails[selectedHouse].details[1]}
              </p>
              <br />
              {isCollege && (
                <>
                  <p className="text-lg custom:text-sm italic font-bold text-[#803D3B] ">
                    <span className="font-bold text-[#2c3e50] dark:text-[#dcdcdc]">
                      {academicDetails[selectedHouse].details[6]}
                    </span>
                    {academicDetails[selectedHouse].details[7]}
                  </p>
                  <br />
                </>
              )}
              <p className="text-lg custom:text-sm italic font-bold text-[#803D3B]">
                <span className="font-bold text-[#2c3e50] dark:text-[#dcdcdc]">
                  {academicDetails[selectedHouse].details[2]}
                </span>
                {academicDetails[selectedHouse].details[3]}
              </p>
              <br />
              <p className="text-lg custom:text-sm italic font-bold text-[#803D3B] ">
                <span className="font-bold text-[#2c3e50] dark:text-[#dcdcdc]">
                  {academicDetails[selectedHouse].details[4]}
                </span>
                {academicDetails[selectedHouse].details[5]}
              </p>
            </div>
            <button
             data-aos="fade-up"
              onClick={handleExitClick}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
              className="absolute bottom-4 right-[92px] custom:right-[30px] bg-red-500 text-white text-lg custom:text-sm  rounded-full  w-20 h-12 custom:w-[65px] custom:h-[35px] p-2 pt-1.3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              {isHover && "Exit"} →
            </button>
          </div>
        ) : (
          <div className="relative flex items-center justify-around w-full">
            {Object.keys(academicDetails).map((house) => (
              <div data-aos="fade-left" key={house} className="flex flex-col items-center ">
                <label className="mb-4 font-bold dark:text-[#dcdcdc]">
                  {academicDetails[house].label}
                </label>
                <div
                  className="cursor-pointer flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-2xl drop-shadow-xl"
                  onClick={() => handleHouseClick(house)}
                >
                  <img
                    src={academicDetails[house].image}
                    alt={academicDetails[house].label}
                    className="w-[250px] h-[250px] rounded-full custom:w-[100px] custom:h-[100px]"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationComponent;
