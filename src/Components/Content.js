import React, { Component } from "react";
import "../Style/content.css";
import img from "../assets/superscribe.png";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  const goToSuperToken = () => {
    navigate("/dashboard/*");
  };
  return (
    <div className="main">
      <div className="con1">
        <div className="left-con">
          <div className="image-con">
            <img src={img} alt="" />
          </div>
          <div className="get-started">
            <a href="/dashboard">
              {" "}
              <button className="btn-start" onClick={goToSuperToken()}>
                <b>Get Started</b>
              </button>
            </a>
          </div>
        </div>
        <div className="right-con">
          <h1 className="right-con-title">
            Experience the Future of Streaming
          </h1>
          <br></br>
          <p>
            Join the SuperScribe revolution and unlock a new era of seamless
            transactional immersion. <br></br>Say goodbye to frustrations and
            hello to uninterrupted & Self-Operating Streaming.
          </p>
          <p>
            Get started today and elevate your streaming experience to new
            heights.
          </p>
        </div>
      </div>
      <div className="con1-img"></div>
      {/* <div className="con-2">
        <div className="con-2-i">
          <h1>How it Works ?</h1>
        </div>
        <div className="con-2-ii"> */}
      {/* <ul>
            <li>
              <b>Wallet Connect:</b> Simplify transactions by seamlessly
              connecting your wallet.
            </li>
            <li>
              <b>Super Token transactions:</b> Experience secure and efficient
              transactions using Super Tokens.
            </li>
            <li>
              <b>Real-time monitoring with Net Flow:</b> Stay informed with live
              stream monitoring.
            </li>
            <li>
              <b>Asset conversion with Wrap & Unwrap:</b> Convert assets
              effortlessly within the platform.
            </li>
            <li>
              <b>Create Stream:</b> Personalize and tailor your streaming
              experience.
            </li>
            <li>
              <b>Scheduling options:</b> Plan and schedule streams for
              convenient streaming sessions.
            </li>
            <li>
              <b>Total Stream tracking:</b> Access detailed analytics and
              insights for your streams.
            </li>
            <li>
              <b>Send Stream:</b> Initiate streams confidently with ease of use.
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Content;
