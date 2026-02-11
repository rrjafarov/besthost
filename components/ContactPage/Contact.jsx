// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Arrow from "@/public/icons/arrow.svg";
// import Facebook from "@/public/icons/facebookWhite.svg";
// import Twitter from "@/public/icons/twitterWhite.svg";
// import Instagram from "@/public/icons/instagramWhite.svg";
// import Wp from "@/public/icons/wpWhite.svg";
// import Phone from "@/public/icons/phone.svg";
// import Email from "@/public/icons/email.svg";
// import Location from "@/public/icons/location.svg";

// const Contact = ({ contact, t }) => {
//   // form state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [placeholders, setPlaceholders] = useState({});

//   const validate = () => {
//     const errs = {};
//     if (!name || !name.trim()) errs.name = t?.contactErrorName || "Zəhmət olmasa adınızı daxil edin";
//     const emailVal = (email || "").trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailVal) errs.email = t?.contactErrorEmail || "Zəhmət olmasa email daxil edin";
//     else if (!emailRegex.test(emailVal)) errs.email = t?.contactErrorEmailInvalid || "Düzgün email daxil edin";
//     if (!message || !message.trim()) errs.message = t?.contactErrorMessage || "Zəhmət olmasa mesaj yazın";

//     return errs;
//   };

//   const handleSend = () => {
//     const errs = validate();
//     if (Object.keys(errs).length === 0) {
//       // no validation errors — proceed (actual submit logic not implemented here)
//       // optionally clear placeholders
//       setPlaceholders({});
//       // you can implement sending logic here
//       console.log("send form", { name, email, message });
//       return;
//     }

//     // For fields with errors, clear their current value so placeholder becomes visible
//     if (errs.name) setName("");
//     if (errs.email) setEmail("");
//     if (errs.message) setMessage("");

//     setPlaceholders(errs);
//   };

//   const handleChangeName = (v) => {
//     setName(v);
//     if (placeholders.name) setPlaceholders((p) => ({ ...p, name: undefined }));
//   };
//   const handleChangeEmail = (v) => {
//     setEmail(v);
//     if (placeholders.email) setPlaceholders((p) => ({ ...p, email: undefined }));
//   };
//   const handleChangeMessage = (v) => {
//     setMessage(v);
//     if (placeholders.message) setPlaceholders((p) => ({ ...p, message: undefined }));
//   };

//   return (
//     <div className="contactPage">
//       <div className="container">
//         <div className="aboutPageBreadCrumbs">
//           <Link href="/">
//             <span>BestHost</span>
//           </Link>
//           <Arrow className="breadCrumbsArrow" />
//           <strong>{t?.contactPageTitle || "Contact"}</strong>
//         </div>

//         <div className="contactLetsTalk">
//           <h1>{t?.contactPageHeader || "Contact"}</h1>
//           <div className="contactLetsTalkIcons">
//             <div className="contactLetsTalkIcon">
//               <img src="/icons/contact1.svg" alt="" />
//             </div>
//             <div className="contactLetsTalkIcon">
//               <img src="/icons/contact2.svg" alt="" />
//             </div>
//             <div className="contactLetsTalkIcon">
//               <img src="/icons/contact3.svg" alt="" />
//             </div>
//             <div className="contactLetsTalkIcon">
//               <img src="/icons/contact4.svg" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="contactLinks">
//           <div className="row">
//             <div className="xl-6 lg-6 md-6 sm-12">
//               <div className="contactLinksLeft">
//                 <div className="contactLinksLeftItems">
//                   <div className="contactLinksLeftItem">
//                     <Link href={`tel:${contact.phone}`}>
//                       <div>
//                         <strong>
//                           <Phone />
//                         </strong>
//                         <span>{contact.phone}</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="contactLinksLeftItem">
//                     <Link href={`mailto:${contact.email}`}>
//                       <div>
//                         <strong>
//                           <Email />
//                         </strong>
//                         <span>{contact.email}</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="contactLinksLeftItem">
//                     <Link href="#">
//                       <div>
//                         <strong>
//                           <Location />
//                         </strong>
//                         <span>{contact.address}</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="contactSocialLinks">
//                     <div className="contactSocialLink">
//                       <a
//                         href={contact.facebook}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Facebook />
//                       </a>
//                     </div>
//                     <div className="contactSocialLink">
//                       <a
//                         href={contact.x}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Twitter />
//                       </a>
//                     </div>
//                     <div className="contactSocialLink">
//                       <a
//                         href={contact.instagram}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Instagram />
//                       </a>
//                     </div>
//                     <div className="contactSocialLink">
//                       <a
//                         href={contact.whatsapp}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Wp />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="xl-6 lg-6 md-6 sm-12" id="contactIMGrid">
//               <img
//                 className="notMobileContact"
//                 src={`https://admin-besthost.onestudio.az/storage/${contact?.image}`}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//         <div className="contactForm">
//           <div className="contactFormItems">
//             <div className="contactFormItem">
//               <h2>{t?.contactPageYourQuesions || "Suallar"}</h2>
//               <p>
//                 {t?.contactPageFormText ||
//                   "Suallarınız varsa, bizə müraciət etməkdən çəkinməyin."}
//               </p>

