import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from "react-router-dom";



function details({apkinfo}) {

  const navigate = useNavigate()


  useEffect(()=>{
    if(!apkinfo.application_Name){
        navigate('/')
    }
  },[])


  return (<> 
    <div id='details outerdiv'>
      <div id='toc'>
        <table>
          <thead>
          <tr>
            <td>ApplicationName</td>
            <td>{apkinfo.application_Name}</td>
          </tr>
          </thead>
        
          <tbody>
          <tr>
            <td>MinSDKVersion</td>
            <td>{apkinfo.minsdkVersion}</td>
          </tr>
          <tr>
            <td>TargetSdkVersion</td>
            <td>{apkinfo.targetSdkVersion}</td>
          </tr>
          <tr>
            <td>versionName</td>
            <td>{apkinfo.versionName}</td>
          </tr>
          <tr>
            <td>versionCode</td>
            <td>{apkinfo.versionCode}</td>
          </tr>
          {/* <tr>
            <td>Package Name </td>
            <td>{apkinfo.packageName}</td>
          </tr> */}
          <tr>
            <td>SupportScreensizes</td>
            <td>{apkinfo.supportScreensizes}</td>
          </tr>

          <tr>
            <td>SupportedScreenDensities</td>
            <td className='overflow'>{apkinfo.supportedScreendensities}</td>
          </tr>
          <tr>
            <td>Features</td>
            <td className='overflow'>{apkinfo.features}</td>
          </tr>
          <tr>
            <td>Permissions</td>
            <td className='overflow'>{apkinfo.permissions}</td>
          </tr>

          <tr>
            <td>Languages</td>
            <td className='overflow'>{apkinfo.languages}</td>
          </tr>

          <tr>
            <td>Signature</td>
            <td className='overflow'>{apkinfo.signatures}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default details

