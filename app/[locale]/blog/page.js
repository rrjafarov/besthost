import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlogPage from "@/components/BlogPage/BlogPage";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchBlogsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: blogs } = await axiosInstance.get(`/page-data/blogs`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return blogs;
  } catch (error) {
    throw error;
  }
}

async function fetchBlogPageInfoData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: blogInfo } = await axiosInstance.get(`/page-data/blog-page-info`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return blogInfo;
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
  const seo = await fetchBlogPageInfoData();
  const imageUrl = seo?.data.og_image;
  const imageAlt = seo?.data.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az/blogs";
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
  const blogs = await fetchBlogsData();
  const blogsData = blogs.data.data;
  const contact = await fetchTermsPageData();


  const translations = await getTranslations();
  const t = translations?.data;

  return (
    <div>
      <Header t={t} contact={contact.data} />
      <div className="background">
        <BlogPage t={t} blogsData={blogsData} />
        <Footer t={t} contact={contact.data} />
      </div>
    </div>
  );
};

export default page;
