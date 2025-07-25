import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlogPage from "@/components/BlogPage/BlogPage";

const page = () => {
  return (
    <div>
      <Header />
      <div className="background">
        <BlogPage />
        <Footer />
      </div>
    </div>
  );
};

export default page;
