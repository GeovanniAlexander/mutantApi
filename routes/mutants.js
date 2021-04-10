const { Router } = require('express');
const { check } = require('express-validator');

const { postMutant, getMutantStats } = require('../controllers/mutants');

const validateFields = require('../middlewares/fieldsValidator');
const { valDna } = require('../middlewares/valDna');

const router = Router();

router.post('/', [
    check('dna', 'dna must be in the petition').notEmpty(),
    validateFields,
    valDna
],  postMutant );

router.get('/stats', getMutantStats );

module.exports = router;