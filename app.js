var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");
mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./public'));
app.use(require('./routers/router'));

// Configurar cabeceras y cors


module.exports = app;
