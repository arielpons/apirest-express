const express = require('express')
const router = express.Router();

const { 
    getShoppings,
    getShopping,
    postShopping,
    putShopping,
    deleteShopping,
} = require('../controllers/shopping');

const {
    validarIdParamShopping,
    validarPostShopping,
    validarPutShopping,
} = require('../middlewares/validarShopping')

router.get('/', validarIdParamShopping, getShoppings);
router.get('/:_id', validarIdParamShopping, getShopping);
router.post('/', validarPostShopping, postShopping);
router.put('/:_id', validarIdParamShopping, validarPutShopping, putShopping);
router.delete('/:_id', validarIdParamShopping, deleteShopping);


module.exports = router;