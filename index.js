var app = require('./app');
var mongoose =require('./src/conexDB/conn');
require('dotenv').config({path:'variebles.env'});
var host = process.env.HOST||'0.0.0.0';
var port = process.env.PORT||4000;
app.listen(port,host, () =>{
console.log("servidor corriendo ok")
console.log("Escuchando por el puerto : "+port)
});