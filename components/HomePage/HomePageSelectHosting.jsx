// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Manat from "@/public/icons/manat.svg";
// import Check from "@/public/icons/check.svg";
// import Ques from "@/public/icons/ques.svg";
// import Link from "next/link";

// const HomePageSelectHosting = () => {
//   const adjustSlideHeights = (swiper) => {
//     swiper.slides.forEach((slideEl) => {
//       if (slideEl.classList.contains("swiper-slide-active")) {
//         slideEl.style.transform = "scaleY(1.05)";
//         slideEl.style.transition = "transform 0.3s ease";
//         slideEl.style.zIndex = "2";
//       } else {
//         slideEl.style.transform = "scaleY(1)";
//         slideEl.style.transition = "transform 0.3s ease";
//         slideEl.style.zIndex = "1";
//       }
//     });
//   };

//   return (
//     <div style={{ overflow: "visible" }}>
//       <Swiper
//         loop={true}
//         slidesPerView={3}
//         spaceBetween={20}
//         centeredSlides={true}
//         speed={1500}
//         onInit={adjustSlideHeights}
//         onSlideChange={adjustSlideHeights}
//       >
//         <SwiperSlide>
//           <div className="homePageHostingCard">
//             <div className="homePageHostingCardTop">
//               <div className="homePageHostingCardTopText">
//                 <span>Single Wordpress</span>
//                 <p>Perfect package for personal websites</p>
//               </div>
//               <div className="homePageHostingCardTopPriceArea">
//                 <div className="homePageHostingCardTopOldPrice">
//                   <span>$56.99</span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopNewPrice">
//                   <span>
//                     $12.99 <Manat className="topManat" />
//                   </span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopMonth">
//                   <span>month</span>
//                 </div>
//               </div>
//               <div className="homePageHostingCardTopSelectPlanButton">
//                 <button>SELECT PLAN</button>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardBottom">
//               <div className="homePageHostingCardSpesificationsList">
//                 <ul>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardSeeMore">
//               <Link href="#">
//                 <span>See More</span>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="homePageHostingCard">
//             <div className="homePageHostingCardTop">
//               <div className="homePageHostingCardTopText">
//                 <span>Single Wordpress</span>
//                 <p>Perfect package for personal websites</p>
//               </div>
//               <div className="homePageHostingCardTopPriceArea">
//                 <div className="homePageHostingCardTopOldPrice">
//                   <span>$56.99</span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopNewPrice">
//                   <span>
//                     $12.99 <Manat className="topManat" />
//                   </span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopMonth">
//                   <span>month</span>
//                 </div>
//               </div>
//               <div className="homePageHostingCardTopSelectPlanButton">
//                 <button>SELECT PLAN</button>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardBottom">
//               <div className="homePageHostingCardSpesificationsList">
//                 <ul>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardSeeMore">
//               <Link href="#">
//                 <span>See More</span>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="homePageHostingCard">
//             <div className="homePageHostingCardTop">
//               <div className="homePageHostingCardTopText">
//                 <span>Single Wordpress</span>
//                 <p>Perfect package for personal websites</p>
//               </div>
//               <div className="homePageHostingCardTopPriceArea">
//                 <div className="homePageHostingCardTopOldPrice">
//                   <span>$56.99</span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopNewPrice">
//                   <span>
//                     $12.99 <Manat className="topManat" />
//                   </span>
//                 </div>
//                 <div className="hostPriceLine"></div>
//                 <div className="homePageHostingCardTopMonth">
//                   <span>month</span>
//                 </div>
//               </div>
//               <div className="homePageHostingCardTopSelectPlanButton">
//                 <button>SELECT PLAN</button>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardBottom">
//               <div className="homePageHostingCardSpesificationsList">
//                 <ul>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                   <li>
//                     <Check />
//                     <span>Up to five web sites</span>
//                     <Ques />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div id="cartTopBottomLine"></div>
//             <div className="homePageHostingCardSeeMore">
//               <Link href="#">
//                 <span>See More</span>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
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

const HomePageSelectHosting = () => {
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
            <li className="splide__slide">
              <div className="homePageHostingCard">
                <div className="homePageHostingCardTop">
                  <div className="homePageHostingCardTopText">
                    <span>Single Wordpress</span>
                    <p>Perfect package for personal websites</p>
                  </div>
                  <div className="homePageHostingCardTopPriceArea">
                    <div className="homePageHostingCardTopOldPrice">
                      <span>$56.99</span>
                    </div>
                    <div className="hostPriceLine" />
                    <div className="homePageHostingCardTopNewPrice">
                      <span>
                        $12.99 <Manat className="topManat" />
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
                      {Array(7)
                        .fill("")
                        .map((_, li) => (
                          <li key={li}>
                            <Check />
                            <span>Up to five web sites</span>
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
            <li className="splide__slide">
              <div className="homePageHostingCard">
                <div className="homePageHostingCardTop">
                  <div className="homePageHostingCardTopText">
                    <span>Single Wordpress</span>
                    <p>Perfect package for personal websites</p>
                  </div>
                  <div className="homePageHostingCardTopPriceArea">
                    <div className="homePageHostingCardTopOldPrice">
                      <span>$56.99</span>
                    </div>
                    <div className="hostPriceLine" />
                    <div className="homePageHostingCardTopNewPrice">
                      <span>
                        $33.99 <Manat className="topManat" />
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
                      {Array(7)
                        .fill("")
                        .map((_, li) => (
                          <li key={li}>
                            <Check />
                            <span>Up to five web sites</span>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePageSelectHosting;

// ! 3 eyni slayd
// "use client";

// import React, { useEffect } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import Manat from "@/public/icons/manat.svg";
// import Check from "@/public/icons/check.svg";
// import Ques from "@/public/icons/ques.svg";
// import Link from "next/link";

// const HomePageSelectHosting = () => {
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
//     });

//     splide.on("mounted", () => {
//       adjustSlideHeights(splide);
//     });

//     splide.on("moved", () => {
//       adjustSlideHeights(splide);
//     });

//     splide.mount();

//     return () => {
//       splide.destroy();
//     };
//   }, []);

//   return (
//     <div style={{ overflow: "visible" }}>
//       <div id="hosting-slider" className="splide">
//         <div className="splide__track">
//           <ul className="splide__list">
//             {[...Array(3)].map((_, i) => (
//               <li key={i} className="splide__slide">
//                 <div className="homePageHostingCard">
//                   <div className="homePageHostingCardTop">
//                     <div className="homePageHostingCardTopText">
//                       <span>Single Wordpress</span>
//                       <p>Perfect package for personal websites</p>
//                     </div>
//                     <div className="homePageHostingCardTopPriceArea">
//                       <div className="homePageHostingCardTopOldPrice">
//                         <span>$56.99</span>
//                       </div>
//                       <div className="hostPriceLine" />
//                       <div className="homePageHostingCardTopNewPrice">
//                         <span>
//                           $12.99 <Manat className="topManat" />
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
//                         {Array(7)
//                           .fill("")
//                           .map((_, li) => (
//                             <li key={li}>
//                               <Check />
//                               <span>Up to five web sites</span>
//                               <Ques />
//                             </li>
//                           ))}
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
