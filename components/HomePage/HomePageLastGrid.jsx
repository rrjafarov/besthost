import Image from "next/image";
import Link from "next/link";
import React from "react";
import LastGrid1 from "@/public/icons/lastGrid1.svg"
import LastGrid2 from "@/public/icons/lastGrid2.svg"
import LastGrid3 from "@/public/icons/lastGrid3.svg"
import LastGrid4 from "@/public/icons/lastGrid4.svg"

const HomePageLastGrid = ({staticSupport,t}) => {
  const supportData = staticSupport?.data
  return (
    <div className="homePageLastGrid" id="lastPadding">
      <div className="container">
        <div className="row">
          <div className="xl-5 lg-5 md-5 sm-12">
            <div className="homePageLastGridImg">
              <Image
                src={`https://admin-besthost.onestudio.az/storage/${supportData?.image}`}
                alt="grid"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="xl-7 lg-7 md-5 sm-12">
            <div className="homePageLastGridContent">
              <span>{supportData.title}</span>
              <div
                  dangerouslySetInnerHTML={{ __html: supportData?.content}}
                ></div>
              
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
              </div>
              <Link href="/contact">
                <span>{t?.letsTalk}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLastGrid;
