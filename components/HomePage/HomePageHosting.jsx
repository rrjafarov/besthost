"use client";
import React, { useState } from "react"; // ← sadece useState eklendi
import HomePageSelectHosting from "./HomePageSelectHosting";

const HomePageHosting = () => {
  const [selected, setSelected] = useState("Wordpress Hosting"); // ← state eklendi

  return (
    <div className="homePageHosting">
      <div className="container">
        <div className="homePageHostingHeaderText">
          <span>The Best Hosting For your Websites</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem arcu
            urna dolor sit amet, consectetursuspenet, consectetursusdisse sit in
            or sit amet, consectetursuspendisse sit in eetiam venenatis.
          </p>
        </div>
        <div className="homePageHostingHeaderButtons">
          <div className="homePageHostingSelectButtons">
            <div
              className={
                "homePageHostingSelectButton" +
                (selected === "Wordpress Hosting" ? " active" : "")
              }
              onClick={() => setSelected("Wordpress Hosting")}
            >
              <span>Wordpress Hosting</span>
            </div>
            <div
              className={
                "homePageHostingSelectButton" +
                (selected === "Web Hosting" ? " active" : "")
              }
              onClick={() => setSelected("Web Hosting")}
            >
              <span>Web Hosting</span>
            </div>
            <div
              className={
                "homePageHostingSelectButton" +
                (selected === "Website builder" ? " active" : "")
              }
              onClick={() => setSelected("Website builder")}
            >
              <span>Website builder</span>
            </div>
          </div>
        </div>
        
        <div className="homePageHostingForWebsite">
          <span>The Best Hosting For your Websites</span>
          <p>From small business to enterprise, we've got you covered!</p>
        </div>

        <HomePageSelectHosting />
      </div>
    </div>
  );
};

export default HomePageHosting;
