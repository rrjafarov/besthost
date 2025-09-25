// "use client";
// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// // Swiper styles import edin
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const HeroSlider = ({ home, partner }) => {
//   return (
//     <div className="container">
//       <div className="partnersSliderWrapper">
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           slidesPerView={5}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{
//             clickable: true,
//             el: ".swiper-pagination",
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             480: {
//               slidesPerView: 2,
//               spaceBetween: 15,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 25,
//             },
//             1200: {
//               slidesPerView: 5,
//               spaceBetween: 30,
//             },
//           }}
//           className="partnersSwiper"
//         >
//           {partner?.data?.data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="partnersImageLogo">
//                 <Image
//                   width={500}
//                   height={500}
//                   alt={`${item.name || 'Partner'} brand logo`}
//                   src={
//                     item?.logo
//                       ? `https://admin-besthost.onestudio.az/storage/${item.logo}`
//                       : "/images/brandsHero.png"
//                   }
//                   className="partnerLogo"
//                   priority={false}
//                   loading="lazy"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;









"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles import edin
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = ({ home, partner }) => {
  return (
    <div className="container">
      <div className="partnersSliderWrapper">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0, // 0 olunca duraksamasız kayar
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={15000} // Hızı ayarlayabilirsin, büyük değer = daha yavaş sürekli kayma
          allowTouchMove={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="partnersSwiper"
        >
          {partner?.data?.data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="partnersImageLogo">
                <Image
                  width={500}
                  height={500}
                  alt={`${item.name || "Partner"} brand logo`}
                  src={
                    item?.logo
                      ? `https://admin-besthost.onestudio.az/storage/${item.logo}`
                      : "/images/brandsHero.png"
                  }
                  className="partnerLogo"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Inline CSS ile linear geçiş ekliyoruz */}
      <style jsx>{`
        .partnersSwiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
