const express = require("express");
const app = express();

const http = require("http").createServer(app);

const port = 8000;
app.listen(port, ()=> console.log(`Servidor iniciado na porta ${port}`));