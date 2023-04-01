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
        <table id="tablebottompadding">
          <thead>
          <tr>
            <td id="tableborder">ApplicationName</td>
            <td id="tableborder">{apkinfo.application_Name}</td>
          </tr>
          </thead>
        
          <tbody>
          <tr>
            <td id="tableborder">MinSDKVersion</td>
            <td id="tableborder">{apkinfo.minsdkVersion}</td>
          </tr>
          <tr>
            <td id="tableborder">TargetSdkVersion</td>
            <td id="tableborder">{apkinfo.targetSdkVersion}</td>
          </tr>
          <tr>
            <td id="tableborder">versionName</td>
            <td id="tableborder">{apkinfo.versionName}</td>
          </tr>
          <tr>
            <td id="tableborder">versionCode</td>
            <td id="tableborder">{apkinfo.versionCode}</td>
          </tr>
          {/* <tr>
            <td>Package Name </td>
            <td>{apkinfo.packageName}</td>
          </tr> */}
          <tr>
            <td id="tableborder">SupportScreensizes</td>
            <td id="tableborder">{apkinfo.supportScreensizes}</td>
          </tr>

          <tr>
            <td id="tableborder">SupportedScreenDensities</td>
            <td id="tableborder" className='overflow'>{apkinfo.supportedScreendensities}</td>
          </tr>
          <tr>
            <td id="tableborder">Features</td>
            <td  id="tableborder"className='overflow'>{apkinfo.features}</td>
          </tr>
          <tr>
            <td id="tableborder">Permissions</td>
            <td  id="tableborder"className='overflow'>{apkinfo.permissions}</td>
          </tr>

          <tr>
            <td id="tableborder">Languages</td>
            <td id="tableborder" className='overflow'>{apkinfo.languages}</td>
          </tr>

          <tr>
            <td id="tableborder">Signature</td>
            <td  id="tableborder"className='overflow'>{apkinfo.signatures}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default details

