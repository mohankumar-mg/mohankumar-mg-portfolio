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
      title: "Grocessary ordering Website",
      url: "https://mohankumar-mg.github.io/Shopping_Mall_Project/",
    },
  ];

  return (
    <div className="mx-[20%] h-[700px] w-[60%] custom:w-[80%] custom:mx-[10%] drop-shadow-2xl">
      <Slider {...settings}>
        <SlidingCard img={slides[0].img} imgtxt={slides[0].imgtxt} title={slides[0].title} url={slides[0].url} />
        <SlidingCard img={slides[1].img} imgtxt={slides[1].imgtxt} title={slides[1].title} url={slides[1].url} />
        <SlidingCard img={slides[2].img} imgtxt={slides[2].imgtxt} title={slides[2].title} url={slides[2].url} />
      </Slider>
    </div>
  );
};

export default CustomSlider;
