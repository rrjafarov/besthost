// "use client";
// import React, { useEffect } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import Manat from "@/public/icons/manat.svg";
// import Check from "@/public/icons/check.svg";
// import Ques from "@/public/icons/ques.svg";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
  

// const HomePageSelectHosting = ({t, backage, selected,contact }) => {
//   const adjustSlideHeights = (splide) => {
//     const activeIndex = splide.index;
//     const slides = splide.Components.Slides.getSlides();

//     slides.forEach((slide, index) => {
//       const slideEl = slide.slide;
//       const isActive = index === activeIndex;

//       slideEl.style.transform = isActive ? "scaleY(1.05)" : "scaleY(1)";
//       slideEl.style.transition = "transform 0.3s ease";
//       slideEl.style.zIndex = isActive ? "2" : "1";
//     });
//   };


//   const calculateDiscountedPrice = (price, discount) => {
//     const numericPrice = parseFloat(price);
//     const numericDiscount = parseFloat(discount);
//     const discountedPrice = numericPrice - (numericPrice * numericDiscount / 100);
//     return Math.round(discountedPrice);
//   };

//   const filteredPackages = backage?.filter(item => 
//     item.category?.some(cat => cat.category_name === selected)
//   ) || [];

//   useEffect(() => {
//     const splide = new Splide("#hosting-slider", {
//       type: "loop",
//       perPage: 3,
//       gap: "20px",
//       focus: "center",
//       speed: 1500,
//       arrows: false,
//       pagination: false,
//       autoWidth: false,
//       breakpoints: {
//         1024: { perPage: 2, gap: "15px" },
//         768: { perPage: 1, gap: "10px" },
//       },
//     });

//     splide.on("mounted", () => adjustSlideHeights(splide));
//     splide.on("moved", () => adjustSlideHeights(splide));
//     splide.mount();

//     return () => splide.destroy();
//   }, [filteredPackages]);

//   return (
//     <div style={{ overflow: "visible" }}>
//       <div id="hosting-slider" className="splide">
//         <div className="splide__track">
//           <ul className="splide__list">
//             {filteredPackages?.map((item) => {
//               // uyğun kateqoriyanı tap (ilk öncə `selected` ilə uyuşanı, yoxsa ilkini)
//               const matchedCategory = Array.isArray(item.category)
//                 ? item.category.find(c => c.category_name === selected) || item.category[0]
//                 : item.category;
//               const categoryId = matchedCategory?.id;
              
//               const hostingHref = categoryId
//                 ? `/hosting?per_page=12&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${categoryId}`
//                 : `/hosting`;

//               return (
//                 <li className="splide__slide" key={item.id}>
//                   <div className="homePageHostingCard">
//                     <div className="homePageHostingCardTop">
//                       <div className="homePageHostingCardTopText">
//                         <span>{item.card_title}</span>
//                         <p>{item.card_sub_title}</p>
//                       </div>
//                       <div className="homePageHostingCardTopPriceArea">
//                         <div className="homePageHostingCardTopOldPrice">
//                           <span>{item.price} <TbCurrencyManat /></span>
//                         </div>
//                         <div className="hostPriceLine" />
//                         <div className="homePageHostingCardTopNewPrice">
//                           <span>
//                             {calculateDiscountedPrice(item.price, item.discount)} <Manat className="topManat" />
//                           </span>
//                         </div>
//                         <div className="hostPriceLine" />
//                         <div className="homePageHostingCardTopMonth">
//                           <span>{t?.month}</span>
//                         </div>
//                       </div>
//                       <div className="homePageHostingCardTopSelectPlanButton">
//                         <button>{t?.selectPlan}</button>
//                       </div>
//                     </div>
//                     <div id="cartTopBottomLine" />
//                     <div className="homePageHostingCardBottom">
//                       <div className="homePageHostingCardSpesificationsList">
//                         <ul>
//                           {item.package_parametrs?.map((param) => (
//                             <li key={param.id}>
//                               <Check />
//                               <span>{param.title}</span>
//                               <Ques />
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                     <div id="cartTopBottomLine" />
//                     <div className="homePageHostingCardSeeMore">
//                       <Link href={hostingHref}>
//                         <span>{t?.seeMore}</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })} 
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageSelectHosting;























