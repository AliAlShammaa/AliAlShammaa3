import React from "react";
import HEvent from "./Event.js";

function Carousel(props) {
  return (
    <div id="slides" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ul>

      {/* Carousel-items */}
      <div className="carousel-inner">
        {/* <HEvent img={chess} txt={props.txt1} active="active" />
        <HEvent img={chess} txt={props.txt2} active="" />
        <HEvent img={chess} txt={props.txt3} active="" /> */}

        <div className="carousel-item active">
          <img src={props.img1} />
          <div className="row jumbotron">
            <strong>
              <div className="col-2">
                <div className="row text-center">
                  <h6 className="col-6 ml-2">{props.date}</h6>
                  <h4 className=" col-6">{props.yr1}</h4>{" "}
                </div>
              </div>
            </strong>
            <div className=" col-xs-10 col-sm-10 col-md-9">{props.txt1} </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.img2} />
          <div className="row jumbotron">
            <strong>
              <div className="col-2">
                <div className="row text-center">
                  <h6 className="col-6 ml-2">{props.date}</h6>
                  <h4 className=" col-6">{props.yr2}</h4>{" "}
                </div>
              </div>
            </strong>
            <div className=" col-xs-10 col-sm-10 col-md-9">{props.txt2} </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.img3} />
          <div className="row jumbotron">
            <strong>
              <div className="col-2">
                <div className="row text-center">
                  <h6 className="col-6 ml-2">{props.date}</h6>
                  <h4 className=" col-6">{props.yr3}</h4>{" "}
                </div>
              </div>
            </strong>
            <div className=" col-xs-10 col-sm-10 col-md-9">{props.txt3} </div>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#slides" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#slides" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Carousel;
