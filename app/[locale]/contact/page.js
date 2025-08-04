import Contact from "@/components/ContactPage/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="background">
        <Header />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default page;
