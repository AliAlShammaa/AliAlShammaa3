import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Social from "./Components/Social.js";
import Message from "./Components/Message.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const gsap = window.gsap;
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

function App() {
  let bool = false;
  let content = (
    <div className="preload">
      <div id="loading" className="flex justify-center">
        <div className="loader"></div>
        <span id="loadingText" className="mt-3">
          Loading...
        </span>
      </div>
    </div>
  );

  let content2 = (
    <div className="preload preload-finnish">
      <div id="loading" className="flex justify-center">
        <div className="loader"></div>
        <span id="loadingText" className="mt-3">
          Loading...
        </span>
      </div>
    </div>
  );

  let [preloader, setPreloader] = useState(content);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     preload.classList.add("preload-finnish");
  //   });
  // }, []);'

  useEffect(() => {
    setTimeout(() => {
      let title = document.getElementById("siteTitle");
      const preload = document.getElementsByClassName("preload");
      if (!bool) {
        title.classList.remove("hide");
        setPreloader(null);
        // setPreloader(content2);
        bool = true;
      } else {
        setPreloader(content);
        title.classList.add("hide");
        bool = false;
      }
    }, 1000);
  }, []);

  tl.to("#siteTitle", { y: "50%", duration: 1, stagger: 0.25 });

  return (
    <div id="maindiv" className="container-fluid p-0">
      {preloader}
      <div>
        <section className="section">
          <Header />
          <Home />
          <Router>
            {/* <Header /> */}
            <Switch>
              <Route path="/Home" exact component={Home} />
              <Route path="/MessageAli" exact component={Message} />
            </Switch>
          </Router>
          <Social />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
