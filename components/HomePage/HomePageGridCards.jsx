import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePageGridCards = ({ t,home }) => {
  return (
    <div className="homeGridSection">
      <div className="container">
        <div className="row" id="homeGridContent01">
          <div className="xl-6 lg-6 md-6 sm-12">
            <div className="homeGridImages">
              <Image
                src={`https://admin-besthost.onestudio.az/storage/${home.image_1}`}
                alt="grid"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className="xl-6 lg-6 md-6 sm-12">
            <div className="homeGridContent">
              <span>{home.title_1}</span>
              <div dangerouslySetInnerHTML={{ __html: home?.content_1 }}></div>
              <Link href="#">
                <span>{t?.viewMore}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row" id="homeGridContent01">
          <div className="xl-6 lg-6 md-6 sm-12" id="order1">
            <div className="homeGridContent">
              <span>{home.title_2}</span>
              <div dangerouslySetInnerHTML={{ __html: home?.content_2 }}></div>
              <Link href="#">
                <span>{t?.viewMore}</span>
              </Link>
            </div>
          </div>
          <div className="xl-6 lg-6 md-6 sm-12" id="order2">
            <div className="homeGridImagesRight">
              <Image
                src={`https://admin-besthost.onestudio.az/storage/${home.image_2}`}
                alt="grid"
                width={550}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="xl-6 lg-6 md-6 sm-12">
            <div className="homeGridImages">
              <Image
                src={`https://admin-besthost.onestudio.az/storage/${home.image_3}`}
                alt="grid"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className="xl-6 lg-6 md-6 sm-12">
            <div className="homeGridContent">
              <span>{home.title_3}</span>
              <div dangerouslySetInnerHTML={{ __html: home?.content_3 }}></div>
              <Link href="#">
                <span>{t?.viewMore}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageGridCards;
