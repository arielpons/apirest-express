const express = require('express')
const router = express.Router();

const { 
    getShopping,
    postShopping,
    putShopping,
    deleteShopping,
} = require('../controllers/shopping');


router.get('/:_id', getShopping);
router.post('/', postShopping);
router.put('/:_id', putShopping);
router.delete('/:_id', deleteShopping);


module.exports = router;