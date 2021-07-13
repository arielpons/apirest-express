const express = require('express')
const router = express.Router();

const { 
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario,
} = require('../controllers/usuarios');


router.get('/:_id', getUsuario);
router.post('/', postUsuario);
router.put('/:_id', putUsuario);
router.delete('/:_id', deleteUsuario);


module.exports = router;