import { React, useState, useEffect } from "react";
import "../Style/mainpage.css";
// import Ssuper from "./supertoken/Token";
import Token from "../Components/mainpages/supertoken/Token";
import Sendstream from "./mainpages/sendstream/Sendstream";
import Modify from "./mainpages/Modify";
import { NavLink, useLocation } from "react-router-dom";
import Temp from "./Temp";
import SuperToken from "../pages/Two";
import Super from "../Components/mainpages/supertoken/Token";

export default function Mainpage() {
  const [activeComponent, setActiveComponent] = useState("supertokens");

  const location = useLocation();
  useEffect(() => {
    switch (window.location.pathname) {
      case "/dashboard/supertokens":
        setActiveComponent("supertokens");
        break;
      case "/dashboard/sendstreams":
        setActiveComponent("sendstreams");
        break;
      case "/dashboard/modifystreams":
        setActiveComponent("modifystreams");
        break;
      default:
        setActiveComponent("super");
    }
  }, [location]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "supertokens":
        return <Temp />;
      case "sendstreams":
        return <Sendstream />;
      case "modifystreams":
        return <Modify />;
      default:
        return <Temp />;
    }
  };

  return (
    <div>
      <div className="heading-mainpage">
        <h1>Welcome to SuperScribe!</h1>
      </div>
      <div className="option">
        <NavLink
          to="/dashboard/supertokens"
          className="btn-option"
          onClick={() => setActiveComponent("supertokens")}
          isActive={() => activeComponent === "supertokens"}
        >
          Super Tokens
        </NavLink>
        <NavLink
          to="/dashboard/sendstreams"
          className="btn-option"
          onClick={() => setActiveComponent("sendstreams")}
          isActive={() => activeComponent === "sendstreams"}
        >
          Send Streams
        </NavLink>
        <NavLink
          to="/dashboard/modifystreams"
          className="btn-option"
          onClick={() => setActiveComponent("modifystreams")}
          isActive={() => activeComponent === "modifystreams"}
        >
          Modify Streams
        </NavLink>
        {/* <NavLink className="btn-option">Modify & Delete Stream</NavLink> */}
        {/* <h1 className="wrap-unwrap-heading">
          Connect Wallet here for Wrap & UnWrap Tokens
        </h1> */}
      </div>
      {renderComponent()}
      {/* <div className="main-content">
        <Super />
        <Sendstream />
      </div> */}
    </div>
  );
}
