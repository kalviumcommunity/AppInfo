import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from "react-router-dom";



function details({apkinfo}) {

  const navigate = useNavigate()


  useEffect(()=>{
    if(!apkinfo.Application_Name){
      navigate('/')
    }
  },[])



  return (<> <br /> <br />
    <div id='details outerdiv'>
      <div id='toc'>
        <table>
          <thead>
          <tr>
            <th>ApplicationName</th>
            <th>{apkinfo.Application_Name}</th>
          </tr>
          </thead>
        
          <tbody>
          <tr>
            <td>MinSDKVersion</td>
            <td>{apkinfo.MinSDK_Version}</td>
          </tr>
          <tr>
            <td>TargetSdkVersion</td>
            <td>{apkinfo.TargetSdk_Version}</td>
          </tr>
          <tr>
            <td>versionName</td>
            <td>{apkinfo.version_Name}</td>
          </tr>
          <tr>
            <td>versionCode</td>
            <td>{apkinfo.version_Code}</td>
          </tr>
          <tr>
            <td>SupportScreensizes</td>
            <td>{apkinfo.Support_Screensizes}</td>
          </tr>

          <tr>
            <td>SupportedScreenDensities</td>
            <td className='overflow'>{apkinfo.Supported_ScreenDensities}</td>
          </tr>
          <tr>
            <td>Features</td>
            <td className='overflow'>{apkinfo.Feature_s}</td>
          </tr>
          <tr>
            <td>Permissions</td>
            <td className='overflow'>{apkinfo.Permission_s}</td>
          </tr>

          <tr>
            <td>Languages</td>
            <td className='overflow'>{apkinfo.Language_s}</td>
          </tr>

          <tr>
            <td>Signature</td>
            <td className='overflow'>{apkinfo.Signature_s}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default details