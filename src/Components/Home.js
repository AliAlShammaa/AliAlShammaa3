import React from "react";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Projects.js";
import History from "./inHistory";
import "../styles/Home.css";
import CSBg from "../Images/cs.jpg";

export default function Home() {
  return (
    <div className="col-12  container-fluid pt-0 pr-0 pl-0 ">
      <Intro /*style="background-image:"{ CSBg } ";"*/ />
      <br />
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
