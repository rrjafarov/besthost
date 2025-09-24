import React from "react";
import Globe from "@/public/icons/globe.svg";
import Statistic from "@/public/icons/statistic.svg";
import ServicePath from "@/public/icons/sevicePath.svg";
import Image from "next/image";

const AboutPageWhyUs = ({ about, t }) => {
  return (
    <div id="aboutPageWhyUs">
      <div className="container">
        <div className="aboutPageWhyUsItem">
          <span>{t?.aboutWhyUS || "Why us?"}</span>
          <div className="aboutPageWhyUsCards">
            <div className="row">
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img
                      src={`https://admin-besthost.onestudio.az/storage/${about?.data?.statistica_1_icon}`}
                      alt="de"
                    />
                  </div>
                  <strong>{about?.data?.statistica_1}</strong>
                  <p>{about?.data?.statistica_1_title}</p>
                </div>
              </div>
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img
                      src={`https://admin-besthost.onestudio.az/storage/${about?.data?.statistica_2_icon}`}
                      alt="de"
                    />
                  </div>
                  <strong>{about?.data?.statistica_2}</strong>
                  <p>{about?.data?.statistica_3_title}</p>
                </div>
              </div>
              <div className="xl-4 lg-4 md-6 sm-12">
                <div className="aboutPageWhyUsCard">
                  <div className="aboutPageWhyUsCardIMG">
                    <img
                      src={`https://admin-besthost.onestudio.az/storage/${about?.data?.statistica_3_icon}`}
                      alt="de"
                    />
                  </div>
                  <strong>{about?.data?.statistica_3}</strong>
                  <p>{about?.data?.statistica_3_title}</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutPageMiddleGrid">
          <div className="aboutPageMiddleGridItem">
            <span>{about?.data?.title_2}</span>
            <p>{about?.data?.sub_title}</p>
          </div>
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12" id="aboutMidleGrid">
              <div className="aboutPageMiddleGridLeft">
                <div
                  dangerouslySetInnerHTML={{ __html: about?.data?.content_2 }}
                ></div>
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
