import React, { useEffect } from "react";
import CustomSlider from "./CustomSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Refresh AOS on scroll to keep the animations updated
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-aos="fade-left" className="mt-[45px] mb-[100px] custom:h-[300px] h-[600px]">
      <h1 className="font-extrabold text-4xl custom:text-3xl pl-3 text-[#3C5B6F] pb-[30px] text-center dark:text-[#dcdcdc]">
        Projects
      </h1>
      <CustomSlider />
    </div>
  );
};

export default Projects;
