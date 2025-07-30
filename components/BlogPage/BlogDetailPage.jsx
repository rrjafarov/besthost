import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Facebook from "@/public/icons/facebookWhite.svg";
import Twitter from "@/public/icons/twitterWhite.svg";
import Instagram from "@/public/icons/instagramWhite.svg";
import Wp from "@/public/icons/wpWhite.svg";

const BlogDetailPage = () => {
  return (
    <div id="blogDetailPage">
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
        <div className="blogDetailPageMain">
          <div className="row">
            <div className="xl-8 lg-8 md-12 sm-12">
              <div className="blogDetailPageMainLeft">
                <div className="blogDetailPageMainLeftShareIcons">
                  <div className="blogDetailPageMainLeftShareIcon">
                    <button>
                      <Facebook />
                    </button>
                  </div>
                  <div className="blogDetailPageMainLeftShareIcon">
                    <button>
                      <Twitter />
                    </button>
                  </div>
                  <div className="blogDetailPageMainLeftShareIcon">
                    <button>
                      <Instagram />
                    </button>
                  </div>
                  <div className="blogDetailPageMainLeftShareIcon">
                    <button>
                      <Wp />
                    </button>
                  </div>
                </div>
                <div className="blogDetailPageMainLeftContent">
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
                  <div className="blogDPline"></div>
                  <div className="blogDetailPageMainLeftContentDesc">
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
                    <div className="blogDetailPageMainLeftContentImages">
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
                    <div className="blogDetailPageMainLeftContentImages">
                      <img src="/icons/serviceDPLeft.png" alt="" />
                    </div>

                    <div className="blogDetailPageMainLeftContentParanthez">
                      <div className="blogDetailPageMainLeftContentParanthezIcon">
                        <img src="/icons/paranthez.svg" alt="" />
                        <img src="/icons/paranthez.svg" alt="" />
                      </div>
                      <div className="blogDetailPageMainLeftContentParanthezDesc">
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
              <div className="blogDetailPageMainRight">
                <div className="blogDetailPageMainRightTopImg">
                  <img src="/images/servicesDP2.png" alt="" />
                </div>

                <div className="blogDetailPageMainRightOtherBlogs">
                  <span className="allBlogs">All Blogs</span>
                  <div className="blogDetailPageMainRightOtherBlogsCards">
                    <div className="blogDetailPageMainRightOtherBlogsCard">
                      <Link href="/blog/id">
                        <span className="otherBlogTitle">
                          Trending Products
                        </span>
                        <span className="otherBlogSubTitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                      </Link>
                    </div>
                    <div className="blogDetailPageMainRightOtherBlogsCard">
                      <Link href="/blog/id">
                        <span className="otherBlogTitle">
                          Trending Products
                        </span>
                        <span className="otherBlogSubTitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                      </Link>
                    </div>
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

export default BlogDetailPage;
