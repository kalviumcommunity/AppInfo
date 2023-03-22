import React, { createContext } from "react";
import { useRef, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Bodytext from "../bodytext/bodytext";
import socketIOClient from "socket.io-client";


export const ApkDetails =React.createContext()


function Uploadbox(props) {

  const [socket, setSocket] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    
    setSocket(socketIOClient(process.env.REACT_APP_SERVER_SOCKET_URL));
  }, []);
  

  const handleFileSelect = (e) => {
    socket.emit("upload", e.target.files[0]);
    console.log("File Emitted through Upload Button");

    socket.on("data", (apkdatas) => {


      console.log({apkdatas})
      props.setApkinfo({...apkdatas})

      

    navigate("/details" );

    })


    // handleFileChange()
  };

  // Auto Submit Upload Button

  const FormRef = useRef(null);


  function handleFileChange() {
    // FormRef.current.submit();
  }

  


  return (
    <>
      <Bodytext />

      <div id="uploaddiv">
        <div id="outerdiv">
          <div>
            <p id="largepara">
              Click the 'Upload' button to select a file from your computer.
            </p>
            <p id="smallpara">
              Save time and streamline your workflow with our intuitive drag and
              drop feature.
            </p>
          </div>

          <br />
          <div className="fileUpload btn btn-primary">
            <form
              ref={FormRef}
              encType="multipart/form-data"
            >
              <label className="upload">
                <input
                  accept=".apk"
                  type="file"
                  onChange={handleFileSelect}
                />
                <span id="upbutton">Upload</span>
              </label>

              {/* <button type="submit" id="upbutton" >Submit</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uploadbox;
