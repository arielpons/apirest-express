const express = require('express')
const router = express.Router();

const { 
    getComercio,
    postComercio,
    putComercio,
    deleteComercio,
} = require('../controllers/comercio');


router.get('/:_id', getComercio);
router.post('/', postComercio);
router.put('/:_id', putComercio);
router.delete('/:_id', deleteComercio);


module.exports = router;