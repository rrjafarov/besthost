import React from "react";
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
  return (
    <div className="contactPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/contact">
            <strong>{t?.contactPageTitle || "Contact"}</strong>
          </Link>
        </div>

        <div className="contactLetsTalk">
          <span>{t?.contactPageHeader || "Contact"}</span>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
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
              <span>{t?.contactPageYourQuesions || "Suallar"}</span>
              <p>
                {t?.contactPageFormText ||
                  "Suallarınız varsa, bizə müraciət etməkdən çəkinməyin."}
              </p>

              <form>
                <input
                  type="text"
                  name="name"
                  placeholder={t?.contactPageFormName}
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t?.contactPageFormEmail || "Email"}
                />

                <textarea name="message" placeholder={t?.contactPageFormText} />

                <button type="submit">{t?.contactSendButton}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
