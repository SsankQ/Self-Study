import express from "express";
import http from "http";
import WebSocket from "ws";
import SocketIO from "socket.io";

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
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  socket.onAny((e) => {
    console.log(`Socket Event: ${e}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
  });
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
