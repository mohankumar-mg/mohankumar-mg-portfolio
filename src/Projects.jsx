import React from "react";
import Slider from "./Slider";
import CustomSlider from "./CustomSlider";

const Projects = () => {
  return (
    <div className="mt-[45px] mb-[100px] custom:h-[300px] h-[600px]">
      <h1 className="font-extrabold text-4xl custom:text-3xl pl-3 text-[#3C5B6F] pb-[30px] text-center dark:text-[#dcdcdc]">
        Projects
      </h1>
      <CustomSlider />
    </div>
  );
};

export default Projects;
