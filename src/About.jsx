import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="mb-[100px]">
      <h1 data-aos="fade-right" className="text-4xl custom:text-3xl font-extrabold text-center text-[#3C5B6F] dark:text-white">
        About Me...
      </h1>
      <br />
      <br /> 
      <p data-aos="fade-left" className="font-mono text-xl px-6 custom:text-sm dark:text-[#dcdcdc]">
        &nbsp;&nbsp;&nbsp;&nbsp;&#11088;First of All, Welcome to my Portfolio
        Website. I am Mohankumar M G. I am currently pursuing Bachelor of
        Engineering in Computer Science and Engineering at Chennai Institute of
        Technology which is located in Kundrathur, Chennai, Tamil Nadu.
      </p>
      <br />
      <br />
      <p data-aos="fade-left" className="font-mono text-xl px-6 custom:text-sm dark:text-[#dcdcdc]">
        &nbsp;&nbsp;&nbsp;&nbsp;&#11088;I am a Professional FullStack Web
        Developer. In fact, Even I learned many Tech Stacks from frontend,
        backend to database, this simple portfolio website is the first
        implemention of my learning. Truly Speaking, I am an absolute Java
        Programmer, who has a strong passion and perseverence in solving complex
        problems using Data Structures and Algorithms.
      </p>
      <br />
      <br />
      <p data-aos="fade-left" className="font-mono text-xl px-6 custom:text-sm dark:text-[#dcdcdc]">
        &nbsp;&nbsp;&nbsp;&nbsp;&#11088;I have a strong passion in learning and
        implementing ever growing technologies in an efficient way which change
        our society even more better in all aspects. I ensure my contribution to
        the society's wealth through this Design and Development of Software.
      </p>
      <br />
      <br />
      <p data-aos="fade-left" className="font-mono text-xl px-6 custom:text-sm dark:text-[#dcdcdc]">
        &nbsp;&nbsp;&nbsp;&nbsp;&#11088;I have given a long intro about me😁.
        You can download my Resume below...👇
      </p>
      <br />
      <br />
      <div className="mt-8 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1o25e9UJEt2eSxDQdW95IJg1F928miAB8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button data-aos="fade-up" className="flex items-center text-center text-white px-4 py-2 bg-[#2c3e50] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF996D] duration-300">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </button>
      </a>
      </div>
    </div>
  );
}

export default About;
