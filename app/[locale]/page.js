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
async function fetchBannerData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: contact } = await axiosInstance.get(`/page-data/banners`, {
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
    throw error;
  }
}


async function fetchStaticSupportData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: home } = await axiosInstance.get(`/page-data/support`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return home;
  } catch (error) {
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
    throw error;
  }
}
async function fetchCategoryData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: category } = await axiosInstance.get(`/page-data/categories`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return category;
  } catch (error) {
    throw error;
  }
}
async function fetchPartnersData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: category } = await axiosInstance.get(`/page-data/partners`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return category;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata() {
  const home = await fetchHomePageData();
  const imageUrl = home?.data.banner; // Using banner image from homepage data
  const imageAlt = home?.data.meta_title || "Besthost";
  const canonicalUrl = "https://besthost.az";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: home?.data.meta_title || "Besthost",
    description: home?.data.meta_description || "",
    openGraph: {
      title: home?.data.meta_title || "Besthost",
      description: home?.data.meta_description || "",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl ? `https://admin.besthost.az/storage${imageUrl}` : "",
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
      title: home?.data.meta_title || "Besthost",
      description: home?.data.meta_description || "Besthost",
      creator: "@besthost",
      site: "@besthost",
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}




async function getTranslations() {
  try {
    const data = axiosInstance.get("/translation-list");
    return data;
  } catch (err) {}
}

const page = async () => {
  const contact = await fetchContactPageData();
  const home = await fetchHomePageData();
  const banner = await fetchBannerData();
  const partner = await fetchPartnersData();
  const staticSupport = await fetchStaticSupportData();
  
  const services = await fetchServicesData();
  const servicesData = services.data.data;
  const backage = await fetchBackageData();
  const category = await fetchCategoryData();
  const translations = await getTranslations();
  const t = translations?.data;

  return (
    <div className="background">
      <Header t={t} contact={contact.data} />
      <HeroSlider banner={banner} home={home.data} />
      <BrandBottomHero partner={partner} t={t} />
      <HomePageHosting t={t} category={category} backage ={backage.data.data} />
      <HomePageServices t={t} servicesData={servicesData} />
      <HomePageGridCards t={t} home={home.data} />
      <HomePageLastGrid t={t} staticSupport={staticSupport} />
      <HomePageOurClients t={t} />
      <HomePageSeo t={t} home={home.data} />
      <Footer t={t} contact={contact.data} />
    </div>
  );
};

export default page;