import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Facebook from "@/public/icons/facebookWhite.svg";
import Twitter from "@/public/icons/twitterWhite.svg";
import Instagram from "@/public/icons/instagramWhite.svg";
import Wp from "@/public/icons/wpWhite.svg";

const ServicesDetailPage = () => {
  return (
    <div id="servicesDetailPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/services">
            <strong>Services</strong>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="#">
            <strong>Lorem ipsumm</strong>
          </Link>
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
                  <span>
                    How to Choose an Affordable SEO Package for Your Startup
                  </span>
                  <div className="div">
                    <span className="middleLink">
                      <Link href="#">Lorem ipsum</Link>
                    </span>
                    <span className="middleLink">
                      <Link href="#">Lorem ipsum</Link>
                    </span>
                  </div>
                  <div className="servicesDPline"></div>
                  <div className="servicesDetailPageMainLeftContentDesc">
                    <span>Why entrepreneurial diversity matters</span>
                    <p>
                      Imagine coming to the office every day and opening your
                      laptop to find hundreds of emails from prospects who are
                      hungry to do business with your startup. While this can be
                      a dream for many startups, the reality is that millions of
                      searches happen every day on Google and if you can get a
                      fraction of those users to reach your website through
                      Search Engine Optimization, you could end up with more
                      customers than you really need. Imagine coming to the
                      office every day and opening your laptop to find hundreds
                      of emails from prospects who are hungry to do business
                      with your startup.While this can be a dream for many
                      startups, the reality is that millions of searches happen
                      every day on Google and if you can get a fraction of those
                      users to reach your website through Search Engine
                      Optimization, you could end up with more customers than
                      you really need.
                    </p>
                    <div className="servicesDetailPageMainLeftContentImages">
                      <img src="/icons/serviceDPLeft.png" alt="" />
                    </div>
                    <p>
                      Imagine coming to the office every day and opening your
                      laptop to find hundreds of emails from prospects who are
                      hungry to do business with your startup. While this can be
                      a dream for many startups, the reality is that millions of
                      searches happen every day on Google and if you can get a
                      fraction of those users to reach your website through
                      Search Engine
                    </p>
                    <div className="servicesDetailPageMainLeftContentImages">
                      <img src="/icons/serviceDPLeft.png" alt="" />
                    </div>

                    <div className="servicesDetailPageMainLeftContentParanthez">
                      <div className="servicesDetailPageMainLeftContentParanthezIcon">
                        <img src="/icons/paranthez.svg" alt="" />
                        <img src="/icons/paranthez.svg" alt="" />
                      </div>
                      <div className="servicesDetailPageMainLeftContentParanthezDesc">
                        <p>
                          Est tation latine aliquip id, mea ad tale illud
                          definitiones. Periculis omittantur necessitatibus eum
                          ad, pro eripuit minimum comprehensam ne, usu cu stet
                          prompta reformidans.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-4 lg-4 md-12 sm-12">
              <div className="servicesDetailPageMainRight">
                <div className="servicesDetailPageMainRightTopImg">
                  <img src="/images/servicesDP.png" alt="" />
                </div>

                <div className="servicesDetailPageMainRightOtherServices">
                  <div className="servicesDetailPageMainRightOtherServiceCard">
                    <Link href="/services/id">
                      <div className="servicesDetailPageMainRightOtherServiceCardItem">
                        <div className="servicesDetailPageMainRightOtherServiceCardImg">
                          <img src="/icons/service.svg" alt="" />
                        </div>
                        <div className="servicesDetailPageMainRightOtherServiceCardContent">
                          <h2>Trending Products</h2>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </span>
                          <div className="dprihtline"></div>
                          <div className="servicesDetailPageMainRightOtherServiceCardBottom">
                            <span>2 min read </span>
                            <img src="/icons/rightServiceArrow.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
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
