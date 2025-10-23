import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const Hosting = ({ categoryData, t }) => {
  return (
    <div className="hostingPageBannerVectora">
      <div className="container">
        <div className="hostingPageBannerBlock">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="hostingPageBannerBlockLeft">
                <h2>{categoryData[0].title}</h2>
                <p>{categoryData[0].sub_title}</p>
                <Link href="#start">
                  <button>{t?.startnow}</button>
                </Link>
              </div>
            </div>
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="hostingPageBannerBlockRight">
                <img src="/images/homeGridX7.png" alt="" />
              </div>
            </div>
          </div>
          <div className="aboutPageBreadCrumbs">
            <Link href="/">
              <span>BestHost</span>
            </Link>
            <Arrow className="breadCrumbsArrow" />
            <Link href="/about">
              <strong>{t?.hostingPageTitle}</strong>
            </Link>
          </div>
          <section id="start"></section>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
