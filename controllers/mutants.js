const { isMutant } = require('../helpers/validations');

const postMutant = (req, res) => {
    const { dna } = req.body;
    const valMutant = isMutant( dna );
    if(valMutant)
        return res.status(200).send();
    
    return res.status(403).send();
}

module.exports = {
    postMutant
}