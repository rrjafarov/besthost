import React from "react";

const AboutPageBanner = ({t}) => {
  return (
    <div id="aboutPageBanner">
      <div className="aboutPageBannerContent">
        <span>{t?.aboutBestHost || "about BestHost"}</span>
        <p>{t?.aboutPageSubTitle || "about sub title"}</p>
      </div>
    </div>
  );
};

export default AboutPageBanner;
