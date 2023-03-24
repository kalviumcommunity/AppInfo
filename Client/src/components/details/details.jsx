import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from "react-router-dom";



function details({apkinfo}) {

  const navigate = useNavigate()


  useEffect(()=>{
    if(!apkinfo.application_name){
        navigate('/')
    }
  },[])


  return (<> 
    <div id='details outerdiv'>
      <div id='toc'>
        <table>
          <thead>
          <tr>
            <th>ApplicationName</th>
            <th>{apkinfo.application_name}</th>
          </tr>
          </thead>
        
          <tbody>
          <tr>
            <td>MinSDKVersion</td>
            <td>{apkinfo.minsdk_version}</td>
          </tr>
          <tr>
            <td>TargetSdkVersion</td>
            <td>{apkinfo.targetSdk_version}</td>
          </tr>
          <tr>
            <td>versionName</td>
            <td>{apkinfo.version_name}</td>
          </tr>
          <tr>
            <td>versionCode</td>
            <td>{apkinfo.version_code}</td>
          </tr>
          <tr>
            <td>SupportScreensizes</td>
            <td>{apkinfo.support_screensizes}</td>
          </tr>

          <tr>
            <td>SupportedScreenDensities</td>
            <td className='overflow'>{apkinfo.supported_screendensities}</td>
          </tr>
          <tr>
            <td>Features</td>
            <td className='overflow'>{apkinfo.feature_s}</td>
          </tr>
          <tr>
            <td>Permissions</td>
            <td className='overflow'>{apkinfo.permission_s}</td>
          </tr>

          <tr>
            <td>Languages</td>
            <td className='overflow'>{apkinfo.language_s}</td>
          </tr>

          <tr>
            <td>Signature</td>
            <td className='overflow'>{apkinfo.signature_s}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default details

