import React from "react";
import "../../../Style/token.css";
import Wrap from "./Wrap";
import Unwrap from "./Unwrap";

export default function Super() {
  return (
    <div>
      <div className="container">
        {/* <h1>Supertoken</h1> */}
        <div className="main-super">
          <div className="wwrap">
            <button className="wrap">Wrap</button>
            <button className="wrap">Unwrap</button>
          </div>
          <div className="wrap-unwrap">
            <Wrap />
            {/* <Unwrap /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
