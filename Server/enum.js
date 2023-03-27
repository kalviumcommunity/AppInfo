const commands = Object.freeze({
  aaptDump: "cd resources && ./aapt2 dump badging ",
  mongoUrl: "connect your mongo",
  deleter:"cd resources && rm ",
  aaptPermission:"cd resources && ./aapt2 dump permissions ",
  keytoolDump:"cd resources && keytool -printcert -jarfile "
});


module.exports = commands;
