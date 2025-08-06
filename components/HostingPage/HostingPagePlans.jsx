// import React from "react";

// const HostingPagePlans = () => {
//   return (
//     <div className="container">
//       <div className="hostingPagePlans">
//         <span>Compare All WordPress Hosting Plans</span>
//       </div>
//       <div className="hostingPagePlansVertical">

//       </div>

//     </div>
//   );
// };

// export default HostingPagePlans;

import React from "react";

const HostingPagePlans = () => {
  return (
    <div className="container">
      <div className="hostingPagePlans">
        <span>Compare All WordPress Hosting Plans</span>
      </div>
      <div className="hostingPagePlansVerticalSection">
        <div className="hostingPagePlansVertical">
          <div className="planFeaturesColumn">
            <div className="planFeaturesHeader">Plan Features</div>
            <div className="featureItem">Websites</div>
            <div className="featureItem">SSD Storage</div>
            <div className="featureItem">Bandwidth</div>
            <div className="featureItem">MySQL Databases</div>
            <div className="featureItem">Free Domain Registration</div>
            <div className="featureItem">Free SSL Certificate</div>
            <div className="featureItem">Free Dedicated IP</div>
            <div className="featureItem">Email Accounts</div>
            <div className="featureItem">Free Domain Registration</div>
            <div className="featureItem">Free SSL Certificate</div>
            <div className="featureItem">Free Dedicated IP</div>
            <div className="selectButtonPlaceholder"></div>
          </div>

          <div className="planColumn starter">
            <div className="planHeader">
              <div className="planName">Starter</div>
              <div className="planPrice">2.99</div>
            </div>
            <div className="planValue">1 site</div>
            <div className="planValue">30 GB</div>
            <div className="planValue">Unlimited</div>
            <div className="planValue">Unlimited</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue">100</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <button className="selectPlanBtn active">SELECT PLAN</button>
          </div>

          <div className="planColumn business">
            <div className="planHeader">
              <div className="planName">Business</div>
              <div className="planPrice">8.99</div>
            </div>
            <div className="planValue">2 sites</div>
            <div className="planValue">100 GB</div>
            <div className="planValue">100 GB</div>
            <div className="planValue">2</div>
            <div className="planValue cross">✗</div>
            <div className="planValue cross">✗</div>
            <div className="planValue cross">✗</div>
            <div className="planValue">10</div>
            <div className="planValue cross">✗</div>
            <div className="planValue cross">✗</div>
            <div className="planValue cross">✗</div>
            <button className="selectPlanBtn">SELECT PLAN</button>
          </div>

          <div className="planColumn single">
            <div className="planHeader">
              <div className="planName">Single</div>
              <div className="planPrice">12.99</div>
            </div>
            <div className="planValue">3 sites</div>
            <div className="planValue">300 GB</div>
            <div className="planValue">Unlimited</div>
            <div className="planValue">Unlimited</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue">200</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <div className="planValue checkmark">✓</div>
            <button className="selectPlanBtn">SELECT PLAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPagePlans;
