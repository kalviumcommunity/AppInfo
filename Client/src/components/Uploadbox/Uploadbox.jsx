import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Androidrobot from "../Images/androidrobot.gif";
import { useAuth0 } from "@auth0/auth0-react";
import "./Uploadbox.css";
import { VscCloudUpload } from "react-icons/vsc";
import { useDropzone } from "react-dropzone";
import LoadingText from "../loading/loading";
export const ApkDetails = React.createContext();

function Uploadbox(props) {
  const { user, isAuthenticated } = useAuth0();

  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    setSocket(socketIOClient(process.env.REACT_APP_SERVER_SOCKET_URL));

    console.log("useffect" ,socket);
  }, []);

  const handleFileSelect = ( file) => {
    setLoading(true); // Set loading state to true
    const message = user.sub;
    const data = {
      file: file,
      authId: message,
    };
    console.log("handlefileselect" ,socket);
    socket.emit("upload", data);
    console.log("File Emitting through Upload Button");

    socket.on("data", (apkdatas) => {
      console.log({ apkdatas });
      props.setApkinfo({ ...apkdatas });
      navigate("/details");
      setLoading(false); // Set loading state to false when data is received
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    handleFileSelect(acceptedFiles[0]);
    // Do something with the files
  }, [socket]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {loading ? (
        <div id="loader1">
          <img src={Androidrobot} id="androidbot" alt="" />
          <p id="analyzing">
            Analyzing your file<span className="loader__dot">.</span>
            <span className="loader__dot">..</span>
          </p>
        </div>
      ) : (
        <div className="uploadwindow">
          <p className="labeltxt">
            Get the inside scoop on all your favourite Android apps!
          </p>

          <div className="dnd-container" {...getRootProps()}>
            <div className="dnd">
              <VscCloudUpload id="cloudlogo" />
              <p id="minilabel">Drag & drop to upload</p>
              <label>
                {socket && <div {...getInputProps()} /> }
                <p id="dndbutton">or browse</p>
              </label>

              <p id="format">.apk format only</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Uploadbox;
