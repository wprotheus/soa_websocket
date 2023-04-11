const { log } = require("console");
const express = require("express");
const app = express();
app.use(express.static("public"));

const http = require("http").createServer(app);

const serverSocket = require("socket.io")(http);

const port = 8000;
http.listen(port, ()=> console.log(`Servidor iniciado na porta ${port}`));

app.get("/", (req, resp)=> resp.sendFile(__dirname + "/index.html"));

serverSocket.on("connection", (socket) => 
console.log(`Cliente ${socket.id} conectou.`));