import "./App.css";
import React, { useEffect } from "react";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Social from "./Components/Social.js";
import Message from "./Components/Message.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let content;
  // const preload = document.getElementsByClassName("preload");
  const preloader = (
    <div className="preload">
      <div className="flex justify-center">
        <div className="loader"></div>
        <span>Loading...</span>
      </div>
    </div>
  );

  content = preloader;

  const body = (
    <section className="section">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MessageAli" exact component={Message} />
        </Switch>
      </Router>
      <Social />

      <Footer />
    </section>
  );

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     preload.classList.add("preload-finish");
  //   });
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     content = body;
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div id="maindiv" className="container-fluid bg-secondary p-0">
      {preloader}
      {body}
    </div>
  );
}

export default App;
