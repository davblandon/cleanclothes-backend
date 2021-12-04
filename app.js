var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");
mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require('./routers/router'));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve('./public/index.html'))
})
// Configurar cabeceras y cors


module.exports = app;
