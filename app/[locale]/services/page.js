import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesPageBanner from "@/components/ServicesPage/ServicesPageBanner";
import ServicesPageCards from "@/components/ServicesPage/ServicesPageCards";
import React from "react";
import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchServicesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: services } = await axiosInstance.get(`/page-data/services`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return services;
  } catch (error) {
    console.error("Failed to fetch services data", error);
    throw error;
  }
}

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
  const services = await fetchServicesData();
  const servicesData = services.data.data;
  const contact = await fetchTermsPageData();


  return (
    <div>
      <div className="background">
        <Header contact={contact.data}  />
        <ServicesPageBanner />
        <ServicesPageCards services={servicesData} />
        <HomePageLastGrid />
        <Footer contact={contact.data} />
      </div>
    </div>
  );
};

export default page;
