import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Facebook from "@/public/icons/facebookWhite.svg";
import Twitter from "@/public/icons/twitterWhite.svg";
import Instagram from "@/public/icons/instagramWhite.svg";
import Wp from "@/public/icons/wpWhite.svg";

const BlogDetailPage = ({ t, blog, otherBlogs }) => {
  return (
    <div id="blogDetailPage">
      <div className="container">
        <div className="aboutPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/blog">
            <strong>{t?.blogPageTitle}</strong>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <strong>{blog.title}</strong>
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
                  <span>{blog.title}</span>
                  <div className="blogDPline"></div>
                  <div className="blogDetailPageMainLeftContentDesc">
                    {/* <span>{blog.sub_title}</span> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content,
                      }}
                    ></div>
                    <div className="blogDetailPageMainLeftContentImages">
                      <img
                        src={`https://admin-besthost.onestudio.az/storage/${blog.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-4 lg-4 md-12 sm-12">
              <div className="blogDetailPageMainRight">
                {/* <div className="blogDetailPageMainRightTopImg">
                  <img src="/images/servicesDP2.png" alt="" />
                </div> */}

                {otherBlogs.length > 0 && (
                  <div className="blogDetailPageMainRightOtherBlogs">
                    <span className="allBlogs">{t?.blogPageTitle}</span>
                    <div className="blogDetailPageMainRightOtherBlogsCards">
                      {otherBlogs.map((other) => (
                        <div
                          className="blogDetailPageMainRightOtherBlogsCard"
                          key={other.id}
                        >
                          <Link href={`/blog/${other.url_slug}-${other.id}`}>
                            <span className="otherBlogTitle">
                              {other.title}
                            </span>
                            <span className="otherBlogSubTitle">
                              {other.sub_title}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
