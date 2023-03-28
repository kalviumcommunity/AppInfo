import React from "react";
import "./bodytext.css";
import { useAuth0 } from "@auth0/auth0-react";

function bodytext() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div id="hometext">
      <br />
      <br />
      <br />
      <br />
      <div id="centertext">
        <> Get the inside scoop on all your favourite Android apps!</>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="getStartedDiv">
        <button className="getStarted" onClick={loginWithRedirect}>Get Started</button>
      </div>
    </div>
  );
}

export default bodytext;
