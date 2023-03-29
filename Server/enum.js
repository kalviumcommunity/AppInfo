const commands = Object.freeze({
  aaptDump: "cd resources && ./aapt2 dump badging ",
  deleter:"cd resources && rm ",
  aaptPermission:"cd resources && ./aapt2 dump permissions ",
  keytoolDump:"cd resources && keytool -printcert -jarfile "
});


module.exports = commands;
