import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";
import BasicPagination from "@/components/BasicPagination"; // ①

const BlogPage = ({ blogsData }) => {
  return (
    <div>
      <div className="container">
        <div className="blogPageBreadCrumbs">
          <Link href="/">
            <span>BestHost</span>
          </Link>
          <Arrow className="breadCrumbsArrow" />
          <Link href="/blog">
            <strong>Blog</strong>
          </Link>
        </div>
        <div className="blogPageHeaderText">
          <span>All the WordPress Tutorials You’ll Ever Need</span>
          <p>
            From getting started with WordPress, to knowing what Hotlinking is
            and how to prevent it, our comprehensive list of WordPress Tutorials
            covers it all!
          </p>
        </div>

        <div className="blogPageCards">
          <div className="container">
            <div className="row">
              {blogsData.map((blogData) => (
                <div className="xl-3 lg-3 md-4 sm-6" key={blogData.id}>
                  <Link
                    id="filldersting"
                    href={`/blog/${blogData.url_slug}-${blogData.id}`}
                  >
                    <div className="blogPageCard">
                      <div className="blogPageCardImg">
                        <img
                          src={`https://admin-besthost.onestudio.az/storage/${blogData.image}`}
                          alt=""
                        />
                      </div>
                      <div className="blogPageCardContent">
                        <span>{blogData.title}</span>
                        <strong>{blogData.sub_title}</strong>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <BasicPagination />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