//               <form onSubmit={(e) => e.preventDefault()}>
//                 <input
//                   type="text"
//                   name="name"
//                   value={name}
//                   onChange={(e) => handleChangeName(e.target.value)}
//                   placeholder={placeholders.name || t?.contactPageFormName}
//                   className={placeholders.name ? "input-error" : ""}
//                   aria-invalid={!!placeholders.name}
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => handleChangeEmail(e.target.value)}
//                   placeholder={placeholders.email || t?.contactPageFormEmail || "Email"}
//                   className={placeholders.email ? "input-error" : ""}
//                   aria-invalid={!!placeholders.email}
//                 />

//                 <textarea
//                   name="message"
//                   value={message}
//                   onChange={(e) => handleChangeMessage(e.target.value)}
//                   placeholder={placeholders.message || t?.contactPageFormText}
//                   className={placeholders.message ? "input-error" : ""}
//                   aria-invalid={!!placeholders.message}
//                 />

//                 <button type="button" onClick={handleSend}>{t?.contactSendButton}</button>
//               </form>

//               {/* Placeholder-based validation styling */}
//               <style jsx>{`
//                 .input-error::placeholder { color: #ec1f27 !important; opacity: 1; }
//                 .input-error { caret-color: #ec1f27; }
//                 button { cursor: pointer; }
//               `}</style>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;











"use client";
import React, { useState } from "react";
import Link from "next/link";
import Arrow from "@/public/icons/arrow.svg";
import Facebook from "@/public/icons/facebookWhite.svg";
import Twitter from "@/public/icons/twitterWhite.svg";
import Instagram from "@/public/icons/instagramWhite.svg";
import Wp from "@/public/icons/wpWhite.svg";
import Phone from "@/public/icons/phone.svg";
import Email from "@/public/icons/email.svg";
import Location from "@/public/icons/location.svg";

