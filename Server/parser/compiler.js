const { mongodb } = require("../models/model");
const { exec } = require("child_process");

const {
  funcApplicationName,
  funcMinSdkVersion,
  funcVersionName,
  funcVersionCode,
  funcLanguages,
  funcPackageName,
  funcTargetSdkVersion,
  funcSupportScreensizes,
  funcSupportedScreenDensities,
  funcFeatures,
} = require("./parser");

const { funcPermissions, funcSignature } = require("./parser");

async function dataFuntions(data, id, applicationName) {
  const authId = id;
  const application_Name = funcApplicationName(data);
  const minsdkVersion = funcMinSdkVersion(data);
  const versionName = funcVersionName(data);
  const versionCode = funcVersionCode(data);
  const packageName = funcPackageName(data);
  const targetSdkVersion = funcTargetSdkVersion(data);
  const supportScreensizes = funcSupportScreensizes(data);
  const supportedScreendensities = funcSupportedScreenDensities(data);
  const features = funcFeatures(data);
  const permissions = await funcPermissions(applicationName);
  const languages =  funcLanguages(data);
  const signatures = await funcSignature(applicationName);

  const alldatas = {
    authId,
    application_Name,
    minsdkVersion,
    versionName,
    versionCode,
    packageName,
    targetSdkVersion,
    supportScreensizes,
    supportedScreendensities,
    features,
    permissions,
    languages,
    signatures,
  };

  mongodb(alldatas);  
  fileDeleter(applicationName);
  return alldatas;
}

async function fileDeleter(applicationName) {
  exec(`cd resources && rm ${applicationName}`, (a, b, c) => {
    console.log("All Files deleted ");
  });
}

module.exports = { dataFuntions };
