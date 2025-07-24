import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutPageBanner from "@/components/AboutPage/AboutPageBanner";
import AboutPageBreadCrumbs from "@/components/AboutPage/AboutPageBreadCrumbs";
import AboutPageWhyUs from "@/components/AboutPage/AboutPageWhyUs";
import HomePageOurClients from "@/components/HomePage/HomePageOurClients";

const page = () => {
  return (
    <div>
      <div className="background">
        <Header />
        <AboutPageBanner />
        <AboutPageBreadCrumbs />
        <AboutPageWhyUs />
        <HomePageOurClients />

        <Footer />
      </div>
    </div>
  );
};

export default page;
