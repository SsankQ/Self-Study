import express from "express";
import http from "http";
// import WebSocket from "ws";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);

const httpServer = http.createServer(app); // http 서버
//* Socket.io
// http://localhost:3000/socket.io/socket.io.js
const wsServer = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

instrument(wsServer, {
  auth: false,
});

const getPublicRooms = () => {
  const { sids, rooms } = wsServer.sockets.adapter;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
};

const countPeople = (roomName) => {
  return wsServer.sockets.adapter.rooms.get(roomName)?.size;
};

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anonymous";
  socket.onAny((e) => {
    console.log(`Socket Event: ${e}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname, countPeople(roomName)); // custom event
    wsServer.sockets.emit("room_change", getPublicRooms());
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => {
      socket.to(room).emit("bye", socket.nickname, countPeople(room) - 1);
    });
  });
  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", getPublicRooms());
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

//* WebSocket
// const wss = new WebSocket.Server({ httpServer }); // ws 서버
// const sockets = []; // each browser
// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anonymous";
//   console.log("Connected to Browser ✅");
//   socket.on("close", () => console.log("Disconnected from the Browser ❌"));
//   socket.on("message", (msg) => {
//     msg = msg.toString("utf8");
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case "new_msg":
//         sockets.forEach((aScoket) => {
//           aScoket.send(`${socket.nickname}: ${message.payload}`);
//         });
//         break;
//       case "nickname":
//         socket["nickname"] = message.payload;
//         break;
//     }
//   });
// });

httpServer.listen(PORT, handleListen);
