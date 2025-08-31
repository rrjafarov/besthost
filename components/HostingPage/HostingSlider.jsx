// "use client";
// import React, { useEffect } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import Image from "next/image";

// const HostingSlider = () => {
//   useEffect(() => {
//     const splide = new Splide("#main-slider", {
//       type: "loop",
//       perPage: 1,
//       gap: "2rem",
//       autoplay: true,
//       interval: 3000,
//       speed: 1500,
//       pauseOnHover: true,
//       pauseOnFocus: false,
//       arrows: false,
//       pagination: false,
//     });

//     splide.mount({});
//   }, []);
//   return (
//     <div>
//       <div id="main-slider" className="splide">
//         <div className="splide__track">
//           <ul className="splide__list">
//             <li className="splide__slide">

//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostingSlider;










"use client";
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const HostingSlider = () => {
  const sliderRef = useRef(null);
  const splideInstance = useRef(null);

  useEffect(() => {
    splideInstance.current = new Splide(sliderRef.current, {
      type: "loop",
      perPage: 1,
      gap: "2rem",
      autoplay: true,
      interval: 3000,
      speed: 1500,
      pauseOnHover: true,
      pauseOnFocus: false,
      arrows: false,
      pagination: false,
    });
    splideInstance.current.mount();
  }, []);

  const prev = () => splideInstance.current.go("<");
  const next = () => splideInstance.current.go(">");

  return (
    <div className="container">
      <div className="hostingSliderWrapper">
        <button onClick={prev} className="sliderButton leftButton">
          <img src="/icons/hostLeft.svg" alt="Prev" />
        </button>

        <div ref={sliderRef} className="splide sliderCore">
          <div className="splide__track sliderTrack">
            <ul className="splide__list sliderList">
              {/* Slide #1 */}
              <li className="splide__slide slideItem">
                <div className="hostSliderContent">
                  <div className="hostSliderContentImg">
                    {/* <img src="/images/homeGridX7.png" alt="" /> */}
                  </div>
                  <div className="hostSliderContentText">
                    <div>
                      <img src="/icons/paranthez.svg" alt="" />
                      <img src="/icons/paranthez.svg" alt="" />
                    </div>
                    <p>
                      Est tation latine aliquip id, mea ad tale illud
                      definitiones. Periculis omittantur necessitatibus eum ad,
                      pro eripuit minimum comprehensam ne, usu c, usu cu stet
                      prompta reformidans.
                    </p>
                    <span>Connie Robertson at Google</span>
                  </div>
                </div>
              </li>
              <li className="splide__slide slideItem">
                <div className="hostSliderContent">
                  <div className="hostSliderContentImg">
                    {/* <img src="/images/homeGridX7.png" alt="" /> */}
                  </div>
                  <div className="hostSliderContentText">
                    <div>
                      <img src="/icons/paranthez.svg" alt="" />
                      <img src="/icons/paranthez.svg" alt="" />
                    </div>
                    <p>
                      Est tation latine aliquip id, mea ad tale illud
                      definitiones. Periculis omittantur necessitatibus eum ad,
                      pro eripuit minimum comprehensam ne, usu c, usu cu stet
                      prompta reformidans.
                    </p>
                    <span>Connie Robertson at Google</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button onClick={next} className="sliderButton rightButton">
          <img src="/icons/hostRight.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default HostingSlider;
