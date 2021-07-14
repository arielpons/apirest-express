const express = require('express')
const router = express.Router();

const { 
    getComercios,
    getComercio,
    postComercio,
    putComercio,
    deleteComercio,
} = require('../controllers/comercio');

const {
    validarIdParamComercio,
    validarPostComercio,
    validarPutComercio,
} = require('../middlewares/validarComercio')

router.get('/', getComercios);
router.get('/:_id', validarIdParamComercio, getComercio);
router.post('/', validarPostComercio, postComercio);
router.put('/:_id', validarIdParamComercio, validarPutComercio, putComercio);
router.delete('/:_id', validarIdParamComercio, deleteComercio);


module.exports = router;