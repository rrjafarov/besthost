// "use client";
// import React, { useState } from "react"; // ← sadece useState eklendi
// import HomePageSelectHosting from "./HomePageSelectHosting";

// const HomePageHosting = ({backage, category}) => {
//   const [selected, setSelected] = useState("Wordpress Hosting"); // ← state eklendi

//   return (
//     <div className="homePageHosting">
//       <div className="container">
//         <div className="homePageHostingHeaderText">
//           <span>The Best Hosting For your Websites</span>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem arcu
//             urna dolor sit amet, consectetursuspenet, consectetursusdisse sit in
//             or sit amet, consectetursuspendisse sit in eetiam venenatis.
//           </p>
//         </div>
//         <div className="homePageHostingHeaderButtons">
//           <div className="homePageHostingSelectButtons">
//             {category.data.map((cat) => (

//             )}
//             <div
//               className={
//                 "homePageHostingSelectButton" +
//                 (selected === "Wordpress Hosting" ? " active" : "")
//               }
//               onClick={() => setSelected("Wordpress Hosting")}
//             >
//               <span>Wordpress Hosting</span>
//             </div>
//             <div
//               className={
//                 "homePageHostingSelectButton" +
//                 (selected === "Web Hosting" ? " active" : "")
//               }
//               onClick={() => setSelected("Web Hosting")}
//             >
//               <span>Web Hosting</span>
//             </div>
//             <div
//               className={
//                 "homePageHostingSelectButton" +
//                 (selected === "Website builder" ? " active" : "")
//               }
//               onClick={() => setSelected("Website builder")}
//             >
//               <span>Website builder</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="homePageHostingForWebsite">
//           <span>The Best Hosting For your Websites</span>
//           <p>From small business to enterprise, we've got you covered!</p>
//         </div>

//         <HomePageSelectHosting backage={backage} />
//       </div>
//     </div>
//   );
// };

// export default HomePageHosting;
















"use client";
import React, { useState } from "react";
import HomePageSelectHosting from "./HomePageSelectHosting";

const HomePageHosting = ({backage, category}) => {
  const [selected, setSelected] = useState(category?.data?.data?.[0]?.category_name || ""); // İlk category'yi default seç

  return (
    <div className="homePageHosting">
      <div className="container">
        <div className="homePageHostingHeaderText">
          <span>The Best Hosting For your Websites</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem arcu
            urna dolor sit amet, consectetursuspenet, consectetursusdisse sit in
            or sit amet, consectetursuspendisse sit in eetiam venenatis.
          </p>
        </div>
        <div className="homePageHostingHeaderButtons">
          <div className="homePageHostingSelectButtons">
            {category?.data?.data?.map((cat) => (
              <div
                key={cat.id} // Her item için unique key
                className={
                  "homePageHostingSelectButton" +
                  (selected === cat.category_name ? " active" : "")
                }
                onClick={() => setSelected(cat.category_name)}
              >
                <span>{cat.category_name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="homePageHostingForWebsite">
          <span>The Best Hosting For your Websites</span>
          <p>From small business to enterprise, we've got you covered!</p>
        </div>

        <HomePageSelectHosting backage={backage} selected={selected} />
      </div>
    </div>
  );
};

export default HomePageHosting;