// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Logo from "@/public/icons/besthostLogo.svg";
// import Arrow from "@/public/icons/arrow.svg";
// import Drop from "@/public/icons/dropdown.svg";
// import MenuIcon from "@/public/icons/menu.svg";

// import Link from "next/link";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";

// const Header = ({contact}) => {
//   const router = useRouter();
//   const pathname = usePathname() || "/";
//   const searchParams = useSearchParams();

//   // Default olaraq AZ göstərilsin
//   const [locale, setLocale] = useState("az");

//   useEffect(() => {
//     const match = pathname.match(/^\/(az|en|ru)(\/|$)/);
//     if (match && match[1]) {
//       setLocale(match[1]);
//     } else {
//       setLocale("az");
//     }
//     // yalnız ilk renderdə çalışması yetərlidir; pathname dəyişsə yenilə
//   }, [pathname]);

//   const availableLocales = ["az", "en", "ru"];
//   const visibleLocales = availableLocales.filter((l) => l !== locale);

//   // pathname-dən mövcud locale prefiksini ayır
//   const stripLocaleFromPath = (p) => {
//     const m = p.match(/^\/(az|en|ru)(\/.*|$)/);
//     if (m) {
//       // m[2] ya "/rest/..." ya "" isə onu qaytar
//       return m[2] || "/";
//     }
//     return p;
//   };

//   const changeLocale = (newLocale) => {
//     // Lokal vəziyyəti dərhal yenilə
//     setLocale(newLocale);

//     // Cari path-dən mövcud locale prefiksini götür və yeni locale ilə yenidən qur
//     const rest = stripLocaleFromPath(pathname);
//     // Əgər rest "/" və ya "" isə target "/" + newLocale
//     let target = "";
//     if (rest === "/" || rest === "") {
//       target = `/${newLocale}`;
//     } else {
//       // rest artıq əvvəlində "/" olmalıdır (məs: "/products/1")
//       target = `/${newLocale}${rest}`;
//     }

//     // Search param-ları saxla
//     const sp = searchParams ? searchParams.toString() : "";
//     if (sp) target += `?${sp}`;

//     // Push ilə yönləndir
//     router.push(target);
//   };

//   return (
//     <div id="header">
//       <div className="container">
//         <div className="headerTop">
//           <span
//             role="button"
//             tabIndex={0}
//             onClick={() => changeLocale(visibleLocales[0])}
//             onKeyDown={(e) => { if (e.key === "Enter") changeLocale(visibleLocales[0]); }}
//           >
//             {visibleLocales[0].toUpperCase()}
//           </span>
//           <div className="langLine"></div>
//           <span
//             role="button"
//             tabIndex={0}
//             onClick={() => changeLocale(visibleLocales[1])}
//             onKeyDown={(e) => { if (e.key === "Enter") changeLocale(visibleLocales[1]); }}
//           >
//             {visibleLocales[1].toUpperCase()}
//           </span>
//         </div>
//         <div className="headerMain">
//           <div className="headerLogo">
//             <Link href="/">
//               <Logo />
//             </Link>
//           </div>
//           <div className="headerLinks">
//             <ul>
//               <li className="dropdown">
//                 <Link href="/">
//                   <span>Hosting</span> <Arrow className="activeRotate" />
//                 </Link>

//                 <div className="dropdownMenu">
//                   <ul>
//                     <li>
//                       <Link href="/">
//                         <div className="linkIconDrop">
//                           <Drop />
//                         </div>
//                         <div className="linkTextDrop">
//                           <span>Cloud Hosting</span>
//                           <strong>For large scale projects</strong>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/">
//                         <div className="linkIconDrop">
//                           <Drop />
//                         </div>
//                         <div className="linkTextDrop">
//                           <span>Cloud Hosting</span>
//                           <strong>For large scale projects</strong>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/">
//                         <div className="linkIconDrop">
//                           <Drop />
//                         </div>
//                         <div className="linkTextDrop">
//                           <span>Cloud Hosting</span>
//                           <strong>For large scale projects</strong>
//                         </div>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/">
//                         <div className="linkIconDrop">
//                           <Drop />
//                         </div>
//                         <div className="linkTextDrop">
//                           <span>Cloud Hosting</span>
//                           <strong>For large scale projects</strong>
//                         </div>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li>
//                 <Link href="/">
//                   <span>Domains</span> <Arrow className="activeRotate" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services">
//                   <span>Services</span> <Arrow className="activeRotate" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <span>Website</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog">
//                   <span>Blog</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="headerContact">
//             <div className="headerContactItem">
//               <Link href={`tel:${contact.phone}`}>
//                 <span>Dəstək xətti :</span>
//                 <strong>{contact.phone}</strong>
//               </Link>
//             </div>
//           </div>
//           <div className="mobileMenuIcon">
//             <MenuIcon />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;










"use client";
import React from "react";
import Logo from "@/public/icons/besthostLogo.svg";
import Arrow from "@/public/icons/arrow.svg";
import Drop from "@/public/icons/dropdown.svg";
import MenuIcon from "@/public/icons/menu.svg";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

/**
 * Daha etibarlı locale-aware Header:
 * - locale hər renderdə pathname-dən çıxarılır (state istifadə edilmir).
 * - changeLocale cookie yazır (NEXT_LOCALE) və router.replace ilə yönləndirir.
 * - query və hash saxlanılır.
 */

const Header = ({ contact }) => {
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

  return (
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
              {idx !== visibleLocales.length - 1 && <div className="langLine"></div>}
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
                  <span>Hosting</span> <Arrow className="activeRotate" />
                </Link>

                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <Link href={buildHref("/")}>
                        <div className="linkIconDrop">
                          <Drop />
                        </div>
                        <div className="linkTextDrop">
                          <span>Cloud Hosting</span>
                          <strong>For large scale projects</strong>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={buildHref("/")}>
                        <div className="linkIconDrop">
                          <Drop />
                        </div>
                        <div className="linkTextDrop">
                          <span>Cloud Hosting</span>
                          <strong>For large scale projects</strong>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={buildHref("/")}>
                        <div className="linkIconDrop">
                          <Drop />
                        </div>
                        <div className="linkTextDrop">
                          <span>Cloud Hosting</span>
                          <strong>For large scale projects</strong>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href={buildHref("/")}>
                        <div className="linkIconDrop">
                          <Drop />
                        </div>
                        <div className="linkTextDrop">
                          <span>Cloud Hosting</span>
                          <strong>For large scale projects</strong>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link href={buildHref("/")}>
                  <span>Domains</span> <Arrow className="activeRotate" />
                </Link>
              </li>

              <li>
                <Link href={buildHref("/services")}>
                  <span>Services</span> 
                </Link>
              </li>

              <li>
                <Link href={buildHref("/")}>
                  <span>Website</span>
                </Link>
              </li>

              <li>
                <Link href={buildHref("/blog")}>
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="headerContact">
            <div className="headerContactItem">
              <Link href={`tel:${contact?.phone || ""}`}>
                <span>Dəstək xətti :</span>
                <strong>{contact?.phone || "-"}</strong>
              </Link>
            </div>
          </div>

          <div className="mobileMenuIcon">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
