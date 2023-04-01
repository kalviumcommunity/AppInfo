import React from "react";
import { useEffect, useState } from "react";
import "./historydetails.css";
import { useNavigate } from "react-router-dom";

function historydetails(props) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(props.historyDetails);
  }, []);

  function navigatetohistory() {
    navigate("/history");
  }

  return (
    <>
      <p id="logdetailsHeading">
        <span id="logstyle" onClick={() => navigatetohistory()}>
          My Logs
        </span>
         >
      </p>

      <div id="logDetailsAppName">{props.historyDetails.application_Name} (Application Name)</div>

      <div id="logDetailsTimeStamp" >
        <span>{props.historyDetails.date}</span>
      </div>


      <hr id="historyHR" />
      <div id="details outerdiv">
        <div id="toc">
          <table>
            <tr>
              <td>ApplicationName</td>
              <td>{props.historyDetails.application_Name}</td>
            </tr>
            <tr>
              <td>MinSDKVersion</td>
              <td>{props.historyDetails.minsdkVersion}</td>
            </tr>
            <tr>
              <td>TargetSdkVersion</td>
              <td>{props.historyDetails.targetSdkVersion}</td>
            </tr>
            <tr>
              <td>versionName</td>
              <td>{props.historyDetails.versionName}</td>
            </tr>
            <tr>
              <td>versionCode</td>
              <td>{props.historyDetails.versionCode}</td>
            </tr>
            <tr>
              <td>SupportScreensizes</td>
              <td>{props.historyDetails.supportScreensizes}</td>
            </tr>

            <tr>
              <td>SupportedScreenDensities</td>
              <td className="overflow">
                {props.historyDetails.supportedScreendensities}
              </td>
            </tr>
            <tr>
              <td>Features</td>
              <td className="overflow">{props.historyDetails.features}</td>
            </tr>
            <tr>
              <td>Permissions</td>
              <td className="overflow">{props.historyDetails.permissions}</td>
            </tr>

            <tr>
              <td>Languages</td>
              <td className="overflow">{props.historyDetails.languages}</td>
            </tr>

            <tr>
              <td>Signature</td>
              <td className="overflow">{props.historyDetails.signatures}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default historydetails;
