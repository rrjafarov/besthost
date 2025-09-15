// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const HomePageSeo = ({ home,t }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [showToggle, setShowToggle] = useState(false);
//   const [maxHeightStyle, setMaxHeightStyle] = useState(null); // string like "200px" or null to omit
//   const contentRef = useRef(null);

//   const VISIBLE_LINES = 6; // neçə tam sətir əvvəlcə göstərilsin
//   const TRANSITION_MS = 300;

//   // saxlanılan collapsedHeight (px) üçün ref
//   const collapsedHeightRef = useRef(null);

//   // content dəyişəndə line-height və collapsedHeight hesabla, toggle lazım olmasını müəyyən et
//   useEffect(() => {
//     const el = contentRef.current;
//     if (!el) {
//       setShowToggle(false);
//       return;
//     }

//     const cs = window.getComputedStyle(el);
//     let lineHeight = parseFloat(cs.lineHeight);
//     if (isNaN(lineHeight)) {
//       const fontSize = parseFloat(cs.fontSize) || 16;
//       lineHeight = Math.round(fontSize * 1.2);
//     } else {
//       lineHeight = Math.round(lineHeight);
//     }

//     const collapsedHeight = lineHeight * VISIBLE_LINES;
//     collapsedHeightRef.current = collapsedHeight;

//     const fullHeight = el.scrollHeight;
//     setShowToggle(fullHeight > collapsedHeight);

//     // ilkin vəziyyətdə (collapsed) explicit collapsedHeight tətbiq et
//     if (!expanded) {
//       setMaxHeightStyle(`${collapsedHeight}px`);
//     } else {
//       // əgər expanded-dirsə açıq vəziyyətdə auto-olmaq üçün maxHeight null qoy
//       // (bu, elementin təbii height ilə davranmasına imkan verir)
//       setMaxHeightStyle(null);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [home?.bottom_content, VISIBLE_LINES]);

//   // transition bitəndə: əgər expanded-dirsə maxHeightStyle null et (auto), əks halda collapsed olaraq saxla
//   const handleTransitionEnd = () => {
//     if (expanded) {
//       // tam açıq halda max-height silinsin ki, responsive olsun
//       setMaxHeightStyle(null);
//     } else {
//       // bağlı halda collapsed px olaraq qalsın (heç bir əlavə iş lazım deyil)
//       const collapsed = collapsedHeightRef.current;
//       if (collapsed) setMaxHeightStyle(`${collapsed}px`);
//     }
//   };

//   // toggle funksiyası: açılma və bağlanma üçün düzgün animasiya ardıcıllığı
//   const handleToggle = () => {
//     const el = contentRef.current;
//     if (!el) {
//       setExpanded((p) => !p);
//       return;
//     }

//     const collapsed = collapsedHeightRef.current || 0;
//     const full = el.scrollHeight;

//     if (!expanded) {
//       // açılırıq: başlanğıc collapsed px-dən -> full px-ə animate
//       // 1) ensure starting point is collapsed px
//       setMaxHeightStyle(`${collapsed}px`);

//       // 2) növbəti frame-də tam hündürlüyə set et ki, transition işləsin
//       requestAnimationFrame(() => {
//         // kiçik başqa rAF ilə də daha etibarlı edir
//         requestAnimationFrame(() => {
//           setMaxHeightStyle(`${full}px`);
//           setExpanded(true);
//         });
//       });
//     } else {
//       // bağlanırıq: başlanğıc full px-dən -> collapsed px-ə animate
//       // 1) ensure starting point is current full px
//       setMaxHeightStyle(`${full}px`);

//       // 2) növbəti frame-də collapsed px-ə set et ki, transition işləsin
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setMaxHeightStyle(`${collapsed}px`);
//           setExpanded(false);
//         });
//       });
//     }
//   };

//   return (
//     <div id="homePageSeo">
//       <div className="container">
//         <div className="homePageSeoContent">
//           <span>{home?.bottom_title}</span>

//           <div
//             ref={contentRef}
//             className="homePageSeoText"
//             style={{
//               maxHeight: maxHeightStyle === null ? undefined : maxHeightStyle,
//               overflow: maxHeightStyle === null ? undefined : "hidden",
//               transition: `max-height ${TRANSITION_MS}ms ease`,
//             }}
//             onTransitionEnd={handleTransitionEnd}
//             dangerouslySetInnerHTML={{ __html: home?.bottom_content }}
//           ></div>

//           {showToggle && (
//             <div
//               className="seoViewMore"
//               role="button"
//               tabIndex={0}
//               onClick={handleToggle}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   handleToggle();
//                 }
//               }}
//               style={{ cursor: "pointer", userSelect: "none" }}
//             >
//               <strong>{expanded ? "-" : "+"}</strong>{" "}
//               {expanded ? t?.viewLess : t?.viewMore}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageSeo;














"use client";
import React, { useState, useRef, useEffect } from "react";

