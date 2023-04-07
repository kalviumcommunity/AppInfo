const http = require("http");
const app = require("./app");
const io = require("./utils/connection");


const server = http.createServer(app);

io.attach(server);

const port = process.env.PORT||80

server.listen(port, () => {
  console.log("Server running on port " , port);
});
