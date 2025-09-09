
// import React from "react";
// import Tick from "@/public/icons/tick.svg";
// import X from "@/public/icons/x.svg";


// const HostingPagePlans = ({backage}) => {
//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <span>Compare All WordPress Hosting Plans</span>
//       </div>
//       <div className="hostingPagePlansVerticalSection">
//         <div className="hostingPagePlansVertical">
//           <div className="planFeaturesColumn">
//             <div className="planFeaturesHeader">Plan Features</div>
//             <div className="featureItem">Websites</div>
//             <div className="featureItem">SSD Storage</div>
//             <div className="featureItem">Bandwidth</div>
//             <div className="featureItem">MySQL Databases</div>
//             <div className="featureItem">Free Domain Registration</div>
//             <div className="featureItem">Free SSL Certificate</div>
//             <div className="featureItem">Free Dedicated IP</div>
//             <div className="featureItem">Email Accounts</div>
//             <div className="featureItem">Free Domain Registration</div>
//             <div className="featureItem">Free SSL Certificate</div>
//             <div className="featureItem">Free Dedicated IP</div>
//             <div className="selectButtonPlaceholder"></div>
//           </div>

//           <div className="planColumn starter">
//             <div className="planHeader">
//               <div className="planName">Starter</div>
//               <div className="planPrice">2.99</div>
//             </div>
//             <div className="planValue">1 site</div>
//             <div className="planValue">30 GB</div>
//             <div className="planValue">Unlimited</div>
//             <div className="planValue">Unlimited</div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue">100</div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <button className="selectPlanBtn active">SELECT PLAN</button>
//           </div>

//           <div className="planColumn business">
//             <div className="planHeader">
//               <div className="planName">Business</div>
//               <div className="planPrice">8.99</div>
//             </div>
//             <div className="planValue">2 sites</div>
//             <div className="planValue">100 GB</div>
//             <div className="planValue">100 GB</div>
//             <div className="planValue">2</div>
//             <div className="planValue cross"><X/></div>
//             <div className="planValue cross"><X/></div>
//             <div className="planValue cross"><X/></div>
//             <div className="planValue">10</div>
//             <div className="planValue cross"><X/></div>
//             <div className="planValue cross"><X/></div>
//             <div className="planValue cross"><X/></div>
//             <button className="selectPlanBtn">SELECT PLAN</button>
//           </div>

//           <div className="planColumn single">
//             <div className="planHeader">
//               <div className="planName">Single</div>
//               <div className="planPrice">12.99</div>
//             </div>
//             <div className="planValue">3 sites</div>
//             <div className="planValue">300 GB</div>
//             <div className="planValue">Unlimited</div>
//             <div className="planValue">Unlimited</div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue">200</div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <div className="planValue checkmark"><Tick/></div>
//             <button className="selectPlanBtn">SELECT PLAN</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostingPagePlans;








import React from "react";
import Tick from "@/public/icons/tick.svg";
import X from "@/public/icons/x.svg";

