const express = require('express');
const app = express();
const {Server} = require('socket.io');
const http = require('http');

const cors = require("cors");

app.use(cors());


const server = http.createServer(app) 

const io = new Server({ server, 
    cors: {
        origin: "http://localhost/3000",
        methods: ["GET", "POST"]
    }
})

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next();
})

server.listen(3001, () => console.log(`Server is running`))
