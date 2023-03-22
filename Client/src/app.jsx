import React from 'react'
import Homepage from "../src/components/Navbar/homepage";
import Uploadbox from "../src/components/Uploadbox/Uploadbox";
import Profile from "../src/Building/profile";
import { Auth0Provider } from "@auth0/auth0-react";
import Details from "./components/details/details";
import History from "./components/history/history";
import Guides from "./components/guides/guides";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Historydetails from './components/historydetails/historydetails';


function app() {

  const [apkinfo, setApkinfo] = useState({});
  const [historyDetails , setHistoryDetails]=useState()
console.log(process.env.REACT_APP_AUTH0_CLIENT_ID)
  return (
<Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >

    <BrowserRouter>

    {/* //navbar */}
      <Homepage />
      {/* <Profile /> */}

      <Routes>

        <Route path="/" element={<Uploadbox apkinfo={apkinfo} setApkinfo={setApkinfo}/>} />

        <Route path="/details" element={<Details apkinfo={apkinfo}  />} />
        <Route path="/history" element={<History historyDetails={historyDetails} setHistoryDetails={setHistoryDetails} />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/history/details" element={<Historydetails historyDetails={historyDetails}/>} />
        


        {/* <Details /> */}
      </Routes>

    </BrowserRouter>


  </Auth0Provider>
    )
}

export default app