const HostingPagePlans = ({ backage }) => {
  const packagesArray = Array.isArray(backage)
    ? backage
    : (backage && (Array.isArray(backage.data) ? backage.data : backage.data?.data)) || [];

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
    return /\d/.test(str) || /\bGB\b/i.test(str) || /\bsite\b/i.test(str) || /\bsites\b/i.test(str);
  };

  // Qiyməti faizlə hesablamaq üçün funksiya
  const getFinalPrice = (price, discount) => {
    if (!price) return "";
    let finalPrice = parseFloat(price);
    if (discount && !isNaN(discount)) {
      finalPrice = finalPrice - (finalPrice * discount) / 100;
    }
    return finalPrice.toFixed(2); // məsələn 123.45
  };

  return (
    <div className="container">
      <div className="hostingPagePlans">
        <span>Compare All WordPress Hosting Plans</span>
      </div>
      <div className="hostingPagePlansVerticalSection">
        <div className="hostingPagePlansVertical">
          <div className="planFeaturesColumn">
            <div className="planFeaturesHeader">Plan Features</div>
            {features.map((f, i) => (
              <div className="featureItem" key={f + i}>
                {f}
              </div>
            ))}
            <div className="selectButtonPlaceholder"></div>
          </div>

          {packagesArray.map((pkg, pkgIndex) => {
            const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
            const planPrice = getFinalPrice(pkg.price, pkg.discount);
            const pkgParams = pkg.package_parametrs || [];

            return (
              <div className="planColumn" key={pkg.id || planName || pkgIndex}>
                <div className="planHeader">
                  <div className="planName">{planName} | </div>
                  {/* <span className="divider">|</span> */}
                  <div className="planPrice">
                    {planPrice ? `${planPrice} ₼` : ""}
                  </div>
                </div>

                {features.map((feature, idx) => {
                  const foundParam = pkgParams.find((p) =>
                    (p.top_parametr || p.top_parametrs || []).some((tp) => tp?.title === feature)
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

                <button className={`selectPlanBtn ${pkg.isActive ? "active" : ""}`.trim()}>
                  SELECT PLAN
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

// const HostingPagePlans = ({ backage }) => {
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

//   // Qiymət hesablama funksiyası (faizə görə endirim)
//   const calculateDiscountedPrice = (originalPrice, discountPercent = 20) => {
//     const numPrice = parseFloat(originalPrice);
//     if (isNaN(numPrice)) return originalPrice;
    
//     const discountedPrice = numPrice * (1 - discountPercent / 100);
//     return discountedPrice.toFixed(2);
//   };

//   // Qiymət formatlaşdırma
//   const formatPrice = (price, discountPercent = 20) => {
//     const numPrice = parseFloat(price);
//     if (isNaN(numPrice)) return price;
    
//     const originalPrice = numPrice;
//     const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercent);
    
//     return {
//       original: originalPrice.toFixed(2),
//       discounted: discountedPrice,
//       discount: discountPercent
//     };
//   };

//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <span>Compare All WordPress Hosting Plans</span>
//       </div>
//       <div className="hostingPagePlansVerticalSection">
//         <div className="hostingPagePlansVertical">
//           <div className="planFeaturesColumn">
//             <div className="planFeaturesHeader">Plan Features</div>
//             {features.map((f, i) => (
//               <div className="featureItem" key={f + i}>
//                 {f}
//               </div>
//             ))}
//             <div className="selectButtonPlaceholder"></div>
//           </div>

//           {packagesArray.map((pkg, pkgIndex) => {
//             const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
//             const rawPrice = pkg.price ?? "";
//             const pkgParams = pkg.package_parametrs || [];
            
//             // Qiymət məlumatlarını əldə et
//             const priceInfo = rawPrice ? formatPrice(rawPrice) : null;

//             return (
//               <div className="planColumn" key={pkg.id || planName || pkgIndex}>
//                 <div className="planHeader">
//                   <div className="planName">{planName}</div>
//                   <div className="planPriceDivider">|</div>
//                   <div className="planPrice">
//                     {priceInfo ? (
//                       <>
//                         <div className="originalPrice">
//                           <span className="strikethrough">{priceInfo.original} ₼</span>
//                         </div>
//                         <div className="discountedPrice">
//                           {priceInfo.discounted} ₼ <span className="period">| ay</span>
//                         </div>
//                         <div className="discountBadge">
//                           {priceInfo.discount}% ENDİRİM
//                         </div>
//                       </>
//                     ) : (
//                       rawPrice
//                     )}
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
//                   SELECT PLAN
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         .planHeader {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           padding: 1rem;
//           border-bottom: 1px solid #eee;
//         }

//         .planPriceDivider {
//           margin: 0.5rem 0;
//           font-size: 1.2rem;
//           color: #ccc;
//         }

//         .planPrice {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 0.25rem;
//         }

//         .originalPrice {
//           font-size: 0.9rem;
//           color: #999;
//         }

//         .strikethrough {
//           text-decoration: line-through;
//         }

//         .discountedPrice {
//           font-size: 1.4rem;
//           font-weight: bold;
//           color: #2c5aa0;
//           display: flex;
//           align-items: center;
//           gap: 0.25rem;
//         }

//         .period {
//           font-size: 1rem;
//           font-weight: normal;
//           color: #666;
//         }

//         .discountBadge {
//           background: linear-gradient(135deg, #ff6b6b, #ee5a24);
//           color: white;
//           padding: 0.25rem 0.5rem;
//           border-radius: 12px;
//           font-size: 0.7rem;
//           font-weight: bold;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }

//         .planName {
//           font-size: 1.1rem;
//           font-weight: 600;
//           color: #333;
//           margin-bottom: 0.5rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HostingPagePlans;










































// import React from "react";
// import Tick from "@/public/icons/tick.svg";
// import X from "@/public/icons/x.svg";

// const HostingPagePlans = ({ backage }) => {
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

//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <span>Compare All WordPress Hosting Plans</span>
//       </div>
//       <div className="hostingPagePlansVerticalSection">
//         <div className="hostingPagePlansVertical">
//           <div className="planFeaturesColumn">
//             <div className="planFeaturesHeader">Plan Features</div>
//             {features.map((f, i) => (
//               <div className="featureItem" key={f + i}>
//                 {f}
//               </div>
//             ))}
//             <div className="selectButtonPlaceholder"></div>
//           </div>

//           {packagesArray.map((pkg, pkgIndex) => {
//             const planName = pkg.card_title || pkg.title || `Plan ${pkg.id || pkgIndex}`;
//             const planPrice = pkg.price ?? "";
//             const pkgParams = pkg.package_parametrs || [];

//             return (
//               <div className="planColumn" key={pkg.id || planName || pkgIndex}>
//                 <div className="planHeader">
//                   <div className="planName">{planName}</div>
//                   |
//                   <div className="planPrice">{planPrice}</div>
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
//                   SELECT PLAN
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
