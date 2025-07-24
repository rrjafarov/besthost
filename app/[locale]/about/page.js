import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutPageBanner from "@/components/AboutPage/AboutPageBanner";
import AboutPageBreadCrumbs from "@/components/AboutPage/AboutPageBreadCrumbs";
const page = () => {
  return (
    <div>
      <div className="background">
        <Header />
        <AboutPageBanner />
        <AboutPageBreadCrumbs />
        <Footer />
      </div>
    </div>
  );
};

export default page;
