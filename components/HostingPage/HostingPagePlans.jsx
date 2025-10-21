// "use client";

// import React from "react";
// import Tick from "@/public/icons/tick.svg";
// import X from "@/public/icons/x.svg";

// const HostingPagePlans = ({ backage,t, contact }) => {
//   const packagesArray = Array.isArray(backage)
//     ? backage
//     : (backage && (Array.isArray(backage.data) ? backage.data : backage.data?.data)) || [];

//   const features = [];
//   packagesArray.forEach((pkg) => {
//     (pkg.package_parametrs || []).forEach((param) => {
//       (param.top_parametr || param.top_parametrs || []).forEach((tp) => {
//         const title = tp?.title?.toString?.().trim();
//         if (title && !features.includes(title)) features.push(title);
//       });
//     });
//   });

//   const isValueLike = (str) => {
//     if (!str) return false;
//     return /\d/.test(str) || /\bGB\b/i.test(str) || /\bsite\b/i.test(str) || /\bsites\b/i.test(str);
//   };

//   // Qiyməti faizlə hesablamaq üçün funksiya (indi TAM — Math.round ilə)
//   const getFinalPrice = (price, discount) => {
//     if (!price) return "";
//     let finalPrice = parseFloat(price);
//     if (discount && !isNaN(discount)) {
//       finalPrice = finalPrice - (finalPrice * discount) / 100;
//     }
//     return Math.round(finalPrice); // indi tam ədəd olaraq qaytarır
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
//   const buildWhatsAppHref = (phone, pkg, matchedCategory) => {
//     const phoneDigits = formatPhoneForWhatsApp(phone);
//     const price = getFinalPrice(pkg.price, pkg.discount);
//     const categoryName = matchedCategory?.category_name || matchedCategory?.name || "";
//     const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || ""}`;
//     const message = `${t?.whatsappMessage}: \n${t?.package}: ${planName}\n${t?.price}: ${price ? price + " AZN" : ""}\n${t?.category}: ${categoryName}`;
//     const encoded = encodeURIComponent(message);

//     if (phoneDigits) {
//       return `https://wa.me/${phoneDigits}?text=${encoded}`;
//     } else {
//       return `https://api.whatsapp.com/send?text=${encoded}`;
//     }
//   };

//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <h1>{t?.hostingPageCompareTitle}</h1>
//       </div>
//       <div className="hostingPagePlansVerticalSection">
//         <div className="hostingPagePlansVertical">
//           <div className="planFeaturesColumn">
//             <div className="planFeaturesHeader">{t?.planFeatures}</div>
//             {features.map((f, i) => (
//               <div className="featureItem" key={f + i}>
//                 {f}
//               </div>
//             ))}
//             <div className="selectButtonPlaceholder"></div>
//           </div>

//           {packagesArray.map((pkg, pkgIndex) => {
//             const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
//             const planPrice = getFinalPrice(pkg.price, pkg.discount);
//             const pkgParams = pkg.package_parametrs || [];

//             const matchedCategory = Array.isArray(pkg.category)
//               ? pkg.category[0]
//               : pkg.category;

//             return (
//               <div className="planColumn" key={pkg.id || planName || pkgIndex}>
//                 <div className="planHeader">
//                   <div className="planName">{planName} | </div>
//                   <div className="planPrice">
//                     {planPrice ? `${planPrice} ₼` : ""}
//                   </div>
//                 </div>

//                 {features.map((feature, idx) => {
//                   const foundParam = pkgParams.find((p) =>
//                     (p.top_parametr || p.top_parametrs || []).some((tp) => tp?.title === feature)
//                   );

//                   if (foundParam) {
//                     const value = (foundParam.title ?? "").toString();
//                     if (isValueLike(value)) {
//                       return (
//                         <div className="planValue" key={feature + idx}>
//                           {value}
//                         </div>
//                       );
//                     } else {
//                       return (
//                         <div className="planValue checkmark" key={feature + idx}>
//                           <Tick />
//                         </div>
//                       );
//                     }
//                   }

//                   return (
//                     <div className="planValue cross" key={feature + idx}>
//                       <X />
//                     </div>
//                   );
//                 })}

