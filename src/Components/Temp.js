import React from "react";
import "../Style/temp.css";

export default function Temp() {
  return (
    <div className="tempp">
      <h4 className="wrap-unwrap-heading">
        Connect Wallet here for Wrap & UnWrap Tokens
      </h4>
      <iframe
        src="https://app.superfluid.finance/wrap?upgrade"
        height="500"
        width="700"
      ></iframe>
    </div>
  );
}
