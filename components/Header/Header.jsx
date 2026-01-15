"use client";
import React, { useState } from "react";
import Logo from "@/public/icons/besthostLogo.svg";
import Arrow from "@/public/icons/arrow.svg";
import Drop from "@/public/icons/dropdown.svg";
import MenuIcon from "@/public/icons/menu.svg";
import HeaderMobileMenu from "@/components/HeaderMobileMenu";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Header = ({ contact, category, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  // currentLocale-i hər renderdə alın — state əvəzinə
  const getLocaleFromPath = (p) => {
    if (typeof p !== "string") return "az";
    const m = p.match(/^\/(az|en|ru)(\/|$)/);
    return (m && m[1]) || "az";
  };
  const currentLocale = getLocaleFromPath(pathname);

  const availableLocales = ["az", "en", "ru"];
  const visibleLocales = availableLocales.filter((l) => l !== currentLocale);

  // pathname-dən mövcud locale prefiksini ayır
  const stripLocaleFromPath = (p) => {
    if (typeof p !== "string") return "/";
    const m = p.match(/^\/(az|en|ru)(\/.*|$)/);
    if (m) {
      return m[2] || "/";
    }
    return p;
  };

  const normalizeRest = (rest) => {
    if (!rest || rest === "/") return "";
    return rest.startsWith("/") ? rest : `/${rest}`;
  };

  // Linklər üçün href hazırla — həmişə cari path-dən çıxan locale ilə
  const buildHref = (pathWithoutLocale = "/") => {
    const rest = normalizeRest(pathWithoutLocale);
    return `/${currentLocale}${rest || ""}`;
  };

  const changeLocale = (newLocale) => {
    if (!newLocale || newLocale === currentLocale) return;

    // cookie yaz (server-side fetch-lər üçün). path=/ lazım ki, bütün site üçün keçərli olsun.
    try {
      // 1 il expiry
      const maxAge = 60 * 60 * 24 * 365;
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${maxAge};`;
    } catch (e) {
      // bəzi SSR testlərdə document olmayacaq, amma bu funksiya client componentdə çağırılır
      // konsolda loglamaq kifayətdir
      console.warn("could not set cookie NEXT_LOCALE", e);
    }

    // pathname-dən rest hissəni götür və yeni target hazırla
    const restFromPath = stripLocaleFromPath(pathname);
    const rest = normalizeRest(restFromPath);
    let target = `/${newLocale}${rest}`;

    // query param-ları saxla
    const sp = searchParams ? searchParams.toString() : "";
    if (sp) target += `?${sp}`;

    // hash-i saxla
    if (typeof window !== "undefined" && window.location.hash) {
      target += window.location.hash;
    }

    // Replace ilə yönləndir
    router.replace(target);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div id="header">
        <div className="container">
          <div className="headerTop">
            {visibleLocales.map((l, idx) => (
              <React.Fragment key={l}>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => changeLocale(l)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") changeLocale(l);
                  }}
                >
                  {l.toUpperCase()}
                </span>
                {idx !== visibleLocales.length - 1 && (
                  <div className="langLine"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="headerMain">
            <div className="headerLogo">
              <Link href={buildHref("/")}>
                <Logo />
              </Link>
            </div>

            <div className="headerLinks">
              <ul>
                <li className="dropdown">
                  <Link href={buildHref("/")}>
                    <span>{t?.hostingPageTitle}</span>{" "}
                    <Arrow className="activeRotate" />
                  </Link>

                  <div className="dropdownMenu">
                    <ul>
                      {category?.data?.data?.map((categoryItem) => {
                        const categorySlug = categoryItem?.url_slug;
                        const hostingHref = categorySlug
                          ? buildHref(`/hosting?category=${categorySlug}`)
                          : buildHref("/hosting");

                        return (
                          <li key={categoryItem.id}>
                            <Link href={hostingHref}>
                              <div className="linkIconDrop">
                                <img
                                  src={`https://admin-besthost.onestudio.az/storage/${categoryItem.image}`}
                                  alt=""
                                />
                              </div>
                              <div className="linkTextDrop">
                                <span>{categoryItem.title}</span>
                                <strong>{categoryItem.menu_title}</strong>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link href={buildHref("#")}>
                    <span>{t?.domains}</span>
                  </Link>
                </li>

                <li>
                  <Link href={buildHref("/services")}>
                    <span>{t?.servicesPageTitle}</span>
                  </Link>
                </li>

                <li>
                  <Link href={buildHref("/blog")}>
                    <span>{t?.blogPageTitle}</span>
                  </Link>
                </li>
                <li>
                  <Link href={buildHref("/contact")}>
                    <span>{t?.contactPageTitle}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="headerContact">
              <div className="headerContactItem">
                <Link href={`tel:${contact?.phone || ""}`}>
                  <span>{t?.supportLine} :</span>
                  <strong>{contact?.phone || "-"}</strong>
                </Link>
              </div>
            </div>

            <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <HeaderMobileMenu
        t={t}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        buildHref={buildHref}
        contact={contact}
        category={category}
      />
    </>
  );
};

export default Header;


