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
    console.error("Failed to fetch services data", error);
    throw error;
  }
}

const page = async () => {
  const blogs = await fetchBlogsData();
  const blogsData = blogs.data.data;


  return (
    <div>
      <Header />
      <div className="background">
        <BlogPage blogsData={blogsData} />
        <Footer />
      </div>
    </div>
  );
};

export default page;
