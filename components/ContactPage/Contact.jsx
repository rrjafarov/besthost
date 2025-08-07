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

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/contact">
            <strong>Contact us</strong>
          </Link>
        </div>

        <div className="contactLetsTalk">
          <span>Let`s Talk</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                    <Link href="#">
                      <div>
                        <strong>
                          <Phone />
                        </strong>
                        <span>+994 50 404 50 04</span>
                      </div>
                    </Link>
                  </div>
                  <div className="contactLinksLeftItem">
                    <Link href="#">
                      <div>
                        <strong>
                          <Email />
                        </strong>
                        <span>besthost@info.az</span>
                      </div>
                    </Link>
                  </div>
                  <div className="contactLinksLeftItem">
                    <Link href="#">
                      <div>
                        <strong>
                          <Location />
                        </strong>
                        <span>
                          Bakı şəhəri, Badamdar qəsəbəsi, A. Abbaszadə küç. 13a,
                          AZ1073
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="contactSocialLinks">
                    <div className="contactSocialLink">
                      <Link href="#">
                        <Facebook />
                      </Link>
                    </div>
                    <div className="contactSocialLink">
                      <Link href="#">
                        <Twitter />
                      </Link>
                    </div>
                    <div className="contactSocialLink">
                      <Link href="#">
                        <Instagram />
                      </Link>
                    </div>
                    <div className="contactSocialLink">
                      <Link href="#">
                        <Wp />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl-6 lg-6 md-6 sm-12">
              <img className="notMobileContact" src="/images/lastGridLeft.png" alt="" />
            </div>
          </div>
        </div>
        <div className="contactForm">
          <div className="contactFormItems">
            <div className="contactFormItem">
              <span>SUALLARINIZ</span>
              <p>
                Əgər sizin sualınız siyahıda yoxdursa, o zaman sualınızı bizə
                ünvanlayın, ən qısa zaman ərzində cavablayaq.
              </p>

              <form>
                <input type="text" name="name" placeholder="Ad Soyad" />

                <input
                  type="email"
                  name="email"
                  placeholder="loremipsum01@mail.ru"
                />

                <textarea name="message" placeholder="Mətn" />

                <button type="submit">GÖNDƏR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
