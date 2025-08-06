import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const Hosting = () => {
  return (
    <div className="hostingPageBannerVectora">
      <div className="container">
        <div className="hostingPageBannerBlock">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="hostingPageBannerBlockLeft">
                <span>Everything you need for WordPress Hosting</span>
                <p>
                  Quick and secure, guaranteed 99.99% uptime, feature-rich
                  WordPress hosting solution
                </p>
                <button>Start Now</button>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="hostingPageBannerBlockRight">
                <img src="/images/hostingPageBanner.png" alt="" />
              </div>
            </div>
          </div>
          <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/about">
            <strong>Hosting</strong>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
