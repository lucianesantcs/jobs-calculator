const express = require("express");
const server = express();
const routes = require("./routes");

// template engine
server.set("view engine", "ejs");

// habilitar arquivos estáticos
server.use(express.static("public"));

// usar o request.body
server.use(express.urlencoded({ extended: true }));

// rotas
server.use(routes);

server.listen(3000, () => console.log("rodando"));