const HomePageSeo = ({ home, t }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [maxHeightStyle, setMaxHeightStyle] = useState(null);
  const contentRef = useRef(null);

  const VISIBLE_LINES = 6;
  const TRANSITION_MS = 300;

  const collapsedHeightRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) {
      setShowToggle(false);
      return;
    }

    // Mətnin tam göstərilməsi üçün müvəqqəti olaraq hündürlük məhdudiyyətini götürürük
    const originalMaxHeight = el.style.maxHeight;
    const originalOverflow = el.style.overflow;
    el.style.maxHeight = 'none';
    el.style.overflow = 'visible';

    const cs = window.getComputedStyle(el);
    let lineHeight = parseFloat(cs.lineHeight);
    if (isNaN(lineHeight)) {
      const fontSize = parseFloat(cs.fontSize) || 16;
      lineHeight = Math.round(fontSize * 1.5); // Daha yaxşı line-height hesablaması
    } else {
      lineHeight = Math.round(lineHeight);
    }

    // Tam mətnin hündürlüyünü ölçürük
    const fullHeight = el.scrollHeight;
    
    // Mətn elementlərini tapırıq (p, div, span, və s.)
    const textElements = el.querySelectorAll('p, div, span, h1, h2, h3, h4, h5, h6');
    let accumulatedHeight = 0;
    let collapsedHeight = lineHeight * VISIBLE_LINES;
    
    // Əgər mətn elementləri varsa, tam cümlələri saxlamağa çalışırıq
    if (textElements.length > 0) {
      for (let i = 0; i < textElements.length; i++) {
        const element = textElements[i];
        const elementHeight = element.offsetHeight;
        
        // Əgər bu elementi əlavə etdikdə VISIBLE_LINES sətrini aşmırıqsa
        if (accumulatedHeight + elementHeight <= lineHeight * VISIBLE_LINES) {
          accumulatedHeight += elementHeight;
        } else {
          // Son elementi tam göstərmək üçün onun hündürlüyünü də əlavə edirik
          if (accumulatedHeight === 0) {
            // Əgər ilk element çox böyükdürsə, minimum olaraq onu göstəririk
            accumulatedHeight = elementHeight;
          }
          break;
        }
      }
      
      // Əgər hesablanan hündürlük 0-dan böyükdürsə, onu istifadə edirik
      if (accumulatedHeight > 0) {
        collapsedHeight = accumulatedHeight + 20; // Kiçik margin əlavə edirik
      }
    }

    collapsedHeightRef.current = collapsedHeight;

    // Orijinal style-ları geri qaytarırıq
    el.style.maxHeight = originalMaxHeight;
    el.style.overflow = originalOverflow;

    setShowToggle(fullHeight > collapsedHeight + 20); // 20px buffer

    if (!expanded) {
      setMaxHeightStyle(`${collapsedHeight}px`);
    } else {
      setMaxHeightStyle(null);
    }
  }, [home?.bottom_content, VISIBLE_LINES]);

  const handleTransitionEnd = () => {
    if (expanded) {
      setMaxHeightStyle(null);
    } else {
      const collapsed = collapsedHeightRef.current;
      if (collapsed) setMaxHeightStyle(`${collapsed}px`);
    }
  };

  const handleToggle = () => {
    const el = contentRef.current;
    if (!el) {
      setExpanded((p) => !p);
      return;
    }

    const collapsed = collapsedHeightRef.current || 0;
    
    // Tam hündürlüyü düzgün hesablamaq üçün müvəqqəti olaraq məhdudiyyətləri götürürük
    const originalMaxHeight = el.style.maxHeight;
    const originalOverflow = el.style.overflow;
    el.style.maxHeight = 'none';
    el.style.overflow = 'visible';
    const full = el.scrollHeight;
    el.style.maxHeight = originalMaxHeight;
    el.style.overflow = originalOverflow;

    if (!expanded) {
      setMaxHeightStyle(`${collapsed}px`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeightStyle(`${full}px`);
          setExpanded(true);
        });
      });
    } else {
      setMaxHeightStyle(`${full}px`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeightStyle(`${collapsed}px`);
          setExpanded(false);
        });
      });
    }
  };

  return (
    <div id="homePageSeo">
      <div className="container">
        <div className="homePageSeoContent">
          <span>{home?.bottom_title}</span>

          <div
            ref={contentRef}
            className="homePageSeoText"
            style={{
              maxHeight: maxHeightStyle === null ? undefined : maxHeightStyle,
              overflow: maxHeightStyle === null ? undefined : "hidden",
              transition: `max-height ${TRANSITION_MS}ms ease`,
            }}
            onTransitionEnd={handleTransitionEnd}
            dangerouslySetInnerHTML={{ __html: home?.bottom_content }}
          ></div>

          {showToggle && (
            <div
              className="seoViewMore"
              role="button"
              tabIndex={0}
              onClick={handleToggle}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle();
                }
              }}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <strong>{expanded ? "-" : "+"}</strong>{" "}
              {expanded ? t?.viewLess : t?.viewMore}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageSeo;