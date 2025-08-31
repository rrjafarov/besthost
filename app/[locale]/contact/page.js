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

const page = async () => {
  const contact = await fetchTermsPageData();


  return (
    <div>
      <div className="background">
        <Header />
        <Contact contact={contact.data} />
        <Footer />
      </div>
    </div>
  );
};

export default page;
