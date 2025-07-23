import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HomePage/HeroSlider";
import BrandBottomHero from "@/components/HomePage/BrandBottomHero";
import React from "react";
import HomePageHosting from "@/components/HomePage/HomePageHosting";
import HomePageServices from "@/components/HomePage/HomePageServices";

const page = () => {
  return (
    <div className="background">
      <Header />
      <HeroSlider />
      <BrandBottomHero />
      <HomePageHosting />
      <HomePageServices />
    </div>
  );
};

export default page;
