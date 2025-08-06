import Image from "next/image";
import Link from "next/link";
import React from "react";

const HostingGrid = () => {
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
              <span>Why choose Best Host?</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tetur
                adipiscin Luctus facilisis cursus ctus facilisis cursusut
                pellentesque sit volutpat ut.
              </p>
              <Link href="#">
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingGrid;
