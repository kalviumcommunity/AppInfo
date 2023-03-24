const http = require("http");
const app = require("./app");
const io = require("./utils/connection");


const server = http.createServer(app);

io.attach(server);

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
