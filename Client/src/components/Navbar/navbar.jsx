import React from "react";
import logo from "../Images/header/logo.svg";
import Profile from "../Images/profile.jpg";
import "../styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    if (user) {
      props.setLogin(true);
    }
  }, [user]);

  //routes
  function navigatetohistory() {
    navigate("/history");
  }
  function navigatetoguides() {
    console.log("guides")

    navigate("/guides");
  }
  function onClickOfLogo() {
    navigate("/");
  }

  return (
    <>
      <header className="headerdiv" id="headerdiv">
        <div className="logodp">
          {/* <img src={logo} alt=""  /> */}
            <h1 id="header1" onClick={() => onClickOfLogo()} >APK INFO</h1>
        </div>

        <div id="grideven" className="grideven">
          {isAuthenticated ? (
            <span id="navspan" onClick={() => navigatetohistory()}>
              My Logs
            </span>
          ) : isLoading ? (
            <span id="navspan" onClick={() => navigatetohistory()}>
              ...
            </span>
          ) : (
            <></>
          )}
          <span id="navspan" onClick={() => navigatetoguides()}>
            How to use?
          </span>
          <div>
            <Login />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
