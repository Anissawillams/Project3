const express = require('express')
const app = express();

const cors = require('cors');
const { Server } = require('http');

app.use = express();


const httpServer = require("http").createServer();
const PORT = process.env.PORT || 3001;

const io = require("socket.io")(httpServer, {
    cors: {
        origin:'http://localhost:3001',
        methods: ['GET', 'POST']
    }
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

Server.listen(PORT, ()=> {
    console.log('PORT is listening')
})