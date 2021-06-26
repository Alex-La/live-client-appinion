const express = require("express");
const path = require("path");
const Http = require("http");

const app = express();
const server = Http.createServer(app);
const io = require("socket.io")(server, { cors: "*" });

const users = {};

io.on("connection", (socket) => {
  socket.on("manager", (host) => {
    socket.join(host);
  });

  socket.on("user", (data) => {
    console.log(data);
    if (Array.isArray(users[data.host])) users[data.host].push(data);
    else users[data.host] = [data];
    socket.emit("users", users[data.host]);
  });

  socket.on("users", (host) => {
    socket.emit("users", users[host]);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use("/", path.join(__dirname, "client", "build"));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(4000, () => {
  console.log("🚀 Server ready at", `https://localhost:4000`);
});
