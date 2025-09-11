// "use client";
// import React, { useEffect, useRef } from "react";
// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";

// const HostingSlider = ({comments}) => {
//   const sliderRef = useRef(null);
//   const splideInstance = useRef(null);

//   useEffect(() => {
//     splideInstance.current = new Splide(sliderRef.current, {
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
//     splideInstance.current.mount();
//   }, []);

//   const prev = () => splideInstance.current.go("<");
//   const next = () => splideInstance.current.go(">");

//   return (
//     <div className="container">
//       <div className="hostingSliderWrapper">
//         <button onClick={prev} className="sliderButton leftButton">
//           <img src="/icons/hostLeft.svg" alt="Prev" />
//         </button>

//         <div ref={sliderRef} className="splide sliderCore">
//           <div className="splide__track sliderTrack">
//             <ul className="splide__list sliderList">
//               {/* Slide #1 */}
//               <li className="splide__slide slideItem">
//                 <div className="hostSliderContent">
//                   <div className="hostSliderContentImg">
//                     {/* <img src="/images/homeGridX7.png" alt="" /> */}
//                   </div>
//                   <div className="hostSliderContentText">
//                     <div>
//                       <img src="/icons/paranthez.svg" alt="" />
//                       <img src="/icons/paranthez.svg" alt="" />
//                     </div>
//                     <p>
//                       Est tation latine aliquip id, mea ad tale illud
//                       definitiones. Periculis omittantur necessitatibus eum ad,
//                       pro eripuit minimum comprehensam ne, usu c, usu cu stet
//                       prompta reformidans.
//                     </p>
//                     <span>Connie Robertson at Google</span>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <button onClick={next} className="sliderButton rightButton">
//           <img src="/icons/hostRight.svg" alt="Next" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HostingSlider;






"use client";
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const HostingSlider = ({ comments }) => {
  const sliderRef = useRef(null);
  const splideInstance = useRef(null);

  // normalize incoming prop to an array of items
  const commentsArray = Array.isArray(comments)
    ? comments
    : Array.isArray(comments?.data?.data)
    ? comments.data.data
    : [];

  // Console the data as requested (label "firidun")
  console.log("firidun", commentsArray);

  useEffect(() => {
    // initialize Splide
    if (!sliderRef.current) return;

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

    return () => {
      // cleanup
      try {
        splideInstance.current && splideInstance.current.destroy();
      } catch (e) {
        // ignore
      }
      splideInstance.current = null;
    };
    // only re-run if the ref element changes (not on every render)
    // keeping deps empty to preserve original behavior; slides are rendered from commentsArray
  }, []);

  const prev = () => splideInstance.current && splideInstance.current.go("<");
  const next = () => splideInstance.current && splideInstance.current.go(">");

  return (
    <div className="container">
      <div className="hostingSliderWrapper">
        <button onClick={prev} className="sliderButton leftButton">
          <img src="/icons/hostLeft.svg" alt="Prev" />
        </button>

        <div ref={sliderRef} className="splide sliderCore">
          <div className="splide__track sliderTrack">
            <ul className="splide__list sliderList">
              {commentsArray.length === 0 ? (
                // if no data, render the original static slide (keeps structure intact)
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
              ) : (
                commentsArray.map((item) => (
                  <li key={item.id} className="splide__slide slideItem">
                    <div className="hostSliderContent">
                      <div className="hostSliderContentImg">
                        {item.image ? (
                          <img src={`https://admin-besthost.onestudio.az/storage/${item.image}`} alt={item.title || "image"} />
                        ) : (
                          // keep placeholder commented out as original
                          // <img src="/images/homeGridX7.png" alt="" />
                          null
                        )}
                      </div>
                      <div className="hostSliderContentText">
                        <div>
                          <img src="/icons/paranthez.svg" alt="" />
                          <img src="/icons/paranthez.svg" alt="" />
                        </div>

                        {item.content ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        ) : (
                          <p>{item.title}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              )}
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
