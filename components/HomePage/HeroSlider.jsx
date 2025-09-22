"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Image from "next/image";
import HostIcon from "@/public/icons/hostIcon.svg";
import Link from "next/link";

const HeroSlider = ({ home, banner }) => {
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
            {banner?.data?.data.map((item) => (
              <li key={item.id} className="splide__slide">
                <div className="heroSlider">
                  <div className="heroSliderImage">
                    <Image
                      src={
                        item?.image_bg
                          ? `https://admin-besthost.onestudio.az/storage/${item.image_bg}`
                          : "/images/heroBanner.png"
                      }
                      alt="banner"
                      width={1500}
                      height={600}
                    />
                    <div className="heroSliderOverlay"></div>
                  </div>
                  <div className="container">
                    <div className="heroSliderContent">
                      <div className="heroSliderContentPlan">
                        <h4>{item?.title || "Web Hosting for Your Mission"}</h4>
                        <span className="heroSliderContentSubText">
                          {item?.banner_sub_title ||
                            "Get a Free .COM domain with Premium Plan"}
                        </span>

                        <div className="heroSliderContentHost">
                          <Link href={item.url}>
                            <span>https://</span>
                            <div className="heroSliderContentHostDomain">
                              <span>you.az</span>
                            </div>
                            <div className="heroSliderContentHostIcon">
                              <HostIcon id="host" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="heroSliderContentImage">
                        <Image
                          src={
                            item?.image
                              ? `https://admin-besthost.onestudio.az/storage/${item.image}`
                              : "/images/heroBanner.png"
                          }
                          alt="banner"
                          width={600}
                          height={600}
                        />
                      </div>
                    </div>
                  </div>
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
