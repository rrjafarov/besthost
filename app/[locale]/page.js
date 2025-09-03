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

import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchContactPageData() {
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

async function fetchHomePageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/page-data/homepage`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return home;
  } catch (error) {
    console.error("Failed to fetch home data", error);
    throw error;
  }
}



async function fetchBackageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: backage } = await axiosInstance.get(`/page-data/packages`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return backage;
  } catch (error) {
    console.error("Failed to fetch backage data", error);
    throw error;
  }
}


export async function generateMetadata() {
  const home = await fetchHomePageData();
  const imageUrl = home?.data.banner; // Using banner image from homepage data
  const imageAlt = home?.data.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: home?.data.meta_title || "Gipstar",
    description: home?.data.meta_description || "",
    openGraph: {
      title: home?.data.meta_title || "Gipstar",
      description: home?.data.meta_description || "",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl ? `https://admin.gipstar.az/storage${imageUrl}` : "",
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "gipstar.az",
      type: "website",
      locale: lang?.value,
    },
    twitter: {
      card: "summary_large_image",
      title: home?.data.meta_title || "Gipstar",
      description: home?.data.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = async () => {
  const contact = await fetchContactPageData();
  const home = await fetchHomePageData();
  const services = await fetchServicesData();
  const servicesData = services.data.data;
  const backage = await fetchBackageData();
  // console.log(backage.data.data.data.title, "homeresponse");

  return (
    <div className="background">
      <Header contact={contact.data} />
      <HeroSlider home={home.data} />
      <BrandBottomHero />
      <HomePageHosting />
      <HomePageServices servicesData={servicesData} />
      <HomePageGridCards home={home.data} />
      <HomePageLastGrid />
      <HomePageOurClients />
      <HomePageSeo home={home.data} />
      <Footer contact={contact.data} />
    </div>
  );
};

export default page;