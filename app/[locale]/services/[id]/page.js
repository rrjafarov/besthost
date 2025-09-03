// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import ServicesDetailPage from "@/components/ServicesPage/ServicesDetailPage";
// import React from "react";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";
// import { notFound } from "next/navigation";

// async function fetchServicesData() {
//   try {
//     const cookieStore = await cookies();
//     const lang = cookieStore.get("NEXT_LOCALE");

//     const { data: services } = await axiosInstance.get(`/page-data/services`, {
//       // headers: { Lang: lang?.value || "az" }, // lazım olsa aç
//       cache: "no-store",
//     });

//     return services;
//   } catch (error) {
//     console.error("Failed to fetch services data", error);
//     throw error;
//   }
// }

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

// // Yeni: cari xidməti çıxaraq digər xidmətləri qaytaran funksiyya
// function getOtherServices(servicesArray = [], currentId, limit = 4) {
//   if (!Array.isArray(servicesArray)) return [];
//   const normalizedId = String(currentId);
//   return servicesArray
//     .filter((s) => String(s?.id) !== normalizedId)
//     .slice(0, limit);
// }

// export default async function Page({ params }) {
//   const rawId = String(params?.id ?? "").trim();
//   if (!rawId) return notFound();

//   let service = null;
//   let otherServices = [];

//   try {
//     const services = await fetchServicesData();
//     const servicesArray = Array.isArray(services?.data?.data) ? services.data.data : [];

//     // 1) Əgər URL "slug-id" formasındadır (məs: lorem-esse-380), onu parçala
//     const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
//     const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
//     const tailId = slugIdMatch ? slugIdMatch[2] : null;

//     // normalize funksiyası: yoxlamaları case-insensitive və trim ilə et
//     const norm = (s) => (s ?? "").toString().trim().toLowerCase();

//     // 2) Əvvəlcə id ilə yoxla (əgər rawId özü rəqəmdirsə və ya tailId tapılıbsa)
//     const numericId = Number(rawId);
//     if (!Number.isNaN(numericId)) {
//       service = servicesArray.find((s) => String(s?.id) === String(numericId));
//     }

//     if (!service && tailId) {
//       // əgər rawId "slug-id" id-dən ibarətdirsə, əvvəlcə id ilə yoxla
//       service = servicesArray.find((s) => String(s?.id) === String(tailId));
//     }

//     // 3) Əgər hələ tapılmayıbsa, slug/url_slug-larla müqayisə et
//     if (!service) {
//       // mümkün slug variantlarına bax
//       service =
//         servicesArray.find((s) => norm(s?.slug) === norm(rawId)) ||
//         servicesArray.find((s) => norm(s?.url_slug) === norm(rawId)) ||
//         // baseSlug varsa ona da bax
//         (baseSlug && servicesArray.find((s) => norm(s?.slug) === norm(baseSlug))) ||
//         (baseSlug && servicesArray.find((s) => norm(s?.url_slug) === norm(baseSlug))) ||
//         null;
//     }

//     // 4) əlavə tolerantlıq: bəzi hallarda slug içində id də ola bilər, includes ilə də yoxla (son çarə)
//     if (!service) {
//       service =
//         servicesArray.find((s) => norm(s?.slug) && norm(rawId).includes(norm(s.slug))) ||
//         servicesArray.find((s) => norm(s?.url_slug) && norm(rawId).includes(norm(s.url_slug))) ||
//         null;
//     }

//     // Əgər service tapıldısa, digər xidmətləri hazırla (cari xidməti çıxmaq şərti ilə)
//     if (service) {
//       otherServices = getOtherServices(servicesArray, service.id, 4);
//     }
//   } catch (err) {
//     console.error("Error while fetching/searching services:", err);
//     return notFound();
//   }

//   if (!service) {
//     return notFound();
//   }

//   const contact = await fetchTermsPageData();

//   // yalnız doğru servisi və digərlərini prop kimi veririk
//   return (
//     <div>
//       <Header contact={contact.data} />
//       <div className="background">
//         <ServicesDetailPage service={service} otherServices={otherServices} />
//         <Footer contact={contact.data} />
//       </div>
//     </div>
//   );
// }
























import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesDetailPage from "@/components/ServicesPage/ServicesDetailPage";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import { notFound } from "next/navigation";

