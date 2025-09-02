import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hosting from "@/components/HostingPage/Hosting";
import HostingPagePlans from "@/components/HostingPage/HostingPagePlans";
import WordpressFeatures from "@/components/HostingPage/WordpressFeatures";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";
import HostingGrid from "@/components/HostingPage/HostingGrid";
import HostingSlider from "@/components/HostingPage/HostingSlider";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchTermsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: contact } = await axiosInstance.get(`/page-data/contact`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return contact;
  } catch (error) {
    throw error;
  }
}

const page = async () => {
  const contact = await fetchTermsPageData();
  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header contact={contact.data}  />
        <Hosting />
      </div>
      <HostingPagePlans />
      <WordpressFeatures />
      <HostingGrid />
      <HostingSlider />
      <HomePageLastGrid />
      <Footer  contact={contact.data}  />
    </div>
  );
};

export default page;
