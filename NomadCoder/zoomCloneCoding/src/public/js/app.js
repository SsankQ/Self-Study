const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

const addMessage = (msg) => {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
};

const handleMessageSubmit = (e) => {
  e.preventDefault();
  const input = room.querySelector("input");
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
};

const showRoom = () => {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const form = room.querySelector("form");
  form.addEventListener("submit", handleMessageSubmit);
};

function handleRoomSubmit(e) {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", () => {
  addMessage("Someone Joined!");
});

socket.on("bye", () => {
  addMessage("Someone Left TT");
});

socket.on("new_message", addMessage);

//* ~ #1.9
// const messageList = document.querySelector("ul");
// const messageForm = document.querySelector("#message");
// const nickForm = document.querySelector("#nick");
// // 브라우저 WebSocket은 Socket.io와 호환되지 않음
// const socket = new WebSocket(`ws://${window.location.host}`);

// const makeMessage = (type, payload) => {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
// };

// socket.addEventListener("open", () => {
//   console.log("Connected to Server ✅");
// });

// socket.addEventListener("message", (message) => {
//   const li = document.createElement("li");
//   li.innerText = message.data;
//   messageList.append(li);
// });

// socket.addEventListener("close", () => {
//   console.log("Disconnected from server ❌");
// });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const input = messageForm.querySelector("input");
//   socket.send(makeMessage("new_msg", input.value));
//   input.value = "";
// };

// const handleNickSubmit = (e) => {
//   e.preventDefault();
//   const input = nickForm.querySelector("input");
//   socket.send(makeMessage("nickname", input.value));
// };

// messageForm.addEventListener("submit", handleSubmit);
// nickForm.addEventListener("submit", handleNickSubmit);
