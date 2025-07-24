import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const AboutPageBreadCrumbs = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/about">
            <strong>About us</strong>
          </Link>
        </div>

        <div className="aboutPageForHosting">
          <span>The Best Hosting For your Websites</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem arcu
            urna dolor sit amet, consectetursuspenet, consectetursusdisse sit in
            or sit amet, consectetursuspendisse sit in eetiam venenatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBreadCrumbs;
