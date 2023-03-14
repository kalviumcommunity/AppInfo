import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Bodytext from "../bodytext/bodytext";
import { useDropzone } from 'react-dropzone'

function Uploadbox(event) {
  // Auto Submit Upload Button

  const FormRef = useRef(null);

  function handleFileChange() {
    FormRef.current.submit();
    console.log("Upload")
    navigate('/details'); }


  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);

  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })





  return (
    <>
<Bodytext />

    <div id="uploaddiv" {...getRootProps()}>
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
        <div class="fileUpload btn btn-primary" >
          <form
            ref={FormRef}
            // action={process.env.REACT_APP_SERVER_URL}
            // method="POST"
            encType="multipart/form-data"
          >
            <label class="upload">
              <input
                accept=".apk"
                {...getInputProps()}
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