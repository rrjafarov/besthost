"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Arrow from "@/public/icons/arrow.svg";
import Terms from "@/public/icons/supportTerms.svg";
import Privacy from "@/public/icons/supportPrivacy.svg";
import Video from "@/public/icons/supportVideo.svg";
import Footer from "@/components/Footer/Footer";
import axiosInstance from "@/lib/axios"; // Adjust the import path as needed

const SupportPage = ({ children }) => {
  // 1) URL'den son segmenti al
  const pathname = usePathname(); // e.g. "/support/privacy"
  const segments = pathname?.split("/") || [];
  const currentKey = segments[segments.length - 1] || "privacy";

  const [contact, setContact] = useState(null);
  const [t, setT] = useState(null);

  // 2) Her sayfa için konfigürasyon map'i - translations kullanacak
  const getPageConfig = () => {
    if (!t) return {};
    
    return {
      terms: {
        href: "/support/terms",
        label: t?.terms,
        title: t?.terms,
      },
      privacy: {
        href: "/support/privacy",
        label: t?.privacy,
        title: t?.privacy,
      },
      video: {
        href: "/support/video",
        label: t?.video,
        title: t?.video,
      },
    };
  };

  const pageConfig = getPageConfig();
  const currentPage = pageConfig[currentKey] || pageConfig.privacy;

  useEffect(() => {
    async function fetchTranslations() {
      try {
        const { data: translations } = await axiosInstance.get("/translation-list");
        setT(translations);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchTermsPageData() {
      try {
        const { data: contactData } = await axiosInstance.get(`/page-data/contact`, {
          // headers: { Lang: lang.value },
          cache: "no-store",
        });
        setContact(contactData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTranslations();
    fetchTermsPageData();
  }, []);

  if (!contact || !t) {
    return <div></div>;
  }

  return (
    <>
      <div className="background">
        <Header contact={contact.data} t={t} />
        <div className="besthostSupportPages">
          <div className="container">
            {/* Breadcrumbs */}
            <div className="besthostSupportPagesBreadCrumbs">
              <div className="aboutPageBreadCrumbs">
                <Link href="/">
                  <span>BestHost</span>
                </Link>
                <Arrow className="breadCrumbsArrow" />
                <Link href={currentPage?.href}>
                  <strong>{currentPage?.label}</strong>
                </Link>
              </div>
            </div>

            {/* Dinamik başlık */}
            <div className="supportPrivacyTitle">{currentPage?.title}</div>

            {/* İçerik */}
            <div className="supportPrivacyContent">
              <div className="row">
                <div className="xl-4 lg-4 md-4 sm-12">
                  <div className="supportPrivacyContentLeft">
                    <div className="supportPrivacyContentLeftItem">
                      <ul>
                        <li>
                          <Terms />
                          <Link
                            style={{
                              color:
                                currentKey === "terms" ? "#956DD4" : "#2a0d56",
                              fontWeight:
                                currentKey === "terms" ? "700" : "700",
                            }}
                            href="/support/terms"
                          >
                            {t?.terms}
                          </Link>
                        </li>
                        <li>
                          <Privacy />
                          <Link
                            style={{
                              color:
                                currentKey === "privacy" ? "#956DD4" : "#2a0d56",
                              fontWeight:
                                currentKey === "privacy" ? "700" : "700",
                            }}
                            href="/support/privacy"
                          >
                            {t?.privacy}
                          </Link>
                        </li>
                        <li>
                          <Video />
                          <Link
                            style={{
                              color:
                                currentKey === "video" ? "#956DD4" : "#2a0d56",
                              fontWeight:
                                currentKey === "video" ? "700" : "700",
                            }}
                            href="/support/video"
                          >
                            {t?.video}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="xl-8 lg-8 md-8 sm-12">{children}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer t={t} contact={contact.data} />
      </div>
    </>
  );
};

export default SupportPage;