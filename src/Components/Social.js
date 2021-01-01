import React from "react";
import "../styles/Social.css";

function Social() {
  return (
    <div className="social container-fluid padding">
      <div className="row padding text-white text-center">
        <div className="col-12 mt-4">
          <h1 className="display-4">Connect</h1>
        </div>
        <hr></hr>
        <div className="col-12 mt-3">
          <a href="mailto:a8alsham@uwaterloo.ca">
            <i className="fa fa-envelope-square fa-4x mr-2" />
          </a>
          <a href="https://www.linkedin.com/in/ali-al-shammaa-508a59bb/">
            <i className="fa fa-linkedin-square fa-4x mr-2 ml-2" />
          </a>
          <a href="https://github.com/AliAlShammaa/">
            <i className="fa fa-github-square  m-0 p-0 fa-4x ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
