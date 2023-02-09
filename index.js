const fs = require("fs");

/// executing shell commands

const { exec } = require("child_process");

exec( "cd  build-tools && ./aapt2 dump badging test.apk ", (a, b, c) => {

  var str = b;
  var res = str.replace(/\s+/g, "");
  // console.log(res);

  fs.writeFileSync("apk.txt", res);

  var txt = res;

  let data = txt;


  {

  let startIndex = data.indexOf("label=") + 7

  let endIndex = data.indexOf("'icon='");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    console.log("App Name : "+name);
  } else {
    console.log("Name not found in data.");
  }

}


{

  let startIndex = data.indexOf("sdkVersion:'") + 12

  let endIndex = data.indexOf("'targetSdkVersion:");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    console.log("Min SDK Version : "+name);
  } else {
    console.log("Name not found in data.");
  }

}

});
