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


//   return (
//     <div>
//       <div className="hostingPageBannerVector">
//         <Header contact={contact.data} />
//         <Hosting />
//       </div>
//       <HostingPagePlans backage={backage.data.data}  />
//       <WordpressFeatures />
//       <HostingGrid />
//       <HostingSlider />
//       {/* <HomePageLastGrid /> */}
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

// Yeni: comments endpointindən data çəkən funksiya
async function fetchCommentsData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");
  // eyni pattern: cache no-store
  const { data: comments } = await axiosInstance.get(`/page-data/comments`, {
    cache: "no-store",
  });
  return comments;
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

  // Yeni: comments çək və URL-dən gələn categoryId ilə filtr et
  const commentsResponse = await fetchCommentsData();
  // commentsResponse strukturu: { data: { current_page, data: [ ... ] }, status_code, message }
  const allComments = commentsResponse?.data?.data ?? [];

  let filteredComments = [];
  if (categoryId) {
    filteredComments = allComments.filter((c) => {
      const cats = Array.isArray(c.category) ? c.category : [];
      return cats.some((cat) => String(cat.id) === String(categoryId));
    });
  } else {
    // əgər URL-də categoryId yoxdursa, bütün kommentləri göndərmək istəyirsənsə:
    // filteredComments = allComments;
    // yoxsa boş array qaytarılır:
    filteredComments = [];
  }


  console.log("firidun", backage.data.data);

  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header contact={contact.data} />
        <Hosting />
      </div>
      {/* backage əvvəlki kimi, əlavə olaraq uyğun gələn kommentləri də göndərirəm */}
      <HostingPagePlans backage={backage.data.data}  comments={filteredComments} />
      <WordpressFeatures />
      <HostingGrid />
      <HostingSlider comments={filteredComments} />
      {/* <HomePageLastGrid /> */}
      <Footer contact={contact.data} />
    </div>
  );
};

export default page;




