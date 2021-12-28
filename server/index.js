const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  //to subscribe the socket to a given channel/room
  socket.on("join_room", (data) => {
    socket.join(data);             
    // console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  //  socket.to("some room").emit("some event"); use to or in (they are the same) when broadcasting or emitting
  socket.on("send_message", (data) => {
    socket.to(data.room)
    .emit("receive_message", data);          
  });                                 

 
  // Echo back messages from the client
  // send to ALL users in that room including sender
  socket.on('echo_message', (data)=> {
    io.to(data.room)                                      
    .emit("receive_message", data); 
  });  

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server is up and running");
});