"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Manat from "@/public/icons/manat.svg";
import Check from "@/public/icons/check.svg";
import Ques from "@/public/icons/ques.svg";
import Link from "next/link";
import { TbCurrencyManat } from "react-icons/tb";
  

const HomePageSelectHosting = ({t, backage, selected, contact }) => {
  const adjustSlideHeights = (splide) => {
    const activeIndex = splide.index;
    const slides = splide.Components.Slides.getSlides();

    slides.forEach((slide, index) => {
      const slideEl = slide.slide;
      const isActive = index === activeIndex;

      slideEl.style.transform = isActive ? "scaleY(1.05)" : "scaleY(1)";
      slideEl.style.transition = "transform 0.3s ease";
      slideEl.style.zIndex = isActive ? "2" : "1";
    });
  };


  const calculateDiscountedPrice = (price, discount) => {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount);
    const discountedPrice = numericPrice - (numericPrice * numericDiscount / 100);
    return Math.round(discountedPrice);
  };

  // contact.phone-dan gələn nömrəni WhatsApp üçün uyğun formata çevirir
  const formatPhoneForWhatsApp = (phone) => {
    if (!phone) return "";
    let digits = String(phone).replace(/\D/g, ""); // qeyri-rəqəmləri sil

    if (digits.startsWith("00")) {
      digits = digits.replace(/^00/, "");
    }

    if (digits.startsWith("0")) {
      digits = "994" + digits.slice(1);
    } else if (digits.length === 9) {
      digits = "994" + digits;
    } else if (digits.startsWith("994")) {
      // already ok
    } else {
      // başqa ölkə və ya format ola bilər — həmin halda orijinal rəqəmləri qaytarır
    }

    return digits;
  };

  // Select Plan kliklənəndə contact.phone-a göndərmək üçün wa.me linki yaradır
  const buildWhatsAppHref = (phone, item, matchedCategory) => {
    const phoneDigits = formatPhoneForWhatsApp(phone);
    const price = calculateDiscountedPrice(item.price, item.discount);
    const categoryName = matchedCategory?.category_name || selected || "";
    const message = `${t?.whatsappMessage}:\n${t?.package}: ${item.card_title}\n${t?.price}: ${price} AZN\n${t?.category}: ${categoryName}`;
    const encoded = encodeURIComponent(message);

    if (phoneDigits) {
      return `https://wa.me/${phoneDigits}?text=${encoded}`;
    } else {
      return `https://api.whatsapp.com/send?text=${encoded}`;
    }
  };

  const filteredPackages = backage?.filter(item => 
    item.category?.some(cat => cat.category_name === selected)
  ) || [];

  useEffect(() => {
    const splide = new Splide("#hosting-slider", {
      type: "loop",
      perPage: 3,
      gap: "20px",
      focus: "center",
      speed: 1500,
      arrows: false,
      pagination: false,
      autoWidth: false,
      breakpoints: {
        1024: { perPage: 2, gap: "15px" },
        768: { perPage: 1, gap: "10px" },
      },
    });

    splide.on("mounted", () => adjustSlideHeights(splide));
    splide.on("moved", () => adjustSlideHeights(splide));
    splide.mount();

    return () => splide.destroy();
  }, [filteredPackages]);

  return (
    <div style={{ overflow: "visible" }}>
      <div id="hosting-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {filteredPackages?.map((item) => {
              // uyğun kateqoriyanı tap (ilk öncə `selected` ilə uyuşanı, yoxsa ilkini)
              const matchedCategory = Array.isArray(item.category)
                ? item.category.find(c => c.category_name === selected) || item.category[0]
                : item.category;
              const categorySlug = matchedCategory?.url_slug;
              
              const hostingHref = categorySlug
                ? `/hosting?category=${categorySlug}`
                : `/hosting`;

              return (
                <li className="splide__slide" key={item.id}>
                  <div className="homePageHostingCard">
                    <div className="homePageHostingCardTop">
                      <div className="homePageHostingCardTopText">
                        <span>{item.card_title}</span>
                        <p>{item.card_sub_title}</p>
                      </div>
                      <div className="homePageHostingCardTopPriceArea">
                        <div className="homePageHostingCardTopOldPrice">
                          <span>{item.price} <TbCurrencyManat /></span>
                        </div>
                        <div className="hostPriceLine" />
                        <div className="homePageHostingCardTopNewPrice">
                          <span>
                            {/* {calculateDiscountedPrice(item.price, item.discount)}  */}
                            {item.discount }
                            <Manat className="topManat" />
                          </span>
                        </div>
                        <div className="hostPriceLine" />
                        <div className="homePageHostingCardTopMonth">
                          <span>{t?.month}</span>
                        </div>
                      </div>
                      <div className="homePageHostingCardTopSelectPlanButton">
                        {/* Yalnız buranı dəyişdim: Select Plan kliklənəndə contact.phone-a WhatsApp mesajı göndəriləcək */}
                        <a
                          href={buildWhatsAppHref(contact?.phone, item, matchedCategory)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ilə ${item.card_title} paketini seçmək`}
                        >
                          <button>{t?.selectPlan}</button>
                        </a>
                      </div>
                    </div>
                    <div id="cartTopBottomLine" />
                    <div className="homePageHostingCardBottom">
                      <div className="homePageHostingCardSpesificationsList">
                        <ul>
                          {item.package_parametrs?.map((param) => (
                            <li key={param.id}>
                              <Check />
                              <span>{param.title}</span>
                              <Ques />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div id="cartTopBottomLine" />
                    <div className="homePageHostingCardSeeMore">
                      <Link href={hostingHref}>
                        <span>{t?.seeMore}</span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePageSelectHosting;






















// "use client";
// import React, { useEffect } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import Manat from "@/public/icons/manat.svg";
// import Check from "@/public/icons/check.svg";
// import Ques from "@/public/icons/ques.svg";
// import Link from "next/link";
// import { TbCurrencyManat } from "react-icons/tb";
  

// const HomePageSelectHosting = ({t, backage, selected, contact }) => {
//   const adjustSlideHeights = (splide) => {
//     const activeIndex = splide.index;
//     const slides = splide.Components.Slides.getSlides();

//     slides.forEach((slide, index) => {
//       const slideEl = slide.slide;
//       const isActive = index === activeIndex;

//       slideEl.style.transform = isActive ? "scaleY(1.05)" : "scaleY(1)";
//       slideEl.style.transition = "transform 0.3s ease";
//       slideEl.style.zIndex = isActive ? "2" : "1";
//     });
//   };


//   const calculateDiscountedPrice = (price, discount) => {
//     const numericPrice = parseFloat(price);
//     const numericDiscount = parseFloat(discount);
//     const discountedPrice = numericPrice - (numericPrice * numericDiscount / 100);
//     return Math.round(discountedPrice);
//   };

//   // contact.phone-dan gələn nömrəni WhatsApp üçün uyğun formata çevirir
//   const formatPhoneForWhatsApp = (phone) => {
//     if (!phone) return "";
//     let digits = String(phone).replace(/\D/g, ""); // qeyri-rəqəmləri sil

//     if (digits.startsWith("00")) {
//       digits = digits.replace(/^00/, "");
//     }

//     if (digits.startsWith("0")) {
//       digits = "994" + digits.slice(1);
//     } else if (digits.length === 9) {
//       digits = "994" + digits;
//     } else if (digits.startsWith("994")) {
//       // already ok
//     } else {
//       // başqa ölkə və ya format ola bilər — həmin halda orijinal rəqəmləri qaytarır
//     }

//     return digits;
//   };

//   // Select Plan kliklənəndə contact.phone-a göndərmək üçün wa.me linki yaradır
//   const buildWhatsAppHref = (phone, item, matchedCategory) => {
//     const phoneDigits = formatPhoneForWhatsApp(phone);
//     const price = calculateDiscountedPrice(item.price, item.discount);
//     const categoryName = matchedCategory?.category_name || selected || "";
//     const message = `${t?.whatsappMessage}:\n${t?.package}: ${item.card_title}\n${t?.price}: ${price} AZN\n${t?.category}: ${categoryName}`;
//     const encoded = encodeURIComponent(message);

//     if (phoneDigits) {
//       return `https://wa.me/${phoneDigits}?text=${encoded}`;
//     } else {
//       return `https://api.whatsapp.com/send?text=${encoded}`;
//     }
//   };

//   const filteredPackages = backage?.filter(item => 
//     item.category?.some(cat => cat.category_name === selected)
//   ) || [];

//   useEffect(() => {
//     const splide = new Splide("#hosting-slider", {
//       type: "loop",
//       perPage: 3,
//       gap: "20px",
//       focus: "center",
//       speed: 1500,
//       arrows: false,
//       pagination: false,
//       autoWidth: false,
//       breakpoints: {
//         1024: { perPage: 2, gap: "15px" },
//         768: { perPage: 1, gap: "10px" },
//       },
//     });

//     splide.on("mounted", () => adjustSlideHeights(splide));
//     splide.on("moved", () => adjustSlideHeights(splide));
//     splide.mount();

//     return () => splide.destroy();
//   }, [filteredPackages]);

//   return (
//     <div style={{ overflow: "visible" }}>
//       <div id="hosting-slider" className="splide">
//         <div className="splide__track">
//           <ul className="splide__list">
//             {filteredPackages?.map((item) => {
//               // uyğun kateqoriyanı tap (ilk öncə `selected` ilə uyuşanı, yoxsa ilkini)
//               const matchedCategory = Array.isArray(item.category)
//                 ? item.category.find(c => c.category_name === selected) || item.category[0]
//                 : item.category;
//               const categoryId = matchedCategory?.id;
              
//               const hostingHref = categoryId
//                 ? `/hosting?per_page=12&filters[0][key]=category&filters[0][operator]=IN&filters[0][value][]=${categoryId}`
//                 : `/hosting`;

//               return (
//                 <li className="splide__slide" key={item.id}>
//                   <div className="homePageHostingCard">
//                     <div className="homePageHostingCardTop">
//                       <div className="homePageHostingCardTopText">
//                         <span>{item.card_title}</span>
//                         <p>{item.card_sub_title}</p>
//                       </div>
//                       <div className="homePageHostingCardTopPriceArea">
//                         <div className="homePageHostingCardTopOldPrice">
//                           <span>{item.price} <TbCurrencyManat /></span>
//                         </div>
//                         <div className="hostPriceLine" />
//                         <div className="homePageHostingCardTopNewPrice">
//                           <span>
//                             {/* {calculateDiscountedPrice(item.price, item.discount)}  */}
//                             {item.discount }
//                             <Manat className="topManat" />
//                           </span>
//                         </div>
//                         <div className="hostPriceLine" />
//                         <div className="homePageHostingCardTopMonth">
//                           <span>{t?.month}</span>
//                         </div>
//                       </div>
//                       <div className="homePageHostingCardTopSelectPlanButton">
//                         {/* Yalnız buranı dəyişdim: Select Plan kliklənəndə contact.phone-a WhatsApp mesajı göndəriləcək */}
//                         <a
//                           href={buildWhatsAppHref(contact?.phone, item, matchedCategory)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label={`WhatsApp ilə ${item.card_title} paketini seçmək`}
//                         >
//                           <button>{t?.selectPlan}</button>
//                         </a>
//                       </div>
//                     </div>
//                     <div id="cartTopBottomLine" />
//                     <div className="homePageHostingCardBottom">
//                       <div className="homePageHostingCardSpesificationsList">
//                         <ul>
//                           {item.package_parametrs?.map((param) => (
//                             <li key={param.id}>
//                               <Check />
//                               <span>{param.title}</span>
//                               <Ques />
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                     <div id="cartTopBottomLine" />
//                     <div className="homePageHostingCardSeeMore">
//                       <Link href={hostingHref}>
//                         <span>{t?.seeMore}</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })} 
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageSelectHosting;

