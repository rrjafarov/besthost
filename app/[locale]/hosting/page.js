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

//   try {
//     const { data: contact } = await axiosInstance.get(`/page-data/contact`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return contact;
//   } catch (error) {
//     throw error;
//   }
// }



// async function fetchBackageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");
//   try {
//     const { data: backage } = await axiosInstance.get(`/page-data/packages`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return backage;
//   } catch (error) {
//     console.error("Failed to fetch backage data", error);
//     throw error;
//   }
// }




// const page = async () => {
//   const contact = await fetchTermsPageData();
//   const backage = await fetchBackageData();

//   return (
//     <div>
//       <div className="hostingPageBannerVector">
//         <Header contact={contact.data}  />
//         <Hosting />
//       </div>
//       <HostingPagePlans />
//       <WordpressFeatures />
//       <HostingGrid />
//       <HostingSlider />
//       <HomePageLastGrid />
//       <Footer  contact={contact.data}  />
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

  console.log(backage.data.data , "dadawdaw");

  return (
    <div>
      <div className="hostingPageBannerVector">
        <Header contact={contact.data} />
        <Hosting />
      </div>
      <HostingPagePlans backage={backage.data.data}  />
      <WordpressFeatures />
      <HostingGrid />
      <HostingSlider />
      <HomePageLastGrid />
      <Footer contact={contact.data} />
    </div>
  );
};

export default page;
