const socketIO = require("socket.io");
const fs = require("fs");
const { exec } = require("child_process");

const { dataFuntions } = require("../controllers/postController");

const io = socketIO({
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
  maxHttpBufferSize: 1e9, // (upload buffer size has been increased by 1000 MB)
});


function runAapt(applicationName) {
  return new Promise((resolve, reject) => {
    exec(
      `cd resources && ./aapt2 dump badging ${applicationName}`,
      (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          const str = stdout + "compressed";
          const res = str.replace(/\s+/g, "");
          resolve(res);
        }
      }
    );
  });
}



async function render(authId, applicationName, socketId, socket) {
  const res = await runAapt(applicationName);

  const allDatas = dataFuntions(res, authId, applicationName);
  console.log("APK details are sent");
  io.to(socketId).emit("data", allDatas);
  socket.disconnect(true);
}



io.on("connection", (socket) => {
  socket.on("upload", async (files) => {
    let authId = files.authId;
    let applicationName = `app-${socket.id}.apk`;

    await fs.promises.writeFile(`./resources/${applicationName}`, files.file);

    render(authId, applicationName, socket.id, socket);
  });
});

module.exports = io;
