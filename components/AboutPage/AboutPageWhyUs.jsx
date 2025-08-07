import React from "react";
import Globe from "@/public/icons/globe.svg";
import Statistic from "@/public/icons/statistic.svg";
import ServicePath from "@/public/icons/sevicePath.svg";
import Image from "next/image";

const AboutPageWhyUs = () => {
  return (
    <div id="aboutPageWhyUs">
      <div className="container">
        <div className="aboutPageWhyUsItem">
          <span>Why us?</span>
          <div className="aboutPageWhyUsCards">
            <div className="row">
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img src="/icons/globe.svg" alt="de" />
                  </div>
                  <strong>15K</strong>
                  <p>New websites installed on average</p>
                </div>
              </div>
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img src="/icons/statistic.svg" alt="de" />
                  </div>
                  <strong>15K</strong>
                  <p>New websites installed on average</p>
                </div>
              </div>
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img src="/icons/sevicePath.svg" alt="de" />
                  </div>
                  <strong>15K</strong>
                  <p>New websites installed on average</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutPageMiddleGrid">
          <div className="aboutPageMiddleGridItem">
            <span>BestHost around the world</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12" id="aboutMidleGrid"   >
              <div className="aboutPageMiddleGridLeft">
                <p>
                  We were bootstrapped in 2004 and we’ve been on an epic ride
                  ever since. We had a simple idea to let you create a website
                  for FREE. With no-limits PHP, MySQL, cPanel & no ads -
                  complete freedom to express yourself online. We were
                  bootstrapped in 2004 and we’ve been on an epic ride ever
                  since. We had a simple idea to let you create a website for
                  FREE. With no-limits PHP, MySQL, cPanel & no ads - complete
                  freedom to express yourself online.
                </p>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12 " id="aboutMidleGrid">
              <div className="aboutPageMiddleGridRight">
                <div className="aboutPageMiddleGridRightItem">
                  <Image
                    src="/images/homeGridX7.png"
                    alt="grid"
                    width={550}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageWhyUs;
