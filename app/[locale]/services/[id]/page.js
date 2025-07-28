import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesDetailPage from "@/components/ServicesPage/ServicesDetailPage";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="background">
        <ServicesDetailPage />
        <Footer />
      </div>
    </div>
  );
};

export default page;
