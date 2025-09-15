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
    throw error;
  }
}

async function fetchServicePageInfoData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: serviceInfo } = await axiosInstance.get(`/page-data/service-page-info`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return serviceInfo;
  } catch (error) {
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

export async function generateMetadata() {
  const seo = await fetchServicePageInfoData();
  const imageUrl = seo?.data.og_image;
  const imageAlt = seo?.data.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az/services";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: seo?.data.meta_title,
    description: seo?.data.meta_description,
    openGraph: {
      title: seo?.data.meta_title || "Gipstar",
      description: seo?.data.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.gipstar.az/storage${imageUrl}`,
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
      title: seo?.data.meta_title || "Gipstar",
      description: seo?.data.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
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
  } catch (err) {
  }
}




const page = async () => {
  const services = await fetchServicesData();
  const servicesData = services.data.data;
  const contact = await fetchTermsPageData();


  const translations = await getTranslations();
  const t = translations?.data;

  return (
    <div>
      <div className="background">
        <Header contact={contact.data} />
        <ServicesPageBanner  t={t} />
        <ServicesPageCards t={t} services={servicesData} />
        {/* <HomePageLastGrid /> */}
        <Footer contact={contact.data} />
      </div>
    </div>
  );
};

export default page;