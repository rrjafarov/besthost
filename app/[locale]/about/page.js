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
    throw error;
  }
}

export async function generateMetadata() {
  const seo = await fetchAboutPageData();
  const imageUrl = seo?.data.og_image;
  const imageAlt = seo?.data.meta_title || "besthost";
  const canonicalUrl = "https://besthost.az";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  return {
    title: seo?.data.meta_title,
    description: seo?.data.meta_description,
    // icons: {
    //   icon: "https://adentta.az/favicon.ico.svg",
    // },
    openGraph: {
      title: seo?.data.meta_title || "besthost",
      description: seo?.data.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: `https://admin.besthost.az/storage${imageUrl}`,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      site_name: "besthost.az",
      type: "website",
      locale: lang?.value,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.data.meta_title || "besthost",
      description: seo?.data.meta_description || "besthost",
      creator: "@besthost",
      site: "@bsthost",
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
  const translations = await getTranslations();
  const t = translations?.data;
  const about = await fetchAboutPageData();
  const client = await fetchClientsData();
  const contact = await fetchTermsPageData();

  return (
    <div>
      <div className="background">
        <Header contact={contact.data} />
        <AboutPageBanner t={t} />
        <AboutPageBreadCrumbs t={t} about={about} />
        <AboutPageWhyUs t={t} about={about} />
        <HomePageOurClients t={t} client={client} />
        {/* <HomePageLastGrid /> */}
        <Footer contact={contact.data} />
      </div>
    </div>
  );
};

export default page;
