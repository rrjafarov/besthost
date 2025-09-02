import React from "react";
import Service from "@/public/icons/service.svg";
import Link from "next/link";
const HomePageServices = ({ servicesData }) => {
  return (
    <div className="homePageServices">
      <div className="container">
        <div className="homePageServicesTopText">
          <span>Our Services</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur or sit amet,
            consectetursuspendisse sit in eetiam venenatis.
          </p>
        </div>
        <div className="homePageServicesCards">
          <div className="row">
            {servicesData.slice(0,8).map((service) => (
              <div className="xl-3 lg-3 md-6 sm-6" key={service.id}>
                <Link href={`/services/${service.url_slug}-${service.id}`}>
                  <div className="homePageServicesCard">
                    <div className="homePageServicesCardItem">
                      <span>
                        <img src={`https://admin-besthost.onestudio.az/storage/${service.icon}`} alt="ded" />
                      </span>
                      <p>{service.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="homePageServicesCardsViewMore">
          <Link href="/services">
            <span>View more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
