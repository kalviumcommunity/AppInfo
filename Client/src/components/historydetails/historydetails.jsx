import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect ,useState } from 'react';

function historydetails(props) {


    
    useEffect(()=>{
      console.log(props.historyDetails)
      },[])
    
    
    
      return (<> 
        <div id='details outerdiv'>
          <div id='toc'>
            <table>
              <tr>
                <td>ApplicationName</td>
                <td>{props.historyDetails.Application_Name}</td>
              </tr>
              <tr>
                <td>MinSDKVersion</td>
                <td>{props.historyDetails.MinSDK_Version}</td>
              </tr>
              <tr>
                <td>TargetSdkVersion</td>
                <td>{props.historyDetails.TargetSdk_Version}</td>
              </tr>
              <tr>
                <td>versionName</td>
                <td>{props.historyDetails.version_Name}</td>
              </tr>
              <tr>
                <td>versionCode</td>
                <td>{props.historyDetails.version_Code}</td>
              </tr>
              <tr>
                <td>SupportScreensizes</td>
                <td>{props.historyDetails.Support_Screensizes}</td>
              </tr>
    
              <tr>
                <td>SupportedScreenDensities</td>
                <td className='overflow'>{props.historyDetails.Supported_ScreenDensities}</td>
              </tr>
              <tr>
                <td>Features</td>
                <td className='overflow'>{props.historyDetails.Feature_s}</td>
              </tr>
              <tr>
                <td>Permissions</td>
                <td className='overflow'>{props.historyDetails.Permission_s}</td>
              </tr>
    
              <tr>
                <td>Languages</td>
                <td className='overflow'>{props.historyDetails.Language_s}</td>
              </tr>
    
              <tr>
                <td>Signature</td>
                <td className='overflow'>{props.historyDetails.Signature_s}</td>
              </tr>
            </table>
          </div>
        </div>
        </>
  )
}

export default historydetails