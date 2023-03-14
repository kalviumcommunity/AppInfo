import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "../src/components/Navbar/homepage";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";
import Profile from "../src/Building/profile";
import { Auth0Provider } from "@auth0/auth0-react";
import Details from "./components/details/details";
import History from "./components/history/history";
import Guides from "./components/guides/guides";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-tumjlmbcbam83fd5.us.auth0.com"
    clientId="kX8pQGaSE09v6KurOZmcAMJ20WUhv4Zd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >

    <BrowserRouter>

    {/* //navbar */}
      <Homepage />
      {/* <Profile /> */}

      <Routes>

        <Route path="/" element={<Uploadbox />} />

        <Route path="/details" element={<Details />} />
        <Route path="/history" element={<History />} />
        <Route path="/guides" element={<Guides />} />


        {/* <Details /> */}
      </Routes>

    </BrowserRouter>


  </Auth0Provider>

);
