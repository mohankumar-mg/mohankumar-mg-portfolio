import React from "react";

function SlidingCard(props) {
  return (
    <div>
      <img
        src={props.img}
        alt={props.imgtxt}
        className="w-full h-auto rounded-2xl"
      />

      <div className="flex flex-row justify-around items-center bg-gray-200 h-[60px] w-[60%] custom:w-[85%] rounded-xl mx-[20%] custom:mx-[7.5%] mt-[10px]">
        <h3 className="py-[4px] custom:text-sm custom:pl-[5px]">{props.title}</h3>
        <a
          href={props.url}
          target="_blank"
        >
          <button className="flex items-center text-center text-white px-4 py-2 bg-[#2c3e50] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF996D] duration-300 custom:text-sm">
            View →
          </button>
        </a>
      </div>
    </div>
  );
}

export default SlidingCard;
