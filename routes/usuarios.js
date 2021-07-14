const express = require('express')
const router = express.Router();

const { 
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario,
} = require('../controllers/usuarios');

const {
    validarIdParamUsuario,
    validarPostUsuario,
    validarPutUsuario,
} = require('../middlewares/validarUsuario')

router.get('/:_id', validarIdParamUsuario, getUsuario);
router.post('/', validarPostUsuario, postUsuario);
router.put('/:_id',validarIdParamUsuario, validarPutUsuario, putUsuario);
router.delete('/:_id', validarIdParamUsuario, deleteUsuario);


module.exports = router;