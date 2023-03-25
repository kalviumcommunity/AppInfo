const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  authId: { type: String, required: true },
  application_Name: { type: String },
  minsdkVersion: { type: String },
  versionName: { type: String },
  versionCode: { type: String },
  packageName: { type: String },
  targetSdkVersion: { type: String },
  supportScreensizes: { type: String },
  supportedScreendensities: { type: String },
  features: { type: String },
  permissions: { type: String,required:true},
  languages: { type: String },
  signatures: { type: String },
});

module.exports = schema;
