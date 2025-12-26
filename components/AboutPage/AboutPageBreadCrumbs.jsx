import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const AboutPageBreadCrumbs = ({t, about}) => {
  return (
    <div>
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/about">
            <strong>{t?.aboutPageTitle || "About us"}</strong>
          </Link>
        </div>

        <div className="aboutPageForHosting">
          <h2>{about?.data?.title_1}</h2>
           <div dangerouslySetInnerHTML={{ __html: about?.data?.content_1 }}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBreadCrumbs;
