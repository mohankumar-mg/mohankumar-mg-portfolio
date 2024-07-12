import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalTravels from "./assets/others/global_travels.png";
import FinanceTracker from "./assets/others/finance_tracker.png";
import ShoppingMall from "./assets/others/shopping_mall.png";
import SlidingCard from "./SlidingCard";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

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
      title: "Grocery ordering Website",
      url: "https://mohankumar-mg.github.io/Shopping_Mall_Project/",
    },
  ];

  return (
    <div className="mx-[20%] h-[700px] w-[60%] custom:w-[80%] custom:mx-[10%] drop-shadow-2xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <SlidingCard img={slide.img} imgtxt={slide.imgtxt} title={slide.title} url={slide.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
