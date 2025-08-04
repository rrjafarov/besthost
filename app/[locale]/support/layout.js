"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Arrow from "@/public/icons/arrow.svg";
import Terms from "@/public/icons/supportTerms.svg";
import Privacy from "@/public/icons/supportPrivacy.svg";
import Video from "@/public/icons/supportVideo.svg";

import Footer from "@/components/Footer/Footer";

const SupportPage = ({ children }) => {
  // 1) URL’den son segmenti al
  const pathname = usePathname(); // e.g. "/support/privacy"
  const segments = pathname?.split("/") || [];
  const currentKey = segments[segments.length - 1] || "privacy";

  // 2) Her sayfa için konfigürasyon map’i
  const pageConfig = {
    terms: {
      href: "/support/terms",
      label: "Terms of Service",
      title: "Terms of Service",
    },
    privacy: {
      href: "/support/privacy",
      label: "Privacy Policy",
      title: "Privacy Policy",
    },
    video: {
      href: "/support/video",
      label: "Video tutorials",
      title: "Video tutorials",
    },
  };

  // 3) Eğer bilinmeyen bir key gelirse privacy’yi varsayılan olarak ata
  const currentPage = pageConfig[currentKey] || pageConfig.privacy;

  return (
    <>
      <div className="background">
        <Header />
        <div className="besthostSupportPages">
          <div className="container">
            {/* Breadcrumbs */}
            <div className="besthostSupportPagesBreadCrumbs">
              <div className="aboutPageBreadCrumbs">
                <Link href="/">
                  <span>BestHost</span>
                </Link>
                <Arrow className="breadCrumbsArrow" />
                <Link href={currentPage.href}>
                  <strong>{currentPage.label}</strong>
                </Link>
              </div>
            </div>

            {/* Dinamik başlık */}
            <div className="supportPrivacyTitle">{currentPage.title}</div>

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
                            Terms of Service
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
                            Privacy Policy
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
                            Video tutorials
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
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;
