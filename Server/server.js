const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();
const { exec } = require("child_process");

// configure multer to use the destination folder and keep the original file name
let AppName;
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    AppName = file.originalname;
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  //Upload Test
  console.log("File uploaded successfully!");

  if (AppName != undefined) {
    
    // ///////////////////////////////////////////////////////
    console.log("Executing cd uploads && ./aapt2 dump badging " + AppName);

    exec("cd uploads && ./aapt2 dump badging " + AppName, (a, b, c) => {
      var str = b;
      var res = str.replace(/\s+/g, "");
      // console.log(res);t

      fs.writeFileSync("apk.txt", res);

      var txt = res;

      let data = txt;

      {
        let startIndex = data.indexOf("label=") + 7;

        let endIndex = data.indexOf("'icon='");

        if (startIndex !== -1 && endIndex !== -1) {
          let name = data.substring(startIndex, endIndex);
          console.log("App Name : " + name);
        } else {
          console.log("Name not found in data.");
        }
      }

      {
        let startIndex = data.indexOf("sdkVersion:'") + 12;

        let endIndex = data.indexOf("'targetSdkVersion:");

        if (startIndex !== -1 && endIndex !== -1) {
          let name = data.substring(startIndex, endIndex);
          console.log("Min SDK Version : " + name);
        } else {
          console.log("Min SDK not found in data.");
        }
      }
    });



    
//removing the APK file
exec("cd uploads && rm "+AppName, (a, b, c) => {
  console.log("File deleted "+ AppName)
})

  } else {
  }
  // delete file named 'sample.txt'
});

// ///////////////////////////////////////////////////

const port = 3005; // or any port you prefer

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

