const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  authId: { type: String, required: false },
  application_name: { type: String, required: false },
  minsdk_version: { type: String, required: false },
  version_name: { type: String, required: false },
  version_code: { type: String, required: false },
  package_name: { type: String, required: false },
  targetSdk_version: { type: String, required: false },
  support_screensizes: { type: String, required: false },
  supported_screendensities: { type: String, required: false },
  feature_s: { type: String, required: false },
  // permission_s: { type: String, required: false },
  language_s: { type: String, required: false },
  signature_s: { type: String, required: false },
});

module.exports = schema;
