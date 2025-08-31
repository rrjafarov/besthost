import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutPageBanner from "@/components/AboutPage/AboutPageBanner";
import AboutPageBreadCrumbs from "@/components/AboutPage/AboutPageBreadCrumbs";
import AboutPageWhyUs from "@/components/AboutPage/AboutPageWhyUs";
import HomePageOurClients from "@/components/HomePage/HomePageOurClients";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";

import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchAboutPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: about } = await axiosInstance.get(`/page-data/about`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return about;
  } catch (error) {
    console.error("Failed to fetch about page data", error);
    throw error;
  }
}

async function fetchClientsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: client } = await axiosInstance.get(`/page-data/clients`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return client;
  } catch (error) {
    console.error("Failed to fetch clients data", error);
    throw error;
  }
}

const page = async () => {
  const about = await fetchAboutPageData();
  const client = await fetchClientsData()

  

  return (
    <div>
      <div className="background">
        <Header />
        <AboutPageBanner />
        <AboutPageBreadCrumbs about={about} />
        <AboutPageWhyUs about={about} />
        <HomePageOurClients client={client} />
        <HomePageLastGrid />
        <Footer />
      </div>
    </div>
  );
};

export default page;
