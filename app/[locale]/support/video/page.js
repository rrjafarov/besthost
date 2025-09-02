// import SupportVideo from '@/components/Support/SupportVideo'
// import React from 'react'
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";

// async function fetchTermsPageData() {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("NEXT_LOCALE");

//   try {
//     const { data: terms } = await axiosInstance.get(`/page-data/video-tutorial`, {
//       // headers: { Lang: lang.value },
//       cache: "no-store",
//     });
//     return terms;
//   } catch (error) {
//     throw error;
//   }
// }

// const page = async () => {
//   const terms = await fetchTermsPageData();
//   return (
//     <div>
//       <SupportVideo terms={terms.data} />
//     </div>
//   )
// }

// export default page









// ! SEO GENERATED
import SupportVideo from '@/components/Support/SupportVideo'
import React from 'react'
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

async function fetchTermsPageData() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  try {
    const { data: terms } = await axiosInstance.get(`/page-data/video-tutorial`, {
      // headers: { Lang: lang.value },
      cache: "no-store",
    });
    return terms;
  } catch (error) {
    throw error;
  }
}

export async function generateMetadata() {
  const seo = await fetchTermsPageData();
  const imageUrl = seo?.data.og_image;
  const imageAlt = seo?.data.meta_title || "Gipstar";
  const canonicalUrl = "https://gipstar.az/video-tutorial";
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

const page = async () => {
  const terms = await fetchTermsPageData();
  return (
    <div>
      <SupportVideo terms={terms.data} />
    </div>
  )
}

export default page

