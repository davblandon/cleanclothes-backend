var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema=Schema({
    descripcion:String,
    servicio:String,
    tipoprenda:String,
    cantidaduni:Number,
    direccionr:String,
    direccione:String
    });



const Pedidos = mongoose.model('pedido',PedidosSchema);
module.exports = Pedidos;