async function fetchServicesData() {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data: services } = await axiosInstance.get(`/page-data/services`, {
      // headers: { Lang: lang?.value || "az" }, // lazım olsa aç
      cache: "no-store",
    });

    return services;
  } catch (error) {
    console.error("Failed to fetch services data", error);
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

// Yeni: cari xidməti çıxaraq digər xidmətləri qaytaran funksiyya
function getOtherServices(servicesArray = [], currentId, limit = 4) {
  if (!Array.isArray(servicesArray)) return [];
  const normalizedId = String(currentId);
  return servicesArray
    .filter((s) => String(s?.id) !== normalizedId)
    .slice(0, limit);
}

export default async function Page({ params }) {
  const rawId = String(params?.id ?? "").trim();
  if (!rawId) return notFound();

  let service = null;
  let otherServices = [];

  try {
    const services = await fetchServicesData();
    const servicesArray = Array.isArray(services?.data?.data) ? services.data.data : [];

    // 1) Əgər URL "slug-id" formasındadır (məs: lorem-esse-380), onu parçala
    const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
    const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
    const tailId = slugIdMatch ? slugIdMatch[2] : null;

    // normalize funksiyası: yoxlamaları case-insensitive və trim ilə et
    const norm = (s) => (s ?? "").toString().trim().toLowerCase();

    // 2) Əvvəlcə id ilə yoxla (əgər rawId özü rəqəmdirsə və ya tailId tapılıbsa)
    const numericId = Number(rawId);
    if (!Number.isNaN(numericId)) {
      service = servicesArray.find((s) => String(s?.id) === String(numericId));
    }

    if (!service && tailId) {
      // əgər rawId "slug-id" id-dən ibarətdirsə, əvvəlcə id ilə yoxla
      service = servicesArray.find((s) => String(s?.id) === String(tailId));
    }

    // 3) Əgər hələ tapılmayıbsa, slug/url_slug-larla müqayisə et
    if (!service) {
      // mümkün slug variantlarına bax
      service =
        servicesArray.find((s) => norm(s?.slug) === norm(rawId)) ||
        servicesArray.find((s) => norm(s?.url_slug) === norm(rawId)) ||
        // baseSlug varsa ona da bax
        (baseSlug && servicesArray.find((s) => norm(s?.slug) === norm(baseSlug))) ||
        (baseSlug && servicesArray.find((s) => norm(s?.url_slug) === norm(baseSlug))) ||
        null;
    }

    // 4) əlavə tolerantlıq: bəzi hallarda slug içində id də ola bilər, includes ilə də yoxla (son çarə)
    if (!service) {
      service =
        servicesArray.find((s) => norm(s?.slug) && norm(rawId).includes(norm(s.slug))) ||
        servicesArray.find((s) => norm(s?.url_slug) && norm(rawId).includes(norm(s.url_slug))) ||
        null;
    }

    // Əgər service tapıldısa, digər xidmətləri hazırla (cari xidməti çıxmaq şərti ilə)
    if (service) {
      otherServices = getOtherServices(servicesArray, service.id, 4);
    }
  } catch (err) {
    console.error("Error while fetching/searching services:", err);
    return notFound();
  }

  if (!service) {
    return notFound();
  }

  const contact = await fetchTermsPageData();

  // yalnız doğru servisi və digərlərini prop kimi veririk
  return (
    <div>
      <Header contact={contact.data} />
      <div className="background">
        <ServicesDetailPage service={service} otherServices={otherServices} />
        <Footer contact={contact.data} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const rawId = String(params?.id ?? "").trim();
  if (!rawId) return {};

  let service = null;

  try {
    const servicesData = await fetchServicesData();
    const servicesArray = Array.isArray(servicesData?.data?.data) ? servicesData.data.data : [];

    // slug-id formatını parçala (məs: lorem-esse-380)
    const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
    const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
    const tailId = slugIdMatch ? slugIdMatch[2] : null;

    const norm = (s) => (s ?? "").toString().trim().toLowerCase();

    // Əvvəlcə numeric id ilə yoxla
    const numericId = Number(rawId);
    if (!Number.isNaN(numericId)) {
      service = servicesArray.find((s) => String(s?.id) === String(numericId));
    }

    // Əgər tailId varsa, id ilə yoxla
    if (!service && tailId) {
      service = servicesArray.find((s) => String(s?.id) === String(tailId));
    }

    // slug və url_slug ilə yoxla
    if (!service) {
      service =
        servicesArray.find((s) => norm(s?.slug) === norm(rawId)) ||
        servicesArray.find((s) => norm(s?.url_slug) === norm(rawId)) ||
        (baseSlug && servicesArray.find((s) => norm(s?.slug) === norm(baseSlug))) ||
        (baseSlug && servicesArray.find((s) => norm(s?.url_slug) === norm(baseSlug))) ||
        null;
    }

    // son çarə: includes ilə yoxla
    if (!service) {
      service =
        servicesArray.find((s) => norm(s?.slug) && norm(rawId).includes(norm(s.slug))) ||
        servicesArray.find((s) => norm(s?.url_slug) && norm(rawId).includes(norm(s.url_slug))) ||
        null;
    }
  } catch (err) {
    console.error("Error while fetching/searching services for metadata:", err);
    return {};
  }

  if (!service) {
    return {};
  }

  const imageUrl = service.og_image || ""; // Assuming service has og_image field; adjust if different
  const imageAlt = service.meta_title || "Gipstar";
  const canonicalUrl = `https://gipstar.az/services/${rawId}`; // Adjust based on actual URL structure
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: service.meta_title || "Gipstar",
    description: service.meta_description || "",
    openGraph: {
      title: service.meta_title || "Gipstar",
      description: service.meta_description || "",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl.startsWith("http") ? imageUrl : `https://admin.gipstar.az/storage${imageUrl}`,
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
      title: service.meta_title || "Gipstar",
      description: service.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}