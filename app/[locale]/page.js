import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HomePage/HeroSlider";
import BrandBottomHero from "@/components/HomePage/BrandBottomHero";
import React from "react";
import HomePageHosting from "@/components/HomePage/HomePageHosting";

const page = () => {
  return (
    <div className="background">
      <Header />
      <HeroSlider />
      <BrandBottomHero />
      <HomePageHosting />
    </div>
  );
};

export default page;
