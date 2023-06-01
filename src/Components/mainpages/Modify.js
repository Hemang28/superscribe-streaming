import React from "react";
import Header from "../Header";
import "../../Style/modify.css";
import Table from "../mainpages/modify/Table";

export default function Modify() {
  return (
    <div>
      <div className="modify-stream-page">
        <div className="modify-stream">
          <div className="stream-table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
