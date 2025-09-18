import Logo from "@/public/icons/besthostLogo.svg";
import React from "react";
import Link from "next/link";
import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Instagram from "@/public/icons/instagram.svg";
import Wp from "@/public/icons/wp.svg";
import Phone from "@/public/icons/phone.svg";
import Email from "@/public/icons/email.svg";
import Location from "@/public/icons/location.svg";

const Footer = ({ contact, t }) => {
  return (
    <div id="footer">
      <div className="footerItem">
        <div className="container">
          <div className="row">
            <div className="xl-3 lg-3 md-6 sm-12">
              <div className="footerLeft">
                <Link href="/">
                  <Logo />
                </Link>
                <p>
                  {t?.footerSeoText || "Besthost is a leading provider of web hosting"}
                </p>
                <div className="footerSocialNetwork footerNotMobile">
                  <Link href={contact.facebook}>
                    <Facebook />
                  </Link>
                  <Link href={contact.x}>
                    <Twitter />
                  </Link>
                  <Link href={contact.instagram}>
                    <Instagram />
                  </Link>
                  <Link className="wpdi" href={contact.whatsapp}>
                    <Wp />
                  </Link>
                </div>
                <div className="footerPaymentMethods footerNotMobile">
                  <div>
                    <img src="/icons/visa.svg" alt="Visa" />
                  </div>
                  <div>
                    <img src="/icons/masterCard.svg" alt="mastercart" />
                  </div>
                  <div>
                    <img src="/icons/amazon.svg" alt="amazon" />
                  </div>
                  <div>
                    <img src="/icons/1kart.png" alt="1cart" />
                  </div>
                  <div>
                    <img src="/icons/googePay.png" alt="googlepay" />
                  </div>
                  <div>
                    <img src="/icons/coinUp.png" alt="Visa" />
                  </div>
                </div>
                <div className="footerContacts footerNotMobile">
                  <div className="footerContact">
                    <Link href={`tel:${contact.phone}`}>
                      <Phone /> <span> {contact.phone}</span>
                    </Link>
                    <Link href={`mailto:${contact.email}`}>
                      <Email /> <span>{contact.email}</span>
                    </Link>
                    <Link href="#">
                      <Location />
                      <span>{contact.address}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl-9 lg-9 md-6 sm-12">
              <div className="row">
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="footerLinks">
                    <ul>
                      <span>HOSTING</span>
                      <li>
                        <Link href="#">Web Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">VPS Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                    </ul>
                    <ul>
                      <span>Domain</span>
                      <li>
                        <Link href="#">Domain Checker </Link>
                      </li>
                      <li>
                        <Link href="#">Domain Transfer </Link>
                      </li>
                      <li>
                        <Link href="#">Buy domain name </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xl-3 lg-2 md-6 sm-6">
                  <div className="footerLinks">
                    <ul>
                      <span>Website</span>
                      <li>
                        <Link href="#">Web Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">VPS Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="footerLinks">
                    <ul>
                      <span>Services</span>
                      <li>
                        <Link href="#">Web Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">VPS Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                    </ul>
                    <ul>
                      <span>Company</span>
                      <li>
                        <Link href="#">Domain Checker </Link>
                      </li>
                      <li>
                        <Link href="#">Domain Transfer </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xl-3 lg-4 md-6 sm-6">
                  <div className="footerLinks">
                    <ul>
                      <span>Support</span>
                      <li>
                        <Link href="#">Web Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">VPS Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Minecraft Server Hosting </Link>
                      </li>
                      <li>
                        <Link href="#">Website Builder </Link>
                      </li>
                    </ul>
                    <ul>
                      <span>Legal</span>
                      <li>
                        <Link href="#">Domain Checker </Link>
                      </li>
                      <li>
                        <Link href="#">Domain Transfer </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerSocialNetwork footerYesMobile">
          <Link href={contact.facebook}>
            {" "}
            <Facebook />{" "}
          </Link>
          <Link href={contact.x}>
            {" "}
            <Twitter />{" "}
          </Link>
          <Link href={contact.instagram}>
            {" "}
            <Instagram />{" "}
          </Link>
          <Link className="wpdi" href={contact.whatsapp}>
            {" "}
            <Wp />{" "}
          </Link>
        </div>
        <div className="footerPaymentMethods footerYesMobile">
          <div>
            <img src="/icons/visa.svg" alt="Visa" />
          </div>
          <div>
            <img src="/icons/masterCard.svg" alt="mastercart" />
          </div>
          <div>
            <img src="/icons/amazon.svg" alt="amazon" />
          </div>
          <div>
            <img src="/icons/1kart.png" alt="1cart" />
          </div>
          <div>
            <img src="/icons/googePay.png" alt="googlepay" />
          </div>
          <div>
            <img src="/icons/coinUp.png" alt="Visa" />
          </div>
        </div>
        <div className="footerContacts footerYesMobile">
          <div className="footerContact">
            <Link href={`tel:${contact.phone}`}>
              <Phone /> <span>{contact.phone}</span>
            </Link>
            <Link href={`mailto:${contact.email}`}>
              <Email /> <span>{contact.email}</span>
            </Link>
            <Link href="#">
              <Location />
              <span>{contact.address}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="footLine"></div>
      <div className="footerBottom">
        <div className="container">
          <div className="footerBottomItem">
            <span>
              © 2021 besthost.com - Premium Web Hosting, Cloud, VPS & Domain
              Registration Services.
            </span>
            <div className="footerVerticalLine"></div>
            <div className="siteByONE">
              <Link href="https://one.az/">
                <span>Site by</span> <strong>One Studio</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
