import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/arrow.svg";


const ServicesDetailPage = () => {
  return (
    <div id="servicesDetailPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/services">
            <strong>Services</strong>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="#">
            <strong>Lorem ipsumm</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailPage;
