// "use client";

// import React, { useEffect } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import Manat from "@/public/icons/manat.svg";
// import Check from "@/public/icons/check.svg";
// import Ques from "@/public/icons/ques.svg";
// import Link from "next/link";

// const HomePageSelectHosting = ({ backage }) => {
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
//   }, []);

//   return (
//     <div style={{ overflow: "visible" }}>
//       <div id="hosting-slider" className="splide">
//         <div className="splide__track">
//           <ul className="splide__list">
//             {backage?.map((item) => (
//               <li className="splide__slide" key={item.id}>
//                 <div className="homePageHostingCard">
//                   <div className="homePageHostingCardTop">
//                     <div className="homePageHostingCardTopText">
//                       <span>{item.card_title}</span>
//                       <p>{item.card_sub_title}</p>
//                     </div>
//                     <div className="homePageHostingCardTopPriceArea">
//                       <div className="homePageHostingCardTopOldPrice">
//                         <span>{item.price}</span>
//                       </div>
//                       <div className="hostPriceLine" />
//                       <div className="homePageHostingCardTopNewPrice">
//                         <span>
//                           {item.discount} <Manat className="topManat" />
//                         </span>
//                       </div>
//                       <div className="hostPriceLine" />
//                       <div className="homePageHostingCardTopMonth">
//                         <span>month</span>
//                       </div>
//                     </div>
//                     <div className="homePageHostingCardTopSelectPlanButton">
//                       <button>SELECT PLAN</button>
//                     </div>
//                   </div>
//                   <div id="cartTopBottomLine" />
//                   <div className="homePageHostingCardBottom">
//                     <div className="homePageHostingCardSpesificationsList">
//                       <ul>
//                         {item.package_parametrs?.map((param) => (
//                           <li key={param.id}>
//                             <Check />
//                             <span>{param.title}</span>
//                             <Ques />
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                   <div id="cartTopBottomLine" />
//                   <div className="homePageHostingCardSeeMore">
//                     <Link href="#">
//                       <span>See More</span>
//                     </Link>
//                   </div>
//                 </div>
//               </li>
//             ))}

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
  

const HomePageSelectHosting = ({ backage }) => {
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

  // Discount hesablama funksiyası
  const calculateDiscountedPrice = (price, discount) => {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount);
    const discountedPrice = numericPrice - (numericPrice * numericDiscount / 100);
    return Math.round(discountedPrice);
  };

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
  }, []);

  return (
    <div style={{ overflow: "visible" }}>
      <div id="hosting-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {backage?.map((item) => (
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
                          {calculateDiscountedPrice(item.price, item.discount)} <Manat className="topManat" />
                        </span>
                      </div>
                      <div className="hostPriceLine" />
                      <div className="homePageHostingCardTopMonth">
                        <span>month</span>
                      </div>
                    </div>
                    <div className="homePageHostingCardTopSelectPlanButton">
                      <button>SELECT PLAN</button>
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
                    <Link href="#">
                      <span>See More</span>
                    </Link>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePageSelectHosting;