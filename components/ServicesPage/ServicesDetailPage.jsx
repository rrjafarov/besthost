import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Facebook from "@/public/icons/facebookWhite.svg";
import Twitter from "@/public/icons/twitterWhite.svg";
import Instagram from "@/public/icons/instagramWhite.svg";
import Wp from "@/public/icons/wpWhite.svg";

const ServicesDetailPage = ({ t, service, otherServices }) => {
  return (
    <div id="servicesDetailPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/services">
            <strong>{t?.servicesPageTitle}</strong>
          </Link>
          <Arrow className="breadCrumbsArrow" />

          <strong>{service.title}</strong>
        </div>
        <div className="servicesDetailPageMain">
          <div className="row">
            <div className="xl-8 lg-8 md-12 sm-12">
              <div className="servicesDetailPageMainLeft">
                <div className="servicesDetailPageMainLeftShareIcons">
                  <div className="servicesDetailPageMainLeftShareIcon">
                    <button>
                      <Facebook />
                    </button>
                  </div>
                  <div className="servicesDetailPageMainLeftShareIcon">
                    <button>
                      <Twitter />
                    </button>
                  </div>
                  <div className="servicesDetailPageMainLeftShareIcon">
                    <button>
                      <Instagram />
                    </button>
                  </div>
                  <div className="servicesDetailPageMainLeftShareIcon">
                    <button>
                      <Wp />
                    </button>
                  </div>
                </div>



                <div className="servicesDetailPageMainLeftContent">
                  <span>{service.title}</span>

                  <div className="servicesDPline"></div>
                  <div className="servicesDetailPageMainLeftContentDesc">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: service.content,
                      }}
                    ></div>
                    <div className="servicesDetailPageMainLeftContentImages">
                      <img
                        src={`https://admin-besthost.onestudio.az/storage/${service.image}`}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div className="xl-4 lg-4 md-12 sm-12">
              <div className="servicesDetailPageMainRight">
                {/* <div className="servicesDetailPageMainRightTopImg">
                  <img src="/images/servicesDP.png" alt="" />
                </div> */}

                <div className="servicesDetailPageMainRightOtherServices">
                  {otherServices.map((other) => (
                    <div className="servicesDetailPageMainRightOtherServiceCard">
                      <Link href={`/services/${other.url_slug}-${other.id}`}>
                        <div className="servicesDetailPageMainRightOtherServiceCardItem">
                          <div className="servicesDetailPageMainRightOtherServiceCardImg">
                            <img
                              //  src="/icons/service.svg"
                              src={`https://admin-besthost.onestudio.az/storage/${other.icon}`}
                              alt=""
                            />
                          </div>
                          <div className="servicesDetailPageMainRightOtherServiceCardContent">
                            <span>{other.title}</span>
                            <p>{other.sub_title}</p>
                            {/* <div className="dprihtline"></div> */}
                            <div className="servicesDetailPageMainRightOtherServiceCardBottom">
                              {/* <span>2 min read </span> */}
                              <img src="/icons/rightServiceArrow.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailPage;
