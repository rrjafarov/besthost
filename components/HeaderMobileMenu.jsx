// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Logo from "@/public/icons/besthostLogo.svg";
// import Arrow from "@/public/icons/arrow.svg";
// import Drop from "@/public/icons/dropdown.svg";
// import X from "@/public/icons/x.svg";

// const HeaderMobileMenu = ({ isOpen, onClose, buildHref, contact, t }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   if (!isOpen) return null;

//   const toggleDropdown = (itemName) => {
//     setOpenDropdown(openDropdown === itemName ? null : itemName);
//   };

//   return (
//     <div className="mobile-menu-overlay">
//       <div className="mobile-menu-panel">
//         {/* Header - Logo və Close button */}
//         <div className="mobile-menu-header">
//           <div className="mobile-menu-logo">
//             <Logo />
//           </div>
//           <button
//             className="mobile-menu-close"
//             onClick={onClose}
//             aria-label="Close menu"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="mobile-menu-content">
//           <ul className="mobile-menu-list">
//             {/* Hosting - Dropdown */}
//             <li className="mobile-menu-item">
//               <div
//                 className="mobile-menu-link dropdown-trigger"
//                 onClick={() => toggleDropdown("hosting")}
//               >
//                 <span>Hosting</span>
//                 <Arrow
//                   className={`dropdown-arrow ${
//                     openDropdown === "hosting" ? "rotated" : ""
//                   }`}
//                 />
//               </div>

//               <div
//                 className={`mobile-dropdown ${
//                   openDropdown === "hosting" ? "open" : ""
//                 }`}
//               >
//                 <ul>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Cloud Hosting</span>
//                           <strong>For large scale projects</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Shared Hosting</span>
//                           <strong>For small projects</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>VPS Hosting</span>
//                           <strong>For medium projects</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Dedicated Server</span>
//                           <strong>For enterprise projects</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>

//             {/* Domain - Dropdown */}
//             <li className="mobile-menu-item">
//               <div
//                 className="mobile-menu-link dropdown-trigger"
//                 onClick={() => toggleDropdown("domain")}
//               >
//                 <span>Domain</span>
//                 <Arrow
//                   className={`dropdown-arrow ${
//                     openDropdown === "domain" ? "rotated" : ""
//                   }`}
//                 />
//               </div>

//               <div
//                 className={`mobile-dropdown ${
//                   openDropdown === "domain" ? "open" : ""
//                 }`}
//               >
//                 <ul>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Domain Registration</span>
//                           <strong>Register new domain</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={buildHref("/")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Domain Transfer</span>
//                           <strong>Transfer existing domain</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>

//             {/* Services - Dropdown */}
//             <li className="mobile-menu-item">
//               <div
//                 className="mobile-menu-link dropdown-trigger"
//                 onClick={() => toggleDropdown("services")}
//               >
//                 <span>Services</span>
//                 <Arrow
//                   className={`dropdown-arrow ${
//                     openDropdown === "services" ? "rotated" : ""
//                   }`}
//                 />
//               </div>

//               <div
//                 className={`mobile-dropdown ${
//                   openDropdown === "services" ? "open" : ""
//                 }`}
//               >
//                 <ul>
//                   <li>
//                     <Link href={buildHref("/services")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Web Development</span>
//                           <strong>Custom website development</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href={buildHref("/services")} onClick={onClose}>
//                       <div className="mobile-dropdown-item">
//                         <div className="mobile-dropdown-icon">
//                           <Drop />
//                         </div>
//                         <div className="mobile-dropdown-text">
//                           <span>Technical Support</span>
//                           <strong>24/7 support service</strong>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>

//             {/* Website - Simple Link */}
//             <li className="mobile-menu-item">
//               <Link
//                 href={buildHref("/")}
//                 className="mobile-menu-link"
//                 onClick={onClose}
//               >
//                 <span>Website</span>
//               </Link>
//             </li>

//             {/* Blog - Simple Link */}
//             <li className="mobile-menu-item">
//               <Link
//                 href={buildHref("/blog")}
//                 className="mobile-menu-link"
//                 onClick={onClose}
//               >
//                 <span>Blog</span>
//               </Link>
//             </li>
//           </ul>

//           {/* Contact Info */}
//           <div className="mobile-menu-contact">
//             <div className="mobile-contact-item">
//               <span>{t?.supportLine}:</span>
//               <Link href={`tel:${contact?.phone || ""}`}>
//                 <strong>{contact?.phone || "+994 55 475 24 00"}</strong>
//               </Link>
//             </div>

//             <div className="mobile-contact-item">
//               <span>{t?.contactPageFormEmail}:</span>
//               <Link href={`mailto:${contact.email}`}>
//                 <strong>{contact.email}</strong>
//               </Link>
//             </div>

//             <div className="mobile-contact-item">
//               <span>{t?.address}:</span>
//               <Link href="#">
//                 <strong>{contact.address}</strong>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Header Top burda olacaq */}
//       </div>
//     </div>
//   );
// };

// export default HeaderMobileMenu;

















"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/public/icons/besthostLogo.svg";
import Arrow from "@/public/icons/arrow.svg";
import Drop from "@/public/icons/dropdown.svg";
import X from "@/public/icons/x.svg";

