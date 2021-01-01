import "./App.css";
import React from "react";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Social from "./Components/Social.js";
import Message from "./Components/Message.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="maindiv" className="container-fluid bg-secondary pr-0 pl-0">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MessageAli" exact component={Message} />
        </Switch>
      </Router>
      <Social />

      <Footer />
    </div>
  );
}

export default App;
