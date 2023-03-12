import React from "react";
import ReactDOM from "react-dom/client";
import Bodytext from "../src/components/bodytext/bodytext";
import Homepage from "../src/components/Navbar/homepage";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";
import Profile from "../src/Building/profile";
import { Auth0Provider } from "@auth0/auth0-react";
import Details from "./components/Images/details/details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-tumjlmbcbam83fd5.us.auth0.com"
    clientId="kX8pQGaSE09v6KurOZmcAMJ20WUhv4Zd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Homepage />
    <Bodytext />
    <Uploadbox />
    <br/>
    {/* <Profile /> */}
    {/* <Details/> */}

  </Auth0Provider>
  
);
