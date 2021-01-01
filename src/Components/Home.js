import React from "react";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Projects.js";
import History from "./inHistory";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="col-12 background container-fluid pt-0 pr-0 pl-0 ">
      <Intro /> <br />
      <hr className="home-hr" />
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
