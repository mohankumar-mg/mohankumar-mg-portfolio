import React from "react";
import TelePhone from "./assets/others/telephone.svg";
import Email from "./assets/others/email.svg";
import LinkedIn from "./assets/others/linked_in.svg";
import GitHub from "./assets/others/github.svg";
import LeetCode from "./assets/others/leetcode.svg";

function Footer() {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <div className="w-full h-[320px] bg-gray-200 mt-10 rounded-t-xl">
      <h3 className="text-xl font-sans font-bold text-center pt-[20px] drop-shadow-2xl">
        Contact me
      </h3>

      <div className="flex justify-between mt-[20px] items-center">
        <div className="ml-[40px] custom:ml-[20px] mt-[20px] custom:w-[150px]">
          <div className="flex justify-start items-center pb-[20px]">
            <img
              src={TelePhone}
              alt="telephone"
              className="w-[20px] h-[20px] pr-[4px] mr-[6px]"
            />
            <h3 className="font-bold custom:text-sm">1111111111</h3>
          </div>

          <div className="flex justify-start items-center">
            <img
              src={Email}
              alt="email"
              className="w-[20px] h-[20px] mr-[6px]"
            />
            <h3 className="font-bold custom:text-sm italic">mamo@gmail.com</h3>
          </div>
        </div>

        <div className="flex justify-start h-[50px] custom:h-[40px] mr-[40px] custom:mr-[20px] mt-[10px] custom:w-[160px]">
          <div className="flex items-center justify-center text-center bg-[#fff] w-[150px] z-10">
            <h3 className="custom:text-sm italic">Click to Text me...</h3>
          </div>
          <a href="https://forms.gle/qhBRuvE2exKRq53Y9" target="_blank" className="z-10">
            <button className="flex items-center custom:text-xs text-center text-white px-4 py-2 h-[51px] custom:h-[40px] bg-green-600 rounded-r-lg hover:opacity-50">
              Go →
            </button>
          </a>
        </div>
      </div>

      <div className="flex justify-center custom:items-end mt-[30px] custom:mt-[40px] custom:mb-[30px]">
        <a
          href="https://www.linkedin.com/in/mohankumar-m-g-101132257/"
          target="_blank"
          className="z-10"
        >
          <img
            src={LinkedIn}
            alt="linkedin"
            className="h-[40px] w-[40px] mr-[20px] hover:drop-shadow-2xl cursor-pointer shadow-lg hover:shadow-gray-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full"
          />
        </a>
        <a href="https://github.com/mohankumar-mg" target="_blank" className="z-10">
          <img
            src={GitHub}
            alt="github"
            className="h-[40px] w-[40px] mr-[20px] hover:drop-shadow-2xl cursor-pointer shadow-lg hover:shadow-gray-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full"
          />
        </a>
        <a href="https://leetcode.com/u/Mohankumar_M_G/" target="_blank" className="z-10">
          <img
            src={LeetCode}
            alt="leetcode"
            className="h-[40px] w-[40px] hover:drop-shadow-2xl cursor-pointer shadow-lg hover:shadow-gray-500/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full"
          />
        </a>
      </div>
      <div className="mt-[60px]">
        <h3 className="text-center font-sm custom:text-xs">
          &copy; {getCurrentYear()} Mohankumar M G | All rights reserved.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
