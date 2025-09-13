// import React from "react";
// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import Hosting from "@/components/HostingPage/Hosting";
// import HostingPagePlans from "@/components/HostingPage/HostingPagePlans";
// import WordpressFeatures from "@/components/HostingPage/WordpressFeatures";
// import HomePageLastGrid from "@/components/HomePage/HomePageLastGrid";
// import HostingGrid from "@/components/HostingPage/HostingGrid";
// import HostingSlider from "@/components/HostingPage/HostingSlider";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

// async function fetchTermsPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   const { data: contact } = await axiosInstance.get(`/page-data/contact`, {
//     cache: "no-store",
//   });
//   return contact;
// }

// async function fetchBackageData(categoryId) {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   let url = `/page-data/packages?per_page=12`;
//   if (categoryId) {
//     url += `&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${encodeURIComponent(categoryId)}`;
//   }
//   const { data: backage } = await axiosInstance.get(url, {
//     cache: "no-store",
//   });
//   return backage;
// }

// async function fetchCommentsData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   const { data: comments } = await axiosInstance.get(`/page-data/comments`, {
//     cache: "no-store",
//   });
//   return comments;
// }

// const page = async ({ searchParams }) => {
//   const contact = await fetchTermsPageData();

//   const rawCategoryParam =
//     searchParams?.["filters[0][value][]"] ||
//     searchParams?.["filters[0][value]"] ||
//     searchParams?.category ||
//     null;

//   const categoryId = Array.isArray(rawCategoryParam)
//     ? rawCategoryParam[0]
//     : rawCategoryParam;

//   const backage = await fetchBackageData(categoryId);

//   const commentsResponse = await fetchCommentsData();
//   const allComments = commentsResponse?.data?.data ?? [];

//   let filteredComments = [];
//   if (categoryId) {
//     filteredComments = allComments.filter((c) => {
//       const cats = Array.isArray(c.category) ? c.category : [];
//       return cats.some((cat) => String(cat.id) === String(categoryId));
//     });
//   } else {
//     filteredComments = [];
//   }

//   const rawBackageItems = backage?.data?.data ?? [];

//   const flattenedCategories = rawBackageItems.flatMap((item) =>
//     Array.isArray(item.category) ? item.category : []
//   );

//   const uniqueCategories = [];
//   const seenCategoryIds = new Set();
//   for (const cat of flattenedCategories) {
//     if (cat && (cat.id !== undefined && cat.id !== null)) {
//       const idStr = String(cat.id);
//       if (!seenCategoryIds.has(idStr)) {
//         seenCategoryIds.add(idStr);
//         uniqueCategories.push(cat);
//       }
//     }
//   }

//   return (
//     <div>
//       <div className="hostingPageBannerVector">
//         <Header contact={contact.data} categoryData={backage.data.data} />
//         <Hosting categoryData={uniqueCategories} />
//       </div>
//       <HostingPagePlans backage={backage.data.data} comments={filteredComments} />
//       <WordpressFeatures categoryData={uniqueCategories}  />
//       <HostingGrid  categoryData={uniqueCategories}  />
//       <HostingSlider comments={filteredComments} />
//       <Footer contact={contact.data} />
//     </div>
//   );
// };

// export default page;
























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

async function fetchBackageData(categoryId) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  let url = `/page-data/packages?per_page=12`;
  if (categoryId) {
    url += `&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${encodeURIComponent(categoryId)}`;
  }
  const { data: backage } = await axiosInstance.get(url, {
    cache: "no-store",
  });
  return backage;
}

async function fetchCommentsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  const { data: comments } = await axiosInstance.get(`/page-data/comments`, {
    cache: "no-store",
  });
  return comments;
}

export async function generateMetadata({ searchParams }) {
  const contact = await fetchTermsPageData();

  const rawCategoryParam =
    searchParams?.["filters[0][value][]"] ||
    searchParams?.["filters[0][value]"] ||
    searchParams?.category ||
    null;

  const categoryId = Array.isArray(rawCategoryParam)
    ? rawCategoryParam[0]
    : rawCategoryParam;

  const backage = await fetchBackageData(categoryId);

  const rawBackageItems = backage?.data?.data ?? [];

  const flattenedCategories = rawBackageItems.flatMap((item) =>
    Array.isArray(item.category) ? item.category : []
  );

  const uniqueCategories = [];
  const seenCategoryIds = new Set();
  for (const cat of flattenedCategories) {
    if (cat && (cat.id !== undefined && cat.id !== null)) {
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
          url: imageUrl ? `https://admin.gipstar.az/storage${imageUrl}` : undefined,
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

const page = async ({ searchParams }) => {
  const contact = await fetchTermsPageData();

  const rawCategoryParam =
    searchParams?.["filters[0][value][]"] ||
    searchParams?.["filters[0][value]"] ||
    searchParams?.category ||
    null;

  const categoryId = Array.isArray(rawCategoryParam)
    ? rawCategoryParam[0]
    : rawCategoryParam;

  const backage = await fetchBackageData(categoryId);

  const commentsResponse = await fetchCommentsData();
  const allComments = commentsResponse?.data?.data ?? [];

  let filteredComments = [];
  if (categoryId) {
    filteredComments = allComments.filter((c) => {
      const cats = Array.isArray(c.category) ? c.category : [];
      return cats.some((cat) => String(cat.id) === String(categoryId));
    });
  } else {
    filteredComments = [];
  }

  const rawBackageItems = backage?.data?.data ?? [];

  const flattenedCategories = rawBackageItems.flatMap((item) =>
    Array.isArray(item.category) ? item.category : []
  );

  const uniqueCategories = [];
  const seenCategoryIds = new Set();
  for (const cat of flattenedCategories) {
    if (cat && (cat.id !== undefined && cat.id !== null)) {
      const idStr = String(cat.id);
      if (!seenCategoryIds.has(idStr)) {
        seenCategoryIds.add(idStr);
        uniqueCategories.push(cat);
      }
    }
  }

  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header contact={contact.data} categoryData={backage.data.data} />
        <Hosting categoryData={uniqueCategories} />
      </div>
      <HostingPagePlans backage={backage.data.data} comments={filteredComments} />
      <WordpressFeatures categoryData={uniqueCategories}  />
      <HostingGrid  categoryData={uniqueCategories}  />
      <HostingSlider comments={filteredComments} />
      <Footer contact={contact.data} />
    </div>
  );
};

export default page;