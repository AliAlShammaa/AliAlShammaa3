import React from "react";

function Footer(props) {
  return (
    <footer
      id="Footer"
      className="mt-5 container-fixed padding mr-0 ml-0 bg-light"
    >
      <div>
        <div className="row text-dark text-center ">
          <br />
          <div className="col-md-12 mt-3 text-center">
            <span className="display-7"> By </span>
            <h1 className="display-4">Ali Al Shammaa</h1>
          </div>
          <hr></hr>
          <div className="col-12">
            <span className="lead">
              {" "}
              Copyright
              <i className="fa fa-copyright ml-2" /> 2021
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
