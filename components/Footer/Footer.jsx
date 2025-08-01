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

const Footer = () => {
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
                  Our mission is to make life easier for website developers and
                  their customers. We do it by offering easy to use, fast and
                  reliable web hosting services.
                </p>
                <div className="footerSocialNetwork">
                  <Link href="#">
                    {" "}
                    <Facebook />{" "}
                  </Link>
                  <Link href="#">
                    {" "}
                    <Twitter />{" "}
                  </Link>
                  <Link href="#">
                    {" "}
                    <Instagram />{" "}
                  </Link>
                  <Link className="wpdi" href="#">
                    {" "}
                    <Wp />{" "}
                  </Link>
                </div>
                <div className="footerPaymentMethods">
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
                <div className="footerContacts">
                  <div className="footerContact">
                    <Link href="#">
                      <Phone /> <span>+994 50 404 50 04</span>
                    </Link>
                    <Link href="#">
                      <Email /> <span>besthost@info.az</span>
                    </Link>
                    <Link href="#">
                      <Location />
                      <span>
                        Bakı şəhəri, Badamdar qəsəbəsi, A. Abbaszadə küç. 13a,
                        AZ1073
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-9 lg-9 md-6 sm-12">
              <div className="row">
                <div className="xl-3 lg-4 md-6 sm-12">
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
                <div className="xl-3 lg-2 md-6 sm-12">
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
                <div className="xl-3 lg-4 md-6 sm-12">
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
                <div className="xl-3 lg-4 md-6 sm-12">
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
