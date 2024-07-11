import React from "react";
import sunFlower from './assets/sun_flower.jpg';
import DarkModeToggle from "./DarkModeToggle";

function Card() {
  return (
    <div className="w-60 h-80 border-4 border-indigo-600 rounded-2xl bg-white dark:bg-gray-900 relative">
        <h1 className="text-center font-extrabold pt-2 dark:text-white">Title</h1>
        
        <div className="flex justify-center py-[20px]">
            <img src={sunFlower} alt="image"  className="border border-orange-600 h-[70px] w-[70px] rounded-full"/>
        </div>

        <p className="text-center dark:text-white"><span className="text-green-600 font-bold text-xl">some</span> text...</p>

        <DarkModeToggle />
    </div>
  );
}

export default Card;
