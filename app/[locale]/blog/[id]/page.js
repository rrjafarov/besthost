import BlogDetailPage from "@/components/BlogPage/BlogDetailPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";
import { notFound } from "next/navigation";

async function fetchBlogsData() {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("NEXT_LOCALE");

    const { data: blogs } = await axiosInstance.get(`/page-data/blogs`, {
      // headers: { Lang: lang?.value || "az" },
      cache: "no-store",
    });

    return blogs;
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

async function getTranslations() {
  try {
    const data = axiosInstance.get("/translation-list");
    return data;
  } catch (err) {}
}

function getOtherBlogs(blogsArray = [], currentId, limit = 4) {
  if (!Array.isArray(blogsArray)) return [];
  const normalizedId = String(currentId);
  return blogsArray
    .filter((b) => String(b?.id) !== normalizedId)
    .slice(0, limit);
}

export default async function Page({ params }) {
  const rawId = String(params?.id ?? "").trim();
  if (!rawId) return notFound();

  let blog = null;
  let otherBlogs = [];

  try {
    const blogsData = await fetchBlogsData();
    const blogsArray = Array.isArray(blogsData?.data?.data)
      ? blogsData.data.data
      : [];

    // slug-id formatını parçala (məs: lorem-esse-376)
    const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
    const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
    const tailId = slugIdMatch ? slugIdMatch[2] : null;

    const norm = (s) => (s ?? "").toString().trim().toLowerCase();

    // Əvvəlcə numeric id ilə yoxla
    const numericId = Number(rawId);
    if (!Number.isNaN(numericId)) {
      blog = blogsArray.find((b) => String(b?.id) === String(numericId));
    }

    // Əgər tailId varsa, id ilə yoxla
    if (!blog && tailId) {
      blog = blogsArray.find((b) => String(b?.id) === String(tailId));
    }

    // slug və url_slug ilə yoxla
    if (!blog) {
      blog =
        blogsArray.find((b) => norm(b?.slug) === norm(rawId)) ||
        blogsArray.find((b) => norm(b?.url_slug) === norm(rawId)) ||
        (baseSlug &&
          blogsArray.find((b) => norm(b?.slug) === norm(baseSlug))) ||
        (baseSlug &&
          blogsArray.find((b) => norm(b?.url_slug) === norm(baseSlug))) ||
        null;
    }

    // son çarə: includes ilə yoxla
    if (!blog) {
      blog =
        blogsArray.find(
          (b) => norm(b?.slug) && norm(rawId).includes(norm(b.slug))
        ) ||
        blogsArray.find(
          (b) => norm(b?.url_slug) && norm(rawId).includes(norm(b.url_slug))
        ) ||
        null;
    }

    // Əgər blog tapıldısa, digər blogları hazırla
    if (blog) {
      otherBlogs = getOtherBlogs(blogsArray, blog.id, 4);
    }
  } catch (err) {
    console.error("Error while fetching/searching blogs:", err);
    return notFound();
  }

  if (!blog) {
    return notFound();
  }

  const contact = await fetchTermsPageData();
  const translations = await getTranslations();
  const t = translations?.data;

  return (
    <div>
      <Header contact={contact.data} />
      <div className="background">
        <BlogDetailPage t={t} blog={blog} otherBlogs={otherBlogs} />
        <Footer contact={contact.data} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const rawId = String(params?.id ?? "").trim();
  if (!rawId) return {};

  let blog = null;

  try {
    const blogsData = await fetchBlogsData();
    const blogsArray = Array.isArray(blogsData?.data?.data)
      ? blogsData.data.data
      : [];

    // slug-id formatını parçala (məs: lorem-esse-376)
    const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
    const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
    const tailId = slugIdMatch ? slugIdMatch[2] : null;

    const norm = (s) => (s ?? "").toString().trim().toLowerCase();

    // Əvvəlcə numeric id ilə yoxla
    const numericId = Number(rawId);
    if (!Number.isNaN(numericId)) {
      blog = blogsArray.find((b) => String(b?.id) === String(numericId));
    }

    // Əgər tailId varsa, id ilə yoxla
    if (!blog && tailId) {
      blog = blogsArray.find((b) => String(b?.id) === String(tailId));
    }

    // slug və url_slug ilə yoxla
    if (!blog) {
      blog =
        blogsArray.find((b) => norm(b?.slug) === norm(rawId)) ||
        blogsArray.find((b) => norm(b?.url_slug) === norm(rawId)) ||
        (baseSlug &&
          blogsArray.find((b) => norm(b?.slug) === norm(baseSlug))) ||
        (baseSlug &&
          blogsArray.find((b) => norm(b?.url_slug) === norm(baseSlug))) ||
        null;
    }

    // son çarə: includes ilə yoxla
    if (!blog) {
      blog =
        blogsArray.find(
          (b) => norm(b?.slug) && norm(rawId).includes(norm(b.slug))
        ) ||
        blogsArray.find(
          (b) => norm(b?.url_slug) && norm(rawId).includes(norm(b.url_slug))
        ) ||
        null;
    }
  } catch (err) {
    console.error("Error while fetching/searching blogs for metadata:", err);
    return {};
  }

  if (!blog) {
    return {};
  }

  const imageUrl = blog.og_image || ""; // Assuming blog has og_image field; adjust if different
  const imageAlt = blog.meta_title || "Gipstar";
  const canonicalUrl = `https://gipstar.az/blogs/${rawId}`; // Adjust based on actual URL structure
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  return {
    title: blog.meta_title || "Gipstar",
    description: blog.meta_description || "",
    openGraph: {
      title: blog.meta_title || "Gipstar",
      description: blog.meta_description || "",
      url: canonicalUrl,
      images: [
        {
          url: imageUrl.startsWith("http")
            ? imageUrl
            : `https://admin.gipstar.az/storage${imageUrl}`,
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
      title: blog.meta_title || "Gipstar",
      description: blog.meta_description || "Gipstar",
      creator: "@gipstar",
      site: "@gipstar",
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// import BlogDetailPage from "@/components/BlogPage/BlogDetailPage";
// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import React from "react";
// import { cookies } from "next/headers";
// import axiosInstance from "@/lib/axios";
// import { notFound } from "next/navigation";

// async function fetchBlogsData() {
//   try {
//     const cookieStore = await cookies();
//     const lang = cookieStore.get("NEXT_LOCALE");

//     const { data: blogs } = await axiosInstance.get(`/page-data/blogs`, {
//       // headers: { Lang: lang?.value || "az" },
//       cache: "no-store",
//     });

//     return blogs;
//   } catch (error) {
//     console.error("Failed to fetch blogs data", error);
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

// // Digər blogları qaytaran funksiya (cari blog çıxılacaq)
// function getOtherBlogs(blogsArray = [], currentId, limit = 4) {
//   if (!Array.isArray(blogsArray)) return [];
//   const normalizedId = String(currentId);
//   return blogsArray
//     .filter((b) => String(b?.id) !== normalizedId)
//     .slice(0, limit);
// }

// export default async function Page({ params }) {
//   const rawId = String(params?.id ?? "").trim();
//   if (!rawId) return notFound();

//   let blog = null;
//   let otherBlogs = [];

//   try {
//     const blogsData = await fetchBlogsData();
//     const blogsArray = Array.isArray(blogsData?.data?.data) ? blogsData.data.data : [];

//     // slug-id formatını parçala (məs: lorem-esse-376)
//     const slugIdMatch = rawId.match(/^(.+)-(\d+)$/);
//     const baseSlug = slugIdMatch ? slugIdMatch[1] : null;
//     const tailId = slugIdMatch ? slugIdMatch[2] : null;

//     const norm = (s) => (s ?? "").toString().trim().toLowerCase();

//     // Əvvəlcə numeric id ilə yoxla
//     const numericId = Number(rawId);
//     if (!Number.isNaN(numericId)) {
//       blog = blogsArray.find((b) => String(b?.id) === String(numericId));
//     }

//     // Əgər tailId varsa, id ilə yoxla
//     if (!blog && tailId) {
//       blog = blogsArray.find((b) => String(b?.id) === String(tailId));
//     }

//     // slug və url_slug ilə yoxla
//     if (!blog) {
//       blog =
//         blogsArray.find((b) => norm(b?.slug) === norm(rawId)) ||
//         blogsArray.find((b) => norm(b?.url_slug) === norm(rawId)) ||
//         (baseSlug && blogsArray.find((b) => norm(b?.slug) === norm(baseSlug))) ||
//         (baseSlug && blogsArray.find((b) => norm(b?.url_slug) === norm(baseSlug))) ||
//         null;
//     }

//     // son çarə: includes ilə yoxla
//     if (!blog) {
//       blog =
//         blogsArray.find((b) => norm(b?.slug) && norm(rawId).includes(norm(b.slug))) ||
//         blogsArray.find((b) => norm(b?.url_slug) && norm(rawId).includes(norm(b.url_slug))) ||
//         null;
//     }

//     // Əgər blog tapıldısa, digər blogları hazırla
//     if (blog) {
//       otherBlogs = getOtherBlogs(blogsArray, blog.id, 4);
//     }
//   } catch (err) {
//     console.error("Error while fetching/searching blogs:", err);
//     return notFound();
//   }

//   if (!blog) {
//     return notFound();
//   }

//   const contact = await fetchTermsPageData();

//   return (
//     <div>
//       <Header contact={contact.data}  />
//       <div className="background">
//         <BlogDetailPage blog={blog} otherBlogs={otherBlogs} />
//         <Footer contact={contact.data}  />
//       </div>
//     </div>
//   );
// }
