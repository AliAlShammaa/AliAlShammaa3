import React from "react";

export default function HEvent(props) {
  let classes = "carousel-item".concat(props.active);
  return (
    <div className="carousel-item">
      <img src={props.img} />
      <div className="row jumbotron">
        <div className=" col-xs-12 col-sm-12 col-md-9">{props.txt}</div>
      </div>
    </div>
  );
}
