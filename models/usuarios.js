var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UsuariosSchema=Schema({
    nombre:String,
    cedula:Number,
    fechadenacimiento:Date,
    edad:Number,
    direccion:String,
    telefono:Number,
    usuario:String,
    contraseña:String,
    correo:String,
    id_rol:Number,
    idciudad:Number,
    });

const Usuarios = mongoose.model('usuario',UsuariosSchema);
module.exports = Usuarios;
