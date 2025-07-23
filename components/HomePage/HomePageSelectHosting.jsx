"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Manat from "@/public/icons/manat.svg";

const HomePageSelectHosting = () => {
  const adjustSlideHeights = (swiper) => {
    swiper.slides.forEach((slideEl) => {
      if (slideEl.classList.contains("swiper-slide-active")) {
        slideEl.style.marginTop = "-1.5rem";
        slideEl.style.marginBottom = "-1.5rem";
      } else {
        slideEl.style.marginTop = "0";
        slideEl.style.marginBottom = "0";
      }
    });
  };

  return (
    <div style={{ overflow: "visible" }}>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20} // 2rem ≈ 32px
        speed={1500}
        onInit={adjustSlideHeights}
        onSlideChange={adjustSlideHeights}
        style={{ overflow: "visible" }}
      >
        <SwiperSlide>
          <div className="homePageHostingCard">
            <div className="homePageHostingCardTop">
              <div className="homePageHostingCardTopText">
                <span>Single Wordpress</span>
                <p>Perfect package for personal websites</p>
              </div>
              <div className="homePageHostingCardTopPriceArea">
                <div className="homePageHostingCardTopOldPrice">
                  <span>$56.99</span>
                </div>
                <div className="hostPriceLine"></div>
                <div className="homePageHostingCardTopNewPrice">
                  <span>
                    $12.99 <Manat className="topManat" />
                  </span>
                </div>
                <div className="hostPriceLine"></div>
                <div className="homePageHostingCardTopMonth">
                  <span>month</span>
                </div>
              </div>
              <div className="homePageHostingCardTopSelectPlanButton">
                <button>SELECT PLAN</button>
              </div>
            </div>
            <div className="homePageHostingCardBottom">
              <div className="homePageHostingCardSpesificationsList">
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePageSelectHosting;
