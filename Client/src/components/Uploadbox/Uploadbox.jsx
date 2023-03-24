import React from "react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bodytext from "../bodytext/bodytext";
import socketIOClient from "socket.io-client";
import Androidrobot from '../Images/androidrobot.gif'
import { useAuth0 } from "@auth0/auth0-react";

export const ApkDetails = React.createContext()

function Uploadbox(props) {

  const { user, isAuthenticated } = useAuth0();

  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state


  const navigate = useNavigate();

  useEffect(() => {
    setSocket(socketIOClient(process.env.REACT_APP_SERVER_SOCKET_URL));
  }, []);

  const handleFileSelect = (e) => {
    setLoading(true); // Set loading state to true
    const message = user.sub
    const data = {
      file: e.target.files[0],
      authId: message
    }
    socket.emit("upload", data);
    console.log("File Emitting through Upload Button");

    socket.on("data", (apkdatas) => {
      console.log({ apkdatas })
      props.setApkinfo({ ...apkdatas })
      navigate("/details");
      setLoading(false); // Set loading state to false when data is received
    })
  };

  // Auto Submit Upload Button
  const FormRef = useRef(null);

  return (

    <>
      {loading ? (
        <>
          <img src={Androidrobot} id="androidbot" alt="" />
        </>
      ) :

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
                <form ref={FormRef} encType="multipart/form-data">
                  <label className="upload">
                    <input accept=".apk" type="file" onChange={handleFileSelect} />
                    <span id="upbutton">Upload</span>
                  </label>
                </form>
              </div>


            </div>
          </div>
        </>
      }

    </>
  );
}

export default Uploadbox;