const Contact = ({ contact, t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [placeholders, setPlaceholders] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const errs = {};
    if (!name || !name.trim())
      errs.name = t?.contactErrorName || "Zəhmət olmasa adınızı daxil edin";

    const emailVal = (email || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal)
      errs.email = t?.contactErrorEmail || "Zəhmət olmasa email daxil edin";
    else if (!emailRegex.test(emailVal))
      errs.email = t?.contactErrorEmailInvalid || "Düzgün email daxil edin";

    if (!message || !message.trim())
      errs.message = t?.contactErrorMessage || "Zəhmət olmasa mesaj yazın";

    return errs;
  };

  const handleSend = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      if (errs.name) setName("");
      if (errs.email) setEmail("");
      if (errs.message) setMessage("");
      setPlaceholders(errs);
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("key", "contact-form");
      formData.append("title", name);
      formData.append("form_data", JSON.stringify({ name, email, message }));

      const res = await fetch(
        "https://api-besthost.onestudio.az/api/v1/form-data/send",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Error sending form");
      }

      // setSuccess("Mesajınız uğurla göndərildi.");
      setSuccess(t?.successMessageContact || "Mesajınız uğurla göndərildi.");
      setName("");
      setEmail("");
      setMessage("");
      setPlaceholders({});
    } catch (err) {
      setError(err.message || "Göndərilmə zamanı xəta oldu");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeName = (v) => {
    setName(v);
    if (placeholders.name) setPlaceholders((p) => ({ ...p, name: undefined }));
  };
  const handleChangeEmail = (v) => {
    setEmail(v);
    if (placeholders.email)
      setPlaceholders((p) => ({ ...p, email: undefined }));
  };
  const handleChangeMessage = (v) => {
    setMessage(v);
    if (placeholders.message)
      setPlaceholders((p) => ({ ...p, message: undefined }));
  };

  return (
    <div className="contactPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <strong>{t?.contactPageTitle || "Contact"}</strong>
        </div>

        <div className="contactLetsTalk">
          <h1>{t?.contactPageHeader || "Contact"}</h1>
          <div className="contactLetsTalkIcons">
            <div className="contactLetsTalkIcon">
              <img src="/icons/contact1.svg" alt="" />
            </div>
            <div className="contactLetsTalkIcon">
              <img src="/icons/contact2.svg" alt="" />
            </div>
            <div className="contactLetsTalkIcon">
              <img src="/icons/contact3.svg" alt="" />
            </div>
            <div className="contactLetsTalkIcon">
              <img src="/icons/contact4.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="contactLinks">
          <div className="row">
            <div className="xl-6 lg-6 md-6 sm-12">
              <div className="contactLinksLeft">
                <div className="contactLinksLeftItems">
                  <div className="contactLinksLeftItem">
                    <Link href={`tel:${contact.phone}`}>
                      <div>
                        <strong>
                          <Phone />
                        </strong>
                        <span>{contact.phone}</span>
                      </div>
                    </Link>
                  </div>

                  <div className="contactLinksLeftItem">
                    <Link href={`mailto:${contact.email}`}>
                      <div>
                        <strong>
                          <Email />
                        </strong>
                        <span>{contact.email}</span>
                      </div>
                    </Link>
                  </div>

                  <div className="contactLinksLeftItem">
                    <Link href="#">
                      <div>
                        <strong>
                          <Location />
                        </strong>
                        <span>{contact.address}</span>
                      </div>
                    </Link>
                  </div>

                  <div className="contactSocialLinks">
                    <div className="contactSocialLink">
                      <a
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook />
                      </a>
                    </div>
                    <div className="contactSocialLink">
                      <a
                        href={contact.x}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter />
                      </a>
                    </div>
                    <div className="contactSocialLink">
                      <a
                        href={contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram />
                      </a>
                    </div>
                    <div className="contactSocialLink">
                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Wp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl-6 lg-6 md-6 sm-12" id="contactIMGrid">
              <img
                className="notMobileContact"
                src={`https://admin-besthost.onestudio.az/storage/${contact?.image}`}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="contactForm">
          <div className="contactFormItems">
            <div className="contactFormItem">
              <h2>{t?.contactPageYourQuesions || "Suallar"}</h2>
              <p>
                {t?.contactPageFormText ||
                  "Suallarınız varsa, bizə müraciət etməkdən çəkinməyin."}
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => handleChangeName(e.target.value)}
                  placeholder={placeholders.name || t?.contactPageFormName}
                  className={placeholders.name ? "input-error" : ""}
                  aria-invalid={!!placeholders.name}
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  placeholder={
                    placeholders.email || t?.contactPageFormEmail || "Email"
                  }
                  className={placeholders.email ? "input-error" : ""}
                  aria-invalid={!!placeholders.email}
                />

                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => handleChangeMessage(e.target.value)}
                  placeholder={placeholders.message || t?.contactPageFormText}
                  className={placeholders.message ? "input-error" : ""}
                  aria-invalid={!!placeholders.message}
                />

                <button type="button" onClick={handleSend}>
                  {/* {loading ? "Göndərilir..." : t?.contactSendButton || "Göndər"} */}
                  {loading
                    ? t?.contactSendButtonLoading || "Göndərilir..."
                    : t?.contactSendButton || "Göndər"}
                </button>
              </form>

              {success && (
                <p style={{ color: "green", marginTop: 10 }}>{success}</p>
              )}
              {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

              <style jsx>{`
                .input-error::placeholder {
                  color: #ec1f27 !important;
                  opacity: 1;
                }
                .input-error {
                  caret-color: #ec1f27;
                }
                button {
                  cursor: pointer;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