const HeaderMobileMenu = ({ isOpen, onClose, buildHref, contact, t, category }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  if (!isOpen) return null;

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-panel">
        {/* Header - Logo və Close button */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <Logo />
          </div>
          <button
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="mobile-menu-content">
          <ul className="mobile-menu-list">
            {/* Hosting - Dropdown (dinamik kateqoriyalar) */}
            <li className="mobile-menu-item">
              <div
                className="mobile-menu-link dropdown-trigger"
                onClick={() => toggleDropdown("hosting")}
              >
                <span>{t?.hostingPageTitle || "Hosting"}</span>
                <Arrow
                  className={`dropdown-arrow ${
                    openDropdown === "hosting" ? "rotated" : ""
                  }`}
                />
              </div>

              <div
                className={`mobile-dropdown ${
                  openDropdown === "hosting" ? "open" : ""
                }`}
              >
                <ul>
                  {category?.data?.data?.map((categoryItem) => {
                    const categoryId = categoryItem?.id;
                    const hostingHref = categoryId
                      ? buildHref(
                          `/hosting?per_page=12&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${categoryId}`
                        )
                      : buildHref("/hosting");

                    return (
                      <li key={categoryItem.id}>
                        <Link href={hostingHref} onClick={onClose}>
                          <div className="mobile-dropdown-item">
                            <div className="mobile-dropdown-icon">
                              <img
                                src={`https://admin-besthost.onestudio.az/storage/${categoryItem.image}`}
                                alt={categoryItem.title || ""}
                              />
                            </div>
                            <div className="mobile-dropdown-text">
                              <span>{categoryItem.title}</span>
                              <strong>{categoryItem.sub_title}</strong>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}

                  {/* Fallback: əgər kateqoriya yoxdursa ən azı bir link göstər */}
                  {!category?.data?.data?.length && (
                    <li>
                      <Link href={buildHref("/hosting")} onClick={onClose}>
                        <div className="mobile-dropdown-item">
                          <div className="mobile-dropdown-icon">
                            <Drop />
                          </div>
                          <div className="mobile-dropdown-text">
                            <span>{t?.hostingPageTitle || "Hosting"}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </li>

            {/* Domain - Dropdown */}
            <li className="mobile-menu-item">
              <div
                className="mobile-menu-link dropdown-trigger"
                onClick={() => toggleDropdown("domain")}
              >
                <span>{t?.domains || "Domain"}</span>
                {/* <Arrow
                  className={`dropdown-arrow ${
                    openDropdown === "domain" ? "rotated" : ""
                  }`}
                /> */}
              </div>

              {/* <div
                className={`mobile-dropdown ${
                  openDropdown === "domain" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link href={buildHref("/")} onClick={onClose}>
                      <div className="mobile-dropdown-item">
                        <div className="mobile-dropdown-icon">
                          <Drop />
                        </div>
                        <div className="mobile-dropdown-text">
                          <span>Domain Registration</span>
                          <strong>Register new domain</strong>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={buildHref("/")} onClick={onClose}>
                      <div className="mobile-dropdown-item">
                        <div className="mobile-dropdown-icon">
                          <Drop />
                        </div>
                        <div className="mobile-dropdown-text">
                          <span>Domain Transfer</span>
                          <strong>Transfer existing domain</strong>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </li>

            {/* Services - Dropdown */}
            <li className="mobile-menu-item">
              <div
                className="mobile-menu-link dropdown-trigger"
                onClick={() => toggleDropdown("services")}
              >
                <span>{t?.servicesPageTitle || "Services"}</span>
                {/* <Arrow
                  className={`dropdown-arrow ${
                    openDropdown === "services" ? "rotated" : ""
                  }`}
                /> */}
              </div>

              {/* <div
                className={`mobile-dropdown ${
                  openDropdown === "services" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link href={buildHref("/services")} onClick={onClose}>
                      <div className="mobile-dropdown-item">
                        <div className="mobile-dropdown-icon">
                          <Drop />
                        </div>
                        <div className="mobile-dropdown-text">
                          <span>Web Development</span>
                          <strong>Custom website development</strong>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={buildHref("/services")} onClick={onClose}>
                      <div className="mobile-dropdown-item">
                        <div className="mobile-dropdown-icon">
                          <Drop />
                        </div>
                        <div className="mobile-dropdown-text">
                          <span>Technical Support</span>
                          <strong>24/7 support service</strong>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </li>

            {/* Website - Simple Link */}
            <li className="mobile-menu-item">
              <Link
                href={buildHref("/")}
                className="mobile-menu-link"
                onClick={onClose}
              >
                <span>{t?.website || "Website"}</span>
              </Link>
            </li>

            {/* Blog - Simple Link */}
            <li className="mobile-menu-item">
              <Link
                href={buildHref("/blog")}
                className="mobile-menu-link"
                onClick={onClose}
              >
                <span>{t?.blogPageTitle || "Blog"}</span>
              </Link>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mobile-menu-contact">
            <div className="mobile-contact-item">
              <span>{t?.supportLine}:</span>
              <Link href={`tel:${contact?.phone || ""}`}>
                <strong>{contact?.phone || "+994 55 475 24 00"}</strong>
              </Link>
            </div>

            <div className="mobile-contact-item">
              <span>{t?.contactPageFormEmail}:</span>
              <Link href={`mailto:${contact.email}`}>
                <strong>{contact.email}</strong>
              </Link>
            </div>

            <div className="mobile-contact-item">
              <span>{t?.address}:</span>
              <Link href="#">
                <strong>{contact.address}</strong>
              </Link>
            </div>
          </div>
        </div>

        {/* Header Top burda olacaq */}
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
