const { Router } = require('express');
const router = Router();

// var controllerUsuarios=require('../controllers/controllerUsuarios');
// router.get('/prueba',controllerUsuarios.prueba);
// router.post('/crear',controllerUsuarios.saveusuario);
// router.get('/ver/:id',controllerUsuarios.buscarusuario);
// router.get('/ver/:id?',controllerUsuarios.listarAllusers);
// router.put('/actualizar/:id',controllerUsuarios.updateuser);
// router.delete('/eliminar/:id',controllerUsuarios.deleteuser);

var controllerPedidos=require('../controllers/controllerPedidos');
router.get('/pruebap',controllerPedidos.prueba);
router.post('/crearp',controllerPedidos.savepedido);
router.get('/verp/:id',controllerPedidos.buscarpedido);
router.get('/vertodos',controllerPedidos.listarAllpedidos);
router.put('/actualizarp/:id',controllerPedidos.updatepedido);
router.delete('/eliminarp/:id',controllerPedidos.deletepedido);

module.exports = router;