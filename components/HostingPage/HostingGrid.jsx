import Image from "next/image";
import Link from "next/link";
import React from "react";

const HostingGrid = ({categoryData ,t}) => {
  return (
    <div className="hostingGridSection">
      <div className="container">
        <div className="row">
          <div className="xl-7 lg-6 md-6 sm-12">
            <div className="homeGridImages">
              <Image
                src="/images/homeGridX7.png"
                alt="grid"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className="xl-5 lg-6 md-6 sm-12">
            <div className="homeGridContent">
              <span>{categoryData[0].title_3}</span>
              <p>
                <div
                    dangerouslySetInnerHTML={{ __html: categoryData[0].content_2}}
                  ></div>
              </p>
              <Link href="#">
                <span>{t?.seeMore}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingGrid;
