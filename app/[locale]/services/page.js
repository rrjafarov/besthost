import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesPageBanner from "@/components/ServicesPage/ServicesPageBanner";
import ServicesPageCards from "@/components/ServicesPage/ServicesPageCards";
import React from "react";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";

const page = () => {
  return (
    <div>
      <div className="background">
        <Header />
        <ServicesPageBanner />
        <ServicesPageCards />
        <HomePageLastGrid />

        <Footer />
      </div>
    </div>
  );
};

export default page;