//                 <button
//                   className={`selectPlanBtn ${pkg.isActive ? "active" : ""}`.trim()}
//                   onClick={() => {
//                     try {
//                       const href = buildWhatsAppHref(contact?.phone, pkg, matchedCategory);
//                       if (typeof window !== "undefined") {
//                         window.open(href, "_blank", "noopener,noreferrer");
//                       } else {
//                         // server-side environment-də heç nə etməyirik
//                       }
//                     } catch (e) {
//                       console.error("WhatsApp yönləndirmə zamanı xəta:", e);
//                     }
//                   }}
//                 >
//                   {t?.selectPlan}
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostingPagePlans;




















"use client";
import React from "react";
import Tick from "@/public/icons/tick.svg";
import X from "@/public/icons/x.svg";

const HostingPagePlans = ({ backage, t, contact }) => {
  const packagesArray = Array.isArray(backage)
    ? backage
    : backage && (Array.isArray(backage.data) ? backage.data : backage.data?.data) || [];

  const features = [];
  packagesArray.forEach((pkg) => {
    (pkg.package_parametrs || []).forEach((param) => {
      (param.top_parametr || param.top_parametrs || []).forEach((tp) => {
        const title = tp?.title?.toString?.().trim();
        if (title && !features.includes(title)) features.push(title);
      });
    });
  });

  const isValueLike = (str) => {
    if (!str) return false;
    return (
      /\d/.test(str) ||
      /\bGB\b/i.test(str) ||
      /\bsite\b/i.test(str) ||
      /\bsites\b/i.test(str)
    );
  };

  // Discount dəyərini birbaşa göstər
  const getDiscount = (discount) => {
    if (!discount) return "";
    return Math.round(discount);
  };

  const formatPhoneForWhatsApp = (phone) => {
    if (!phone) return "";
    let digits = String(phone).replace(/\D/g, "");
    if (digits.startsWith("00")) {
      digits = digits.replace(/^00/, "");
    }
    if (digits.startsWith("0")) {
      digits = "994" + digits.slice(1);
    } else if (digits.length === 9) {
      digits = "994" + digits;
    } else if (digits.startsWith("994")) {
      // already ok
    }
    return digits;
  };

  const buildWhatsAppHref = (phone, pkg, matchedCategory) => {
    const phoneDigits = formatPhoneForWhatsApp(phone);
    const discount = getDiscount(pkg.discount);
    const categoryName = matchedCategory?.category_name || matchedCategory?.name || "";
    const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || ""}`;
    const message = `${t?.whatsappMessage}: \n${t?.package}: ${planName}\n${t?.discount}: ${discount ? discount + "%" : ""}\n${t?.category}: ${categoryName}`;
    const encoded = encodeURIComponent(message);

    if (phoneDigits) {
      return `https://wa.me/${phoneDigits}?text=${encoded}`;
    } else {
      return `https://api.whatsapp.com/send?text=${encoded}`;
    }
  };

  return (
    <div className="container">
      <div className="hostingPagePlans">
        <h1>{t?.hostingPageCompareTitle}</h1>
      </div>
      <div className="hostingPagePlansVerticalSection">
        <div className="hostingPagePlansVertical">
          <div className="planFeaturesColumn">
            <div className="planFeaturesHeader">{t?.planFeatures}</div>
            {features.map((f, i) => (
              <div className="featureItem" key={f + i}>
                {f}
              </div>
            ))}
            <div className="selectButtonPlaceholder"></div>
          </div>
          {packagesArray.map((pkg, pkgIndex) => {
            const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
            const planDiscount = getDiscount(pkg.discount);
            const pkgParams = pkg.package_parametrs || [];
            const matchedCategory = Array.isArray(pkg.category)
              ? pkg.category[0]
              : pkg.category;

            return (
              <div className="planColumn" key={pkg.id || planName || pkgIndex}>
                <div className="planHeader">
                  <div className="planName">{planName} | </div>
                  <div className="planPrice">
                    {planDiscount ? `${planDiscount} ₼` : ""}
                  </div>
                </div>
                {features.map((feature, idx) => {
                  const foundParam = pkgParams.find((p) =>
                    (p.top_parametr || p.top_parametrs || []).some(
                      (tp) => tp?.title === feature
                    )
                  );

                  if (foundParam) {
                    const value = (foundParam.title ?? "").toString();
                    if (isValueLike(value)) {
                      return (
                        <div className="planValue" key={feature + idx}>
                          {value}
                        </div>
                      );
                    } else {
                      return (
                        <div className="planValue checkmark" key={feature + idx}>
                          <Tick />
                        </div>
                      );
                    }
                  }
                  return (
                    <div className="planValue cross" key={feature + idx}>
                      <X />
                    </div>
                  );
                })}
                <button
                  className={`selectPlanBtn ${pkg.isActive ? "active" : ""}`.trim()}
                  onClick={() => {
                    try {
                      const href = buildWhatsAppHref(contact?.phone, pkg, matchedCategory);
                      if (typeof window !== "undefined") {
                        window.open(href, "_blank", "noopener,noreferrer");
                      }
                    } catch (e) {
                      console.error("WhatsApp yönləndirmə zamanı xəta:", e);
                    }
                  }}
                >
                  {t?.selectPlan}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HostingPagePlans;






























// import React from "react";
// import Tick from "@/public/icons/tick.svg";
// import X from "@/public/icons/x.svg";

// const HostingPagePlans = ({ backage,t, contact }) => {
//   const packagesArray = Array.isArray(backage)
//     ? backage
//     : (backage && (Array.isArray(backage.data) ? backage.data : backage.data?.data)) || [];

//   const features = [];
//   packagesArray.forEach((pkg) => {
//     (pkg.package_parametrs || []).forEach((param) => {
//       (param.top_parametr || param.top_parametrs || []).forEach((tp) => {
//         const title = tp?.title?.toString?.().trim();
//         if (title && !features.includes(title)) features.push(title);
//       });
//     });
//   });

//   const isValueLike = (str) => {
//     if (!str) return false;
//     return /\d/.test(str) || /\bGB\b/i.test(str) || /\bsite\b/i.test(str) || /\bsites\b/i.test(str);
//   };

//   // Qiyməti faizlə hesablamaq üçün funksiya
//   const getFinalPrice = (price, discount) => {
//     if (!price) return "";
//     let finalPrice = parseFloat(price);
//     if (discount && !isNaN(discount)) {
//       finalPrice = finalPrice - (finalPrice * discount) / 100;
//     }
//     return finalPrice.toFixed(2); // məsələn 123.45
//   };

//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <span>{t?.hostingPageCompareTitle}</span>
//       </div>
//       <div className="hostingPagePlansVerticalSection">
//         <div className="hostingPagePlansVertical">
//           <div className="planFeaturesColumn">
//             <div className="planFeaturesHeader">{t?.planFeatures}</div>
//             {features.map((f, i) => (
//               <div className="featureItem" key={f + i}>
//                 {f}
//               </div>
//             ))}
//             <div className="selectButtonPlaceholder"></div>
//           </div>

//           {packagesArray.map((pkg, pkgIndex) => {
//             const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
//             const planPrice = getFinalPrice(pkg.price, pkg.discount);
//             const pkgParams = pkg.package_parametrs || [];

//             return (
//               <div className="planColumn" key={pkg.id || planName || pkgIndex}>
//                 <div className="planHeader">
//                   <div className="planName">{planName} | </div>
//                   {/* <span className="divider">|</span> */}
//                   <div className="planPrice">
//                     {planPrice ? `${planPrice} ₼` : ""}
//                   </div>
//                 </div>

//                 {features.map((feature, idx) => {
//                   const foundParam = pkgParams.find((p) =>
//                     (p.top_parametr || p.top_parametrs || []).some((tp) => tp?.title === feature)
//                   );

//                   if (foundParam) {
//                     const value = (foundParam.title ?? "").toString();
//                     if (isValueLike(value)) {
//                       return (
//                         <div className="planValue" key={feature + idx}>
//                           {value}
//                         </div>
//                       );
//                     } else {
//                       return (
//                         <div className="planValue checkmark" key={feature + idx}>
//                           <Tick />
//                         </div>
//                       );
//                     }
//                   }

//                   return (
//                     <div className="planValue cross" key={feature + idx}>
//                       <X />
//                     </div>
//                   );
//                 })}

//                 <button className={`selectPlanBtn ${pkg.isActive ? "active" : ""}`.trim()}>
//                   {t?.selectPlan}
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostingPagePlans;
