"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Image from "next/image";
import HostIcon from "@/public/icons/hostIcon.svg";

const HeroSlider = () => {
  useEffect(() => {
    const splide = new Splide("#main-slider", {
      type: "loop",
      perPage: 1,
      gap: "2rem",
      autoplay: true,
      interval: 3000, 
      speed: 1500,
      pauseOnHover: true,
      pauseOnFocus: false,
      arrows: false, 
      pagination: false,
    });

    splide.mount({}); 
  }, []);
  return (
    <div>
      <div id="main-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div className="heroSlider">
                <div className="heroSliderImage">
                  <Image
                    src="/images/heroBanner.png"
                    alt="banner"
                    width={1500}
                    height={600}
                  />
                  <div className="heroSliderOverlay"></div>
                </div>
                <div className="heroSliderImage heroSliderImageMobile">
                  <Image
                    src="/images/heroBanner.png"
                    alt="banner"
                    width={1500}
                    height={600}
                  />
                  <div className="heroSliderOverlay"></div>
                </div>
                <div className="container">
                  <div className="heroSliderContent">
                    <h4>Web Hosting for Your Mission</h4>
                    <span className="heroSliderContentSubText">
                      Get a Free .COM domain with Premium Plan
                      
                    </span>
                    <div className="heroSliderContentHost">
                      <span>https://</span>
                      <div className="heroSliderContentHostDomain">
                        <span>yourdoctor.az</span>
                      </div>
                      <div className="heroSliderContentHostIcon">
                        <HostIcon id="host" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
