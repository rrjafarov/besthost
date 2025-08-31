import React from "react";

const Terms = ({ terms }) => {

  console.log(terms , "wdwedew")
  return (
    <div>
      <div className="supportFixedTextBox">
        {/* <p>
          The English version of legal agreements and policies is considered as
          the only current and valid version of this document. Any translated
          version is provided for your convenience only, to facilitate reading
          and understanding of the English version. Any translated versions are
          not legally binding and cannot replace the English versions. In the
          event of disagreement or conflict, the English language legal
          agreements and policies shall prevail.
        </p> */}

        <div className="termos" dangerouslySetInnerHTML={{ __html: terms?.title }}></div>
      </div>

      <div className="supportTextBox">
        <span>1. INTRODUCTION</span>
        {/* <p>
          International Ltd. a Cyprus private limited company, legal address, 61
          Lordou Vironos st. 6023 Larnaca, the Republic of Cyprus ("Hostinger"),
          provides you web-hosting, domain name registration, and related
          products and service. Hostinger seeks to ensure the highest level of
          data privacy when offering its variety of quality products and
          services to Hostinger customers and subscribers ("Subscribers")
          (collectively, “You”, or "Users"). At Hostinger, the privacy and
          security of our Users is of paramount importance. Hostinger is
          committed to protecting the data you share with us. When this Policy
          mentions "Hostinger", "we," "us", or "our", it refers to Hostinger
          that is responsible for protection of your personal information in
          line with this Privacy Policy ("Data Controller"). <br />
          This Privacy Policy ("Policy") explains how Hostinger processes
          information that can be used to directly or indirectly identify an
          individual ("Personal Data") collected on our Site, our services
          (“Service”), forums and our mobile applications ("Platform"). All
          personal data are processed in accordance with the General Data
          Protection Regulation (EU) 2016/679 (“GDPR”) and EU-U.S. and
          Swiss-U.S. Privacy Shield Frameworks, designed by the U.S. Department
          of Commerce and the European Commission and Swiss Administration. For
          any questions regarding this Policy or any requests regarding the
          processing of personal data, please contact us at gdpr@hostinger.com.
        </p> */}
        <div dangerouslySetInnerHTML={{ __html: terms?.content_1 }}></div>

      </div>



      <div className="supportTextBox supportTextBox2">
        <span>2. GENERAL PRINCIPLES. CONFIDENTIALITY</span>
        <div dangerouslySetInnerHTML={{ __html: terms?.content_2 }}></div>

        {/* <p>
          International Ltd. a Cyprus private limited company, legal address, 61
          Lordou Vironos st. 6023 Larnaca, the Republic of Cyprus ("Hostinger"),
          provides you web-hosting, domain name registration, and related
          products and service. Hostinger seeks to ensure the highest level of
          data privacy when offering its variety of quality products and
          services to Hostinger customers and subscribers ("Subscribers")
          (collectively, “You”, or "Users").
        </p> */}
      </div>



      {/* <div className="supportTextBox supportTextBox2">
        <span>3. GENERAL PRINCIPLES. CONFIDENTIALITY</span>
        <p>
          International Ltd. a Cyprus private limited company, legal address, 61
          Lordou Vironos st. 6023 Larnaca, the Republic of Cyprus ("Hostinger"),
          provides you web-hosting, domain name registration, and related
          products and service. Hostinger seeks to ensure the highest level of
          data privacy when offering its variety of quality products and
          services to Hostinger customers and subscribers ("Subscribers")
          (collectively, “You”, or "Users").
        </p>
      </div> */}
    </div>
  );
};

export default Terms;
