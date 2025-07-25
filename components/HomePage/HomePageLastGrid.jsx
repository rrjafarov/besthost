import Image from "next/image";
import Link from "next/link";
import React from "react";
import LastGrid1 from "@/public/icons/lastGrid1.svg"
import LastGrid2 from "@/public/icons/lastGrid2.svg"
import LastGrid3 from "@/public/icons/lastGrid3.svg"
import LastGrid4 from "@/public/icons/lastGrid4.svg"

const HomePageLastGrid = () => {
  return (
    <div className="homePageLastGrid" id="lastPadding">
      <div className="container">
        <div className="row">
          <div className="xl-5 lg-5 md-5 sm-12">
            <div className="homePageLastGridImg">
              <Image
                src="/images/lastGridLeft.png"
                alt="grid"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="xl-7 lg-7 md-5 sm-12">
            <div className="homePageLastGridContent">
              <span>You Will love our 7/24 Support!</span>
              <p>
                Our team of experts will solve technical issues to get your
                websites up and running. Anytime.
              </p>
              <div className="homePageLastGridContentIcons">
                <div className="homePageLastGridContentIcon">
                    <img src="/icons/lastGrid1.svg" alt="" />
                </div>
                <div className="homePageLastGridContentIcon">
                    <img src="/icons/lastGrid2.svg" alt="" />
                </div>
                <div className="homePageLastGridContentIcon">
                    <img src="/icons/lastGrid3.svg" alt="" />
                </div>
                <div className="homePageLastGridContentIcon">
                    <img src="/icons/lastGrid4.svg" alt="" />
                </div>
                {/* <LastGrid1 />
                <LastGrid2 />
                <LastGrid3 />
                <LastGrid4 /> */}
              </div>
              <Link href="#">
                <span>Let’s talk about your first website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLastGrid;
