import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HomePage/HeroSlider";
import BrandBottomHero from "@/components/HomePage/BrandBottomHero";
import React from "react";
import HomePageHosting from "@/components/HomePage/HomePageHosting";
import HomePageServices from "@/components/HomePage/HomePageServices";
import HomePageGridCards from "@/components/HomePage/HomePageGridCards";
import HomePageOurClients from "@/components/HomePage/HomePageOurClients";
import HomePageSeo from "@/components/HomePage/HomePageSeo";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";

const page = () => {
  return (
    <div className="background">
      <Header />
      <HeroSlider />
      <BrandBottomHero />
      <HomePageHosting />
      <HomePageServices />
      <HomePageGridCards />
      <HomePageLastGrid />
      <HomePageOurClients />
      <HomePageSeo />
      <Footer />
    </div>
  );
};

export default page;
