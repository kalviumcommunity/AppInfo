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
} = require("./generator");

const { funcPermissions, funcSignature } = require("./generator");

function dataFuntions(res, id, applicationName) {
  const authId = id;
  const application_name = funcApplicationName(res);
  const minsdk_version = funcMinSdkVersion(res);
  const version_name = funcVersionName(res);
  const version_code = funcVersionCode(res);
  const package_name = funcPackageName(res);
  const targetSdk_version = funcTargetSdkVersion(res);
  const support_screensizes = funcSupportScreensizes(res);
  const supported_screendensities = funcSupportedScreenDensities(res);
  const feature_s = funcFeatures(res);
  const permission_s = funcPermissions(applicationName);
  const language_s = funcLanguages(res);
  const signature_s = funcSignature(applicationName);

  const alldatas = {
    authId,
    application_name,
    minsdk_version,
    version_name,
    version_code,
    package_name,
    targetSdk_version,
    support_screensizes,
    supported_screendensities,
    feature_s,
    permission_s,
    language_s,
    signature_s,
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
