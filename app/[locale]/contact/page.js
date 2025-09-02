// import Contact from "@/components/ContactPage/Contact";
// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import React from "react";
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

// async function fetchContactSeoPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: seo } = await axiosInstance.get(`/page-data/contact-page-info`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return seo;
//   } catch (error) {
//     throw error;
//   }
// }

// const page = async () => {
//   const contact = await fetchTermsPageData();
//   const seo = await fetchContactSeoPageData();
//   const seoData = seo.data

//   return (
//     <div>
//       <div className="background">
//         <Header contact={contact.data} />
//         <Contact contact={contact.data} />
//         <Footer contact={contact.data} />
//       </div>
//     </div>
//   );
// };

// export default page;







import Contact from "@/components/ContactPage/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
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

async function fetchContactSeoPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: seo } = await axiosInstance.get(`/page-data/contact-page-info`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return seo;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata() {
  const seo = await fetchContactSeoPageData();
  const imageUrl = seo?.data?.og_image;
  const imageAlt = seo?.data?.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az";
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: seo?.data?.meta_title,
    description: seo?.data?.meta_description,
    openGraph: {
      title: seo?.data?.meta_title || "Gipstar",
      description: seo?.data?.meta_description,
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
      title: seo?.data?.meta_title || "Gipstar",
      description: seo?.data?.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = async () => {
  const contact = await fetchTermsPageData();
  const seo = await fetchContactSeoPageData();
  const seoData = seo.data

  return (
    <div>
      <div className="background">
        <Header contact={contact.data} />
        <Contact contact={contact.data} />
        <Footer contact={contact.data} />
      </div>
    </div>
  );
};

export default page;


