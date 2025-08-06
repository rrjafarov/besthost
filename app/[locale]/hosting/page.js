import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hosting from "@/components/HostingPage/Hosting";
import HostingPagePlans from "@/components/HostingPage/HostingPagePlans";
import WordpressFeatures from "@/components/HostingPage/WordpressFeatures";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";
import HostingGrid from "@/components/HostingPage/HostingGrid";
import HostingSlider from "@/components/HostingPage/HostingSlider";

const page = () => {
  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header />
        <Hosting />
      </div>
      <HostingPagePlans />
      <WordpressFeatures />
      <HostingGrid />
      <HostingSlider />
      <HomePageLastGrid />
      <Footer />
    </div>
  );
};

export default page;
