import Image from "next/image";
import React from "react";
import Logo from "@/public/icons/besthostLogo.svg";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="headerTop">
          <span>EN</span> <div className="langLine"></div> <span>RU</span>
        </div>
        <div className="headerMain">
          <div className="headerLogo">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="headerLinks">
            <ul>
              <li>
                <Link href="/">
                  <span>Hosting</span> <Arrow className="activeRotate" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Domains</span> <Arrow className="activeRotate" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Services</span> <Arrow className="activeRotate" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Website</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="headerContact">
            <div className="headerContactItem">
              <Link href="#">
                <span>Dəstək xətti :</span> 
                <strong>+994 55 475 24 00</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
