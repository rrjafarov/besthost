import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const ServicesPageBanner = ({t}) => {
  return (
    <div id="servicesPageBanner">
      <div className="servicesPageBanner">
        <div className="container">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="servivesBannerLeftContent">
                <strong>{t?.servicesPageBannerTitle || "Banner Title"}</strong>
                <span>
                  

                  {t?.servicesPageBannerSubTitle || "Banner Sub Title"}
                </span>
                {/* <button>Start Now</button> */}
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="servicesBannerRightImg">
                <img src="/images/homeGridX7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="servicesBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/services">
            <strong>{t?.servicesPageTitle}</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageBanner;
