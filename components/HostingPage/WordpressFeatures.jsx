import React from "react";

const WordpressFeatures = ({ categoryData }) => {
  return (
    <div>
      <div className="container">
        <div className="wordpressFeatures">
          <h2>{categoryData[0].title_2}</h2>
          <div className="row">
            <div className="xl-12 lg-12 md-12 sm-12">
              <div
                className="featureCard"
                dangerouslySetInnerHTML={{ __html: categoryData[0].content }}
              ></div>
            </div>

            {/* <div className="xl-4 lg-4 md-6 sm-12">
              <div className="featureCard">
                <h3>WordPress Support 24/7</h3>
                <p>
                  We use LiteSpeed - the fastest web server in the industry.
                  LiteSpeed Web Server delivers a variety of advanced features,
                  exceptional scalability and first-class WordPress site
                  performance.
                </p>
              </div>
            </div>
            <div className="xl-4 lg-4 md-6 sm-12">
              <div className="featureCard">
                <h3>WordPress Support 24/7</h3>
                <p>
                  We use LiteSpeed - the fastest web server in the industry.
                  LiteSpeed Web Server delivers a variety of advanced features,
                  exceptional scalability and first-class WordPress site
                  performance.
                </p>
              </div>
            </div>
            <div className="xl-4 lg-4 md-6 sm-12">
              <div className="featureCard">
                <h3>WordPress Support 24/7</h3>
                <p>We use LiteSpeed - the fastest web server in the industry. LiteSpeed Web Server delivers a variety of advanced features, exceptional scalability and first-class WordPress site performance.</p>
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressFeatures;
