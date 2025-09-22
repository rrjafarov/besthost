
"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Image from "next/image";

const HeroSlider = ({ home, partner }) => {
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
    <div className="container">
      <div id="main-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {partner?.data?.data.map((item) => (
              <li key={item.id} className="splide__slide">
                <div className="partnersImageLogo">
                  <Image
                    width={500}
                    height={500}
                    alt="brand"
                    src={`https://admin-besthost.onestudio.az/storage/${item.logo}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
