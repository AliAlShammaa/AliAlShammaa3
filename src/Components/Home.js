import React, { useEffect, useState } from "react";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Projects.js";
import History from "./inHistory";
import mouse from "../Images/2.jpg";
import "../styles/Home.css";

export default function Home() {
  // let [bool, setBool] = useState(true);
  // useEffect(() => {});

  return (
    <div className="col-12  container-fluid pr-0 pl-0 ">
      <div id="bgPic">
        <div id="bgPic2">
          <h1 id="siteTitle" className="hide">
            <span> Ali Al Shammaa</span>
          </h1>
          <a class="home-down" href="#">
            <i class="fa fa-chevron-down"></i>
          </a>
        </div>
      </div>
      <section id="home">
        <Intro />
        <br />
        <hr id="rule1" className="home-hr" />
        <About />
        <hr className="home-hr" />
        <History />
        <hr className="home-hr" />
        <Project />
        {/* U+1F44B */}
        <br />
        <hr className="home-hr" />
      </section>
    </div>
  );
}
