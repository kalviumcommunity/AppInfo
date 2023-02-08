const fs = require("fs");

/// executing shell commands

const { exec } = require("child_process");

exec( "cd  build-tools && ./aapt2 dump badging test.apk ", (a, b, c) => {
  fs.writeFileSync("apk.txt", b);

  var txt = b;

  let data = txt;


  {

  let startIndex = data.indexOf("label=") + 7

  let endIndex = data.indexOf("' icon='");

  if (startIndex !== -1 && endIndex !== -1) {
    let name = data.substring(startIndex, endIndex);
    console.log(name);
  } else {
    console.log("Name not found in data.");
  }

}


});
