const express = require("express");
const path = require("path");
const Http = require("http");

const app = express();
const server = Http.createServer(app);
const io = require("socket.io")(server, { cors: "*" });

if (process.env.NODE_ENV === "production") {
  app.use("/", path.join(__dirname, "client", "build"));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(4000, () => {
  console.log("🚀 Server ready at", `https://localhost:4000`);
});
