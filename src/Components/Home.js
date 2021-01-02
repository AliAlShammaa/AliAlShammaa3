import React from "react";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Projects.js";
import History from "./inHistory";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="col-12  container-fluid pr-0 pl-0 ">
      <div id="overlays">
        <div id="bgPic"></div>{" "}
      </div>
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
    </div>
  );
}
