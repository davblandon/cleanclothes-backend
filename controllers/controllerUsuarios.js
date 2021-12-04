var mongoose = require("../src/conexDB/conn");
var Usuario = require("../models/usuarios");

function prueba(req, res) {
    res.status(200).send({
        message: "Probando una acción",
    });
}

function saveusuario(req, res) {
    var usuario = new Usuario(req.body);
    usuario.save((err, result) => {
        res.status(200).send({ message: result });
    });
}

function buscarusuario(req, res) {
    var idusuario = req.params.id;
    Usuario.findById(idusuario).exec((err, result) => {
        if (err) {
            res
                .status(500)
                .send({ message: "Error al momento de ejecutar la solicitud" });
        } else {
            if (!result) {
                res
                    .status(404)
                    .send({ message: "El registro a buscar no se encuentra disponible" });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

function listarAllusers(req, res) {
    var idusuario = req.params.id;
    if (!idusuario) {
        var result = Usuario.find({}).sort("nombre");
    } else {
        var result = Usuario.find({ _id: idusuario }).sort("nombre");
    }
    result.exec(function (err, result) {
        if (err) {
            res.status(500).send({ message: "Error al momento de ejecutar la solicitud" });
        } else {
            if (!result) {
                res.status(404).send({ message: "El registro a buscar no se encuentra disponible" });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

function updateuser(req, res) {
    //var id = mongoose.Types.ObjectId(req.query.productId);
    var id = req.params.id;
    Usuario.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, Usuario) {
        if (err)
            res.send(err);
        res.json(Usuario);
    });
};


function deleteuser(req, res) {
    var id = req.params.id;
    Usuario.findByIdAndRemove(id, function (err, usuario) {
        if (err) {
            return res.json(500, {
                message: 'No hemos encontrado el usuario'
            })
        }
        return res.json(usuario+" USUARIO ELIMINADO ")
    })};

    module.exports = {
        prueba,
        saveusuario,
        buscarusuario,
        listarAllusers,
        updateuser,
        deleteuser,
    };
