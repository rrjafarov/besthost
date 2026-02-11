
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import HomePageSelectHosting from "./HomePageSelectHosting";

// const HomePageHosting = ({ t, backage, category, contact }) => {
//   const cats = category?.data?.data || [];
//   const [selected, setSelected] = useState(cats?.[0]?.category_name || "");

//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const rafRef = useRef(null);

//   // Easing (yumşaq keçid)
//   const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

//   // container.scrollLeft üçün rAF animasiya
//   const animateScrollLeft = (to, duration = 380) => {
//     const c = containerRef.current;
//     if (!c) return;

//     if (rafRef.current) cancelAnimationFrame(rafRef.current);

//     const start = c.scrollLeft;
//     const change = to - start;
//     if (Math.abs(change) < 1) {
//       c.scrollLeft = to;
//       return;
//     }

//     const startTs = performance.now();
//     const step = (now) => {
//       const t = Math.min(1, (now - startTs) / duration);
//       c.scrollLeft = start + change * easeOutCubic(t);
//       if (t < 1) {
//         rafRef.current = requestAnimationFrame(step);
//       }
//     };
//     rafRef.current = requestAnimationFrame(step);
//   };

//   // Aktiv düyməni konteynerin mərkəzinə gətir
//   const centerActive = (name) => {
//     const c = containerRef.current;
//     const el = btnRefs.current[name];
//     if (!c || !el) return;

//     const left = el.offsetLeft - (c.clientWidth / 2 - el.offsetWidth / 2);
//     const max = Math.max(0, c.scrollWidth - c.clientWidth);
//     const target = Math.max(0, Math.min(left, max));
//     animateScrollLeft(target);
//   };

//   // İlk açılışda horizontal scroll-un bloklanmamasını təmin et
//   useEffect(() => {
//     const c = containerRef.current;
//     if (!c) return;
//     // Hər şey JSX daxilində: inline stillər + lazım gəlsə !important ilə override
//     try {
//       c.style.setProperty("overflow-x", "auto", "important");
//       c.style.setProperty("overflow-y", "hidden", "important");
//       c.style.setProperty("display", "flex", "important");
//       c.style.setProperty("flex-wrap", "nowrap", "important");
//     } catch {}
//     if (selected) centerActive(selected);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Seçilən dəyişəndə mərkəzlə
//   useEffect(() => {
//     if (selected) centerActive(selected);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selected]);

//   // Resize-də də mərkəzlə (opsional, sərt keçidi aradan qaldırır)
//   useEffect(() => {
//     const onResize = () => {
//       if (selected) centerActive(selected);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="homePageHosting">
//       <div className="container">
//         <div className="homePageHostingHeaderText">
//           <h2>{t?.homePageWebsiteTitle || "Lorem ipsum dolor sit amet"}</h2>
//           <p>{t?.homePageWebsiteSubTitle || "Lorem ipsum dolor sit amet."}</p>
//         </div>

//         <div className="homePageHostingHeaderButtons">
//           <div
//             className="homePageHostingSelectButtons"
//             ref={containerRef}
//             // Yalnız horizontal scroll üçün minimal inline stil (rəng yoxdur)
//             style={{
//               overflowX: "auto",
//               overflowY: "hidden",
//               display: "flex",
//               flexWrap: "nowrap",
//             }}
//           >
//             {cats.map((cat) => (
//               <div
//                 key={cat.id}
//                 ref={(el) => {
//                   if (el) btnRefs.current[cat.category_name] = el;
//                 }}
//                 className={
//                   "homePageHostingSelectButton" +
//                   (selected === cat.category_name ? " active" : "")
//                 }
//                 onClick={() => {
//                   setSelected(cat.category_name);
//                   centerActive(cat.category_name);
//                 }}
//                 // Heç bir vizual dəyişiklik yoxdur (rəng/kölgə YOX), transform transition da YOX
//                 style={{}}
//               >
//                 <span>{cat.category_name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="homePageHostingForWebsite">
//           <h2>{t?.homePageHostingTitle}</h2>
//           <p>{t?.homePageHostingSubTitle}</p>
//         </div>

//         <HomePageSelectHosting
//           t={t}
//           backage={backage}
//           selected={selected}
//           contact={contact}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePageHosting;




















































"use client";
import React, { useState, useRef, useEffect } from "react";
import HomePageSelectHosting from "./HomePageSelectHosting";

const HomePageHosting = ({ t, backage, category, contact }) => {
  const cats = category?.data?.data || [];

  const [selected, setSelected] = useState(
    cats?.[0]?.category_name || ""
  );

  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const rafRef = useRef(null);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animateScrollLeft = (to, duration = 380) => {
    const c = containerRef.current;
    if (!c) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const start = c.scrollLeft;
    const change = to - start;

    const startTs = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - startTs) / duration);
      c.scrollLeft = start + change * easeOutCubic(t);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  const centerActive = (name) => {
    const c = containerRef.current;
    const el = btnRefs.current[name];
    if (!c || !el) return;

    const left =
      el.offsetLeft - (c.clientWidth / 2 - el.offsetWidth / 2);
    const max = c.scrollWidth - c.clientWidth;
    animateScrollLeft(Math.max(0, Math.min(left, max)));
  };

  useEffect(() => {
    if (selected) centerActive(selected);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selected) centerActive(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  // 🔑 AKTİV CATEGORY
  const activeCategory = cats.find(
    (item) => item.category_name === selected
  );

  return (
    <div className="homePageHosting">
      <div className="container">

        {/* 🔼 HEADER */}
        <div className="homePageHostingHeaderText">
          <h2>
            {t?.homePageHostTitle}
          </h2>
          <p>
            {t?.homePageWebsiteSubTitle}
          </p>
        </div>

        {/* 🔘 BUTTONLAR */}
        <div className="homePageHostingHeaderButtons">
          <div
            className="homePageHostingSelectButtons"
            ref={containerRef}
            style={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden",
              flexWrap: "nowrap",
            }}
          >
            {cats.map((cat) => (
              <div
                key={cat.id}
                ref={(el) => {
                  if (el)
                    btnRefs.current[cat.category_name] = el;
                }}
                className={
                  "homePageHostingSelectButton" +
                  (selected === cat.category_name
                    ? " active"
                    : "")
                }
                onClick={() => setSelected(cat.category_name)}
              >
                <span>{cat.category_name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔽 ALT HİSSƏ */}
        <div className="homePageHostingForWebsite">
          <h2>
            {activeCategory?.description || t?.homePageHostingTitle}
          </h2>
          <p>
            {activeCategory?.description || t?.homePageHostingSubTitle}
          </p>
        </div>

        <HomePageSelectHosting
          t={t}
          backage={backage}
          selected={selected}
          contact={contact}
        />
      </div>
    </div>
  );
};

export default HomePageHosting;
