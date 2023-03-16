const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const siofu = require("socketio-file-upload");
const cors = require("cors");
const { writeFile } = require("fs");
const fs = require("fs");
const { exec } = require("child_process");
const { execSync } = require("child_process");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
  maxHttpBufferSize: 1e9, // 1000 MB
});

app.use(cors());
app.use(siofu.router);

// mongodb
const url =
  "mongodb+srv://balajis:hcsnTgKf5YhQ6oGw@cluster1.uzi21wt.mongodb.net/?retryWrites=true&w=majority";

const schema = new mongoose.Schema({
  Application_Name: { type: String, required: false },
  MinSDK_Version: { type: String, required: false },
  version_Name: { type: String, required: false },
  version_Code: { type: String, required: false },
  Package_Name: { type: String, required: false },
  TargetSdk_Version: { type: String, required: false },
  Support_Screensizes: { type: String, required: false },
  Supported_ScreenDensities: { type: String, required: false },
  Feature_s: { type: String, required: false },
  Permission_s: { type: String, required: false },
  Language_s: { type: String, required: false },
  Signature_s: { type: String, required: false },
});

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//declaration
let data;
let Application_Name;
let MinSDK_Version;
let version_Name;
let version_Code;
let Package_Name;
let TargetSdk_Version;
let Support_Screensizes;
let Supported_ScreenDensities;
let Feature_s;
let Permission_s;
let Language_s;
let Signature_s;

io.on("connection", (socket) => {
  console.log("Client connected with Socket ID: " + socket.id);
  socket.on("upload", (file, callback) => {
    // console.log(file); // <Buffer 25 50 44 ...>

    // save the file to the disk, for example
    fs.writeFileSync("./uploads/app.apk", file);
    console.log("File Upload Successful");

    // file actions
    try {
      const b = execSync("cd uploads && ./aapt2 dump badging app.apk");
      var str = b + "compressed";
      var res = str.replace(/\s+/g, "");

      // storing the Text file
      fs.writeFileSync("apk.txt", res);
      data = res;

      CallOutFuntion();
    } catch (error) {
      console.log("from intial codesync", error);
    }
  });

  function Datas() {
    alldatas = {
      Application_Name,
      MinSDK_Version,
      version_Name,
      version_Code,
      Package_Name,
      TargetSdk_Version,
      Support_Screensizes,
      Supported_ScreenDensities,
      Feature_s,
      Permission_s,
      Language_s,
      Signature_s,
    };

    // console.log(alldatas)

    console.log("APK DETAILS ARE SENT");

    io.emit("data", alldatas);

    mongodb(alldatas);

    deleter()
  }
  //all details
  {
    function ApplicationName() {
      let startIndex = data.indexOf("label=") + 7;

      let endIndex = data.indexOf("'icon='");

      if (startIndex !== -1 && endIndex !== -1) {
        let App_Name = data.substring(startIndex, endIndex);
        // console.log("App Name : " + App_Name)

        Application_Name = App_Name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function MinSDKVersion() {
      let startIndex = data.indexOf("sdkVersion:'") + 13;

      let endIndex = data.indexOf("'targetSdkVersion:");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Min SDK Version : " + name);
        MinSDK_Version = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function versionName() {
      let startIndex = data.indexOf("versionName='") + 13;

      let endIndex = data.indexOf("'platformBuildV");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("versionName : " + name);
        version_Name = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function versionCode() {
      let startIndex = data.indexOf("'versionCode='") + 14;

      let endIndex = data.indexOf("'versionName");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("versionCode : " + name);
        version_Code = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function PackageName() {
      let startIndex = data.indexOf("package:name='") + 14;

      let endIndex = data.indexOf("'versionCode");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Package Name : " + name);
        Package_Name = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function TargetSdkVersion() {
      let startIndex = data.indexOf("targetSdkVersion:'") + 18;

      let endIndex = data.indexOf("'uses-permis");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Target SdkVersion : " + name);
        TargetSdk_Version = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function SupportScreensizes() {
      let startIndex = data.indexOf("supports-screens:") + 17;

      let endIndex = data.indexOf("supports-any-");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Support Screen sizes: " + name);
        Support_Screensizes = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function SupportedScreenDensities() {
      let startIndex = data.indexOf("u'densities:'") + 17;

      let endIndex = data.indexOf("compressed");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Supported Screen Densities: " + name);
        Supported_ScreenDensities = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function Features() {
      let startIndex = data.indexOf("feature-group:label=''") + 22;

      let endIndex = data.indexOf("other-activities");

      if (startIndex !== -1 && endIndex !== -1) {
        let str = data.substring(startIndex, endIndex);

        let newStr = "";

        for (let i = 0; i < str.length; i++) {
          if (str[i] === "'") {
            newStr += str[i];
            while (i + 1 < str.length && str[i + 1] !== "'") {
              newStr += str[i + 1];
              i++;
            }
            newStr += "',";
          } else {
            newStr += str[i];
          }
        }

        // console.log("Features : " + newStr);
        Feature_s = newStr;
      } else {
        console.log("Name not found in data.");
      }
    }

    function Permissions() {
      exec(`cd uploads && ./aapt2 dump permissions app.apk`, (a, values, c) => {
        // console.log("Permissions : " + values);
        Permission_s = values;
        //Calling Languages After Permissions
        Languages();
      });
    }

    function Languages() {
      let startIndex = data.indexOf("locales:") + 8;

      let endIndex = data.indexOf("densities");

      if (startIndex !== -1 && endIndex !== -1) {
        let name = data.substring(startIndex, endIndex);
        // console.log("Languages " + name);
        Language_s = name;
      } else {
        console.log("Name not found in data.");
      }
    }

    function Signature() {
      exec(
        `cd uploads && keytool -printcert -jarfile app.apk`,
        (a, values, c) => {
          // console.log("Signature : " + values);
          Signature_s = values;

          Datas();

          // deleter();
        }
      );
    }
  }
  //all details



   ////////////////////////////////////////////
    // MongoDb Storing
  function mongodb(data) {
   
    const aptdata = mongoose.model("aptdata", schema);

    aptdata
      .create(data)
      // .then(doc => console.log('Document created:', doc))
      .catch((err) => console.error("Could not create document", err));

  }

  function deleter() {
    exec("rm apk.txt && cd uploads && rm app.apk", (a, b, c) => {
      console.log("All Files deleted ");
    });

    //  removing the APK file
  }

  function CallOutFuntion() {
    ApplicationName();
    MinSDKVersion();
    versionName();
    versionCode();
    PackageName();
    TargetSdkVersion();
    SupportScreensizes();
    SupportedScreenDensities();
    Features();
    Permissions();
    // Languages is inside Permission Funtion
    Signature();
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
