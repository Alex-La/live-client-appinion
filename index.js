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
    if (Array.isArray(users[data.host]))
      users[data.host].push({ id: socket.id, ...data });
    else users[data.host] = [{ id: socket.id, ...data }];
    socket.to(data.host).emit("users", users[data.host]);
  });

  socket.on("users", (host) => {
    socket.emit("users", users[host] || []);
  });

  socket.on("managerId", (userId) => {
    socket.to(userId).emit("managerId", socket.id);
  });

  socket.on("message", (message, reciver) => {
    socket.emit("message", message);
    socket.to(reciver).emit("message", message);
  });

  socket.on("offer", (id, description) => {
    socket.to(id).emit("offer", description);
  });

  socket.on("answer", (id, description) => {
    socket.to(id).emit("answer", description);
  });

  socket.on("iceCandidate", (id, candidate) => {
    socket.to(id).emit("iceCandidate", candidate);
  });

  socket.on("disconnect", () => {
    for (const [key, _] of Object.entries(users)) {
      const index = users[key].findIndex((user) => user.id === socket.id);
      if (index !== -1) users[key].splice(index, 1);
      socket.to(key).emit("users", users[key]);
    }
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
