import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


function details() {


  const [data, setData] = useState({});

  useEffect(() => {
    const socket = io('http://localhost:4000', {
      transports: ['websocket', 'polling', 'flashsocket']
    });

    socket.on('connect', () => {
      console.log('Connected to socket');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
    });

    socket.on('data', (data) => {
      console.clear();
      console.log('Received data');
      setData(data);
    });
  }, []);



  return (<> <br /> <br />
    <div id='details outerdiv'>
      <div id='toc'>
        <table>
          <tr>
            <td>ApplicationName</td>
            <td>{data.Application_Name}</td>
          </tr>
          <tr>
            <td>MinSDKVersion</td>
            <td>{data.MinSDK_Version}</td>
          </tr>
          <tr>
            <td>TargetSdkVersion</td>
            <td>{data.TargetSdk_Version}</td>
          </tr>
          <tr>
            <td>versionName</td>
            <td>{data.version_Name}</td>
          </tr>
          <tr>
            <td>versionCode</td>
            <td>{data.version_Code}</td>
          </tr>
          <tr>
            <td>SupportScreensizes</td>
            <td>{data.Support_Screensizes}</td>
          </tr>

          <tr>
            <td>SupportedScreenDensities</td>
            <td>{data.Supported_ScreenDensities}</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>{data.Feature_s}</td>
          </tr>
          <tr>
            <td>Permissions</td>
            <td>{data.Permission_s}</td>
          </tr>

          <tr>
            <td>Languages</td>
            <td>{data.Language_s}</td>
          </tr>

          <tr>
            <td>Signature</td>
            <td>{data.Signature_s}</td>
          </tr>
        </table>
      </div>
    </div>
    </>
  )
}

export default details