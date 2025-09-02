// import Image from "next/image";
// import React from "react";
// import Logo from "@/public/icons/besthostLogo.svg";
// import Arrow from "@/public/icons/arrow.svg";
// import Drop from "@/public/icons/dropdown.svg";

// import Link from "next/link";

// const Header = () => {
//   return (
//     <div id="header">
//       <div className="container">
//         <div className="headerTop">
//           <span>EN</span> <div className="langLine"></div> <span>RU</span>
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
//                      <li>
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
//                      <li>
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
//                      <li>
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
//                 <Link href="/">
//                   <span>Services</span> <Arrow className="activeRotate" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <span>Website</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <span>Blog</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="headerContact">
//             <div className="headerContactItem">
//               <Link href="#">
//                 <span>Dəstək xətti :</span>
//                 <strong>+994 55 475 24 00</strong>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;















"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/icons/besthostLogo.svg";
import Arrow from "@/public/icons/arrow.svg";
import Drop from "@/public/icons/dropdown.svg";
import MenuIcon from "@/public/icons/menu.svg";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Header = ({contact}) => {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  // Default olaraq AZ göstərilsin
  const [locale, setLocale] = useState("az");

  // Mövcud URL-də locale varsa onu default kimi götürək (məs: /en/..., /ru/..., /az/...)
  useEffect(() => {
    const match = pathname.match(/^\/(az|en|ru)(\/|$)/);
    if (match && match[1]) {
      setLocale(match[1]);
    } else {
      setLocale("az");
    }
    // yalnız ilk renderdə çalışması yetərlidir; pathname dəyişsə yenilə
  }, [pathname]);

  const availableLocales = ["az", "en", "ru"];
  const visibleLocales = availableLocales.filter((l) => l !== locale);

  // pathname-dən mövcud locale prefiksini ayır
  const stripLocaleFromPath = (p) => {
    const m = p.match(/^\/(az|en|ru)(\/.*|$)/);
    if (m) {
      // m[2] ya "/rest/..." ya "" isə onu qaytar
      return m[2] || "/";
    }
    return p;
  };

  const changeLocale = (newLocale) => {
    // Lokal vəziyyəti dərhal yenilə
    setLocale(newLocale);

    // Cari path-dən mövcud locale prefiksini götür və yeni locale ilə yenidən qur
    const rest = stripLocaleFromPath(pathname);
    // Əgər rest "/" və ya "" isə target "/" + newLocale
    let target = "";
    if (rest === "/" || rest === "") {
      target = `/${newLocale}`;
    } else {
      // rest artıq əvvəlində "/" olmalıdır (məs: "/products/1")
      target = `/${newLocale}${rest}`;
    }

    // Search param-ları saxla
    const sp = searchParams ? searchParams.toString() : "";
    if (sp) target += `?${sp}`;

    // Push ilə yönləndir
    router.push(target);
  };

  return (
    <div id="header">
      <div className="container">
        <div className="headerTop">
          {/* Görünən dillər: cari dil görüntülenməyəcək, yalnız digər iki dil görünəcək */}
          <span
            role="button"
            tabIndex={0}
            onClick={() => changeLocale(visibleLocales[0])}
            onKeyDown={(e) => { if (e.key === "Enter") changeLocale(visibleLocales[0]); }}
          >
            {visibleLocales[0].toUpperCase()}
          </span>
          <div className="langLine"></div>
          <span
            role="button"
            tabIndex={0}
            onClick={() => changeLocale(visibleLocales[1])}
            onKeyDown={(e) => { if (e.key === "Enter") changeLocale(visibleLocales[1]); }}
          >
            {visibleLocales[1].toUpperCase()}
          </span>
        </div>
        <div className="headerMain">
          <div className="headerLogo">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="headerLinks">
            <ul>
              <li className="dropdown">
                <Link href="/">
                  <span>Hosting</span> <Arrow className="activeRotate" />
                </Link>

                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <Link href="/">
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
                      <Link href="/">
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
                      <Link href="/">
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
                      <Link href="/">
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
                <Link href="/">
                  <span>Domains</span> <Arrow className="activeRotate" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Services</span> <Arrow className="activeRotate" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Website</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="headerContact">
            <div className="headerContactItem">
              <Link href={`tel:${contact.phone}`}>
                <span>Dəstək xətti :</span>
                <strong>{contact.phone}</strong>
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





















// import Image from "next/image";
// import React from "react";
// import Logo from "@/public/icons/besthostLogo.svg";
// import Arrow from "@/public/icons/arrow.svg";
// import Drop from "@/public/icons/dropdown.svg";
// import MenuIcon from "@/public/icons/menu.svg";

// import Link from "next/link";

// const Header = ({contact}) => {
//   return (
//     <div id="header">
//       <div className="container">
//         <div className="headerTop">
//           <span>EN</span> <div className="langLine"></div> <span>RU</span>
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
//                 <Link href="/">
//                   <span>Services</span> <Arrow className="activeRotate" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
//                   <span>Website</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/">
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
