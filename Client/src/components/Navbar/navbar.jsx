import React from "react";
import logo from "../Images/header/logo.svg";
import Profile from "../Images/profile.jpg";
import "../styles.css";
import { useNavigate } from 'react-router-dom';
import Login from "../Login";
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAuth0();
  //routes
  function navigatetohistory() { navigate('/history'); }
  function navigatetoguides() { navigate('/guides') }
  function onClickOfLogo() { navigate('/') }

  return (
    <>

      <header className="headerdiv" id="headerdiv">
        <div className="header1" id="header1">
          <img src={logo} alt="" onClick={() => onClickOfLogo()} />
          <span></span>
        </div>

        <div id="grideven" className="grideven">

          {isAuthenticated ? (
            <span id="navspan" onClick={() => navigatetohistory()}>PREVIOUS-LOGS</span>) : isLoading ? (
              
              <span id="navspan" onClick={() => navigatetohistory()}>PREVIOUS-LOGS</span>
            ) :
            <></>


          }
          <span id="navspan" onClick={() => navigatetoguides()}>GUIDES</span>
          <span id="navspan"></span>
          <div
          //  onClick={() => loginWithRedirect()}
          >
            <Login />

            {/* <img src={Profile} alt="" id="dp" /> */}
          </div>
          {/* //login button */}
        </div>

      </header>



    </>
  );
};

export default Navbar;