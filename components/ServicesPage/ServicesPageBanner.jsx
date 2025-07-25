import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const ServicesPageBanner = () => {
  return (
    <div id="servicesPageBanner">
      <div className="servicesPageBanner">
        <div className="container">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="servivesBannerLeftContent">
                <strong>Everything you need for WordPress Hosting</strong>
                <span>
                  Quick and secure, guaranteed 99.99% uptime, feature-rich
                  WordPress hosting solution
                </span>
                <button>Start Now</button>
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
            <strong>Services</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageBanner;
