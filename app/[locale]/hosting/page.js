
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
  const { data: contact } = await axiosInstance.get(`/page-data/contact`, {
    cache: "no-store",
  });
  return contact;
}

async function fetchFuturesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  const { data: contact } = await axiosInstance.get(`/page-data/futures`, {
    cache: "no-store",
  });
  return contact;
}

async function fetchBackageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  const { data: backage } = await axiosInstance.get(`/page-data/packages?per_page=100`, {
    cache: "no-store",
  });
  return backage;
}

async function fetchServicesData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: services } = await axiosInstance.get(`/page-data/services`, {
      cache: "no-store",
    });
    return services;
  } catch (error) {
    throw error;
  }
}

async function fetchCommentsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  const { data: comments } = await axiosInstance.get(`/page-data/comments`, {
    cache: "no-store",
  });
  return comments;
}

async function fetchCategoryData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  try {
    const { data: category } = await axiosInstance.get(`/page-data/categories`, {
      cache: "no-store",
    });
    return category;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata({ searchParams }) {
  const contact = await fetchTermsPageData();
  const categorySlug = searchParams?.category || null;
  const backage = await fetchBackageData();

  const rawBackageItems = backage?.data?.data ?? [];

  const filteredBySlug = rawBackageItems.filter((item) => {
    if (!categorySlug) return false;
    const cats = Array.isArray(item.category) ? item.category : [];
    return cats.some((cat) => cat.url_slug === categorySlug);
  });

  const flattenedCategories = filteredBySlug.flatMap((item) =>
    Array.isArray(item.category) ? item.category : []
  );

  const uniqueCategories = [];
  const seenCategoryIds = new Set();
  for (const cat of flattenedCategories) {
    if (cat && cat.id !== undefined && cat.id !== null) {
      const idStr = String(cat.id);
      if (!seenCategoryIds.has(idStr)) {
        seenCategoryIds.add(idStr);
        uniqueCategories.push(cat);
      }
    }
  }

  const seoItem = uniqueCategories?.[0];
  const imageUrl = seoItem?.image;
  const imageAlt = seoItem?.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: seoItem?.meta_title,
    description: seoItem?.meta_description,
    openGraph: {
      title: seoItem?.meta_title || "Gipstar",
      description: seoItem?.meta_description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl
            ? `https://admin.gipstar.az/storage${imageUrl}`
            : undefined,
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
      title: seoItem?.meta_title || "Gipstar",
      description: seoItem?.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
      images: imageUrl ? [imageUrl] : [],
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

const page = async ({ searchParams }) => {
  const contact = await fetchTermsPageData();
  const translations = await getTranslations();
  const category = await fetchCategoryData();
  const services = await fetchServicesData();
  const servicesData = services.data.data;
  const t = translations?.data;

  const categorySlug = searchParams?.category || null;

  const backage = await fetchBackageData();
  const allPackages = backage?.data?.data ?? [];

  // URL-dən gələn slug-a görə paketləri filtrləyin
  const filteredBackage = categorySlug
    ? allPackages.filter((item) => {
        const cats = Array.isArray(item.category) ? item.category : [];
        return cats.some((cat) => cat.url_slug === categorySlug);
      })
    : allPackages;

  // Futures datasını fetch et
  const futuresData = await fetchFuturesData();

  const commentsResponse = await fetchCommentsData();
  const allComments = commentsResponse?.data?.data ?? [];

  let filteredComments = [];
  if (categorySlug) {
    filteredComments = allComments.filter((c) => {
      const cats = Array.isArray(c.category) ? c.category : [];
      return cats.some((cat) => cat.url_slug === categorySlug);
    });
  } else {
    filteredComments = [];
  }

  const flattenedCategories = filteredBackage.flatMap((item) =>
    Array.isArray(item.category) ? item.category : []
  );

  const uniqueCategories = [];
  const seenCategoryIds = new Set();
  for (const cat of flattenedCategories) {
    if (cat && cat.id !== undefined && cat.id !== null) {
      const idStr = String(cat.id);
      if (!seenCategoryIds.has(idStr)) {
        seenCategoryIds.add(idStr);
        uniqueCategories.push(cat);
      }
    }
  }

  // Futures datasını category slug-a görə filter et
  const allFutures = futuresData?.data?.data ?? [];
  let filteredFutures = [];

  if (categorySlug) {
    filteredFutures = allFutures.filter((future) => {
      const cats = Array.isArray(future.category) ? future.category : [];
      return cats.some((cat) => cat.url_slug === categorySlug);
    });
  } else {
    filteredFutures = allFutures;
  }

  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header category={category} t={t} contact={contact.data} categoryData={filteredBackage} />
        <Hosting t={t} categoryData={uniqueCategories} />
      </div>
      <HostingPagePlans
        t={t}
        backage={filteredBackage}
        comments={filteredComments}
        contact={contact.data}
        categoryData={uniqueCategories}
      />
      <WordpressFeatures t={t} categoryData={uniqueCategories} futuresData={filteredFutures} />
      <HostingGrid t={t} categoryData={uniqueCategories} />
      <HostingSlider t={t} comments={filteredComments} />
      <Footer category={category} servicesData={servicesData} t={t} contact={contact.data} />
    </div>
  );
};

export default page;





























