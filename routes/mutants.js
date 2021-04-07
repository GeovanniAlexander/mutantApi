const { Router } = require('express');
const { postMutant } = require('../controllers/mutants')

const router = Router();

router.post('/', postMutant );

module.exports = router;