import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../Style/header.css";
import test from "../assets/logo.png";
import dp from "../assets/dp.png";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="main-navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src={test} alt="Logo" className="logo-image" />
            <div className="logo-title">
              <div>SuperScribe</div>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div
            className="wallet-btn-metamask"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 20,
            }}
          >
            <ConnectButton
              showBalance={{
                smallScreen: true,
                largeScreen: true,
              }}
            />
          </div>
          <div>
            {/* <img src={dp} alt="not found" className="profile-logo" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
