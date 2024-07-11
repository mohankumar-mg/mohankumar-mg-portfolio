import React, { useState, useEffect } from "react";
import SlidingCard from "./SlidingCard";
import GlobalTravels from "./assets/others/global_travels.png";
import FinanceTracker from "./assets/others/finance_tracker.png";
import ShoppingMall from "./assets/others/shopping_mall.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      img: GlobalTravels,
      imgtxt: "global_travels",
      title: "Tourism Ticket Booking Website",
      url: "https://mohankumar-mg.github.io/Global_Travels/",
    },
    {
      img: FinanceTracker,
      imgtxt: "finance_tracker",
      title: "Income and Expenditure Tracking Website",
      url: "https://mohankumar-mg.github.io/Finance_Tracker/",
    },
    {
      img: ShoppingMall,
      imgtxt: "shopping_mall",
      title: "Grocessary ordering Website",
      url: "https://mohankumar-mg.github.io/Shopping_Mall_Project/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div className="max-w-[1000px] h-[480px] w-full m-auto py-16 px-4 relative group drop-shadow-2xl">
      <SlidingCard
        img={slides[currentIndex].img}
        imgtxt={slides[currentIndex].imgtxt}
        title={slides[currentIndex].title}
        url ={slides[currentIndex].url}
      />
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
