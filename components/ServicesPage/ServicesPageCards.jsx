import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPageCards = () => {
  return (
    <div>
      <div className="container">
        <div className="servicesPageCardsHeaderText">
          <h2>Services that keep your business in mind</h2>
          <span>
            From small business to enterpriseFrom small business to enterprise,
            we've got you covered!, we've got you covered!
          </span>
        </div>
        <div className="servicesPageCards">
          <h2>Our Services</h2>
          <div className="row">
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-4 lg-4 md-6 sm-6">
              <Link href="#">
                <div className="servicesPageCard">
                  <div className="servicesPageCardImg">
                    <Image
                      src="/icons/service.svg"
                      width={100}
                      height={100}
                      alt="service"
                    />
                  </div>
                  <div className="servicesPageCardContent">
                    <span>Lorem ipsum adipiscing elit.</span>
                    <p>
                      Lorem ipsum adipiscing elit. Lorem ipsum adipiscing elit.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="servicesPageCardsShowMore">
          <Link href="#">
            <span>See more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageCards;
