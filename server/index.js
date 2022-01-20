const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

const socketIO = require("socket.io");
const { Socket } = require("dgram");

const port = 4000 || process.env.port;
const server = http.createServer(app);

const users = [{}];
const io = socketIO(server);

app.use(cors());
app.get("/", (req, res) => {
  res.send("its fine");
});

io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the Chat, ${users[socket.id]} `,
    });
  });

  //   io.emit will send to all in the chat board
  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]} Has Left the Chat`,
    });
    console.log(`user has Left`);
  });
});

server.listen(port, () => {
  console.log(`server stareted on http://localhost:${port}`);
});
