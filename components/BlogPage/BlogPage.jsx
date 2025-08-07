// import React from "react";
// import Arrow from "@/public/icons/arrow.svg";
// import Link from "next/link";

// const BlogPage = () => {
//   return (
//     <div>
//       <div className="container">
//         <div className="blogPageBreadCrumbs">
//           <Link href="/">
//             <span>BestHost</span>
//           </Link>
//           <Arrow className="breadCrumbsArrow" />
//           <Link href="/blog">
//             <strong>Blog</strong>
//           </Link>
//         </div>
//         <div className="blogPageHeaderText">
//           <span>All the WordPress Tutorials You’ll Ever Need</span>
//           <p>
//             From getting started with WordPress, to knowing what Hotlinking is
//             and how to prevent it, our comprehensive list of WordPress Tutorials
//             covers it all!
//           </p>
//         </div>

//         <div className="blogPageCards">
//           <div className="row">
//             <div className="xl-3 lg-3 md-4 sm-12">
//               <Link href="#">
//                 <div className="blogPageCard">
//                   <div className="blogPageCardImg"></div>
//                   <div className="blogPageCardContent">
//                     <span>Ad eos saepe lucilius</span>
//                     <p>
//                       At eripuit signiferumque sea, vel ad mucius molestie, cu
//                       labitur.
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


















import React from "react";
import Arrow from "@/public/icons/arrow.svg";
import Link from "next/link";
import BasicPagination from "@/components/BasicPagination"; // ①

const BlogPage = () => {
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
          <div className="row">
            <div className="xl-3 lg-3 md-4 sm-6">
              <Link href="#">
                <div className="blogPageCard">
                  <div className="blogPageCardImg"></div>
                  <div className="blogPageCardContent">
                    <span>Ad eos saepe lucilius</span>
                    <p>
                      At eripuit signiferumque sea, vel ad mucius molestie, cu
                      labitur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-3 lg-3 md-4 sm-6">
              <Link href="#">
                <div className="blogPageCard">
                  <div className="blogPageCardImg"></div>
                  <div className="blogPageCardContent">
                    <span>Ad eos saepe lucilius</span>
                    <p>
                      At eripuit signiferumque sea, vel ad mucius molestie, cu
                      labitur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-3 lg-3 md-4 sm-6">
              <Link href="#">
                <div className="blogPageCard">
                  <div className="blogPageCardImg"></div>
                  <div className="blogPageCardContent">
                    <span>Ad eos saepe lucilius</span>
                    <p>
                      At eripuit signiferumque sea, vel ad mucius molestie, cu
                      labitur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl-3 lg-3 md-4 sm-6">
              <Link href="#">
                <div className="blogPageCard">
                  <div className="blogPageCardImg"></div>
                  <div className="blogPageCardContent">
                    <span>Ad eos saepe lucilius</span>
                    <p>
                      At eripuit signiferumque sea, vel ad mucius molestie, cu
                      labitur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <BasicPagination /> 
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
