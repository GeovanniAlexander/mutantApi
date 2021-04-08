const { Router } = require('express');
const { postMutant, getMutantStats } = require('../controllers/mutants')

const router = Router();

router.post('/', postMutant );

router.get('/stats', getMutantStats );

module.exports = router;