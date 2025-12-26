import React from "react";

const AboutPageBanner = ({t}) => {
  return (
    <div id="aboutPageBanner">
      <div className="aboutPageBannerContent">
        <h1>{t?.aboutBestHost || "about BestHost"}</h1>
        <p>{t?.aboutPageSubTitle || "about sub title"}</p>
      </div>
    </div>
  );
};

export default AboutPageBanner;
