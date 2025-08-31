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

const page = async () => {
  const terms = await fetchTermsPageData();
  return (
    <div>
      <SupportVideo terms={terms.data} />
    </div>
  )
}

export default page