const express = require('express');
const app = express();
const {Server} = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3001;

const cors = require("cors");

app.use(cors());

const server = http.createServer(app) 

const io = new Server(server, { 
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    // console.log(`User Connected successfully with socket id ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("received_message", data)
    })
})

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next();
})

server.listen(port, () => console.log(`Server is running at port ${port}`))
