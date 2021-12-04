var mongoose = require("../src/conexDB/conn");
var Pedido = require("../models/pedidos");
const Pedidos = require("../models/pedidos");
const { isValidObjectId } = require("mongoose");

function prueba(req, res) {
    res.status(200).send({
        message: "Probando una acción",
    });
}

function savepedido(req, res) {
    var data ={
        descripcion:req.body.descripcion,
        servicio:req.body.servicio,
        tipoprenda:req.body.tipoprenda,
        cantidaduni:req.body.cantidaduni,
        direccionr:req.body.direccionr,
        direccione:req.body.direccione
    }
    var Pedido = new Pedidos(data);
    Pedido.save((err, result) => {
        if (err) console.log(err);
        res.json(result);
    });
}

function buscarpedido(req, res) {
    var idpedido = req.params.id;
    Pedido.findById(idpedido).exec((err, result) => {
        if (err) {
            res
                .status(500)
                .send({ message: "Error al momento de ejecutar la solicitud" });
        } else {
            if (!result) {
                res
                    .status(404)
                    .send({ message: "El pedido a buscar no se encuentra disponible" });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

function listarAllpedidos(req, res) {
    var idpedido = req.params.id;
    if (!idpedido) {
        var result = Pedido.find({}).sort("servicio");
    } else {
        var result = Pedido.find({ _id: idpedido }).sort("servicio");
    }
    result.exec(function (err, result) {
        if (err) {
            res.status(500).send({ message: "Error al momento de ejecutar la solicitud" });
        } else {
            if (!result) {
                res.status(404).send({ message: "El pedido a buscar no se encuentra disponible" });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

function updatepedido(req, res) {
    var id = req.params.id;
    Pedido.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, Pedido) {
        if (err)
            res.send(err);
        res.json(Pedido);
    });
};


function deletepedido(req, res) {
    var id = req.params.id;
    Pedido.findByIdAndRemove(id, function (err, pedido) {
        if (err) {
            return res.json(500, {
                message: 'No hemos encontrado el usuario'
            })
        }
        return res.json(pedido+" PEDIDO ELIMINADO ")
    })};

    module.exports = {
        prueba,
        savepedido,
        buscarpedido,
        listarAllpedidos,
        updatepedido,
        deletepedido,
    };