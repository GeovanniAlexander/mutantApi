const { isMutant } = require('../helpers/validations');
const mutantModel = require('../models/mutant');

const postMutant = async(req, res) => {
    const { dna } = req.body;
    const valMutant = isMutant( dna );
    const mutantData = {
        dna: dna.join(''),
        isMutant: valMutant
    }
    const mutant = new mutantModel( mutantData );
    mutant.save();
    if(valMutant)
        return res.status(200).send();
    
    return res.status(403).send();
}

const getMutantStats = async(req, res) => {
    const humans  = await mutantModel.countDocuments({ isMutant: false });
    const mutants = await mutantModel.countDocuments({ isMutant: true });
    const ratio = mutants/humans;
    res.json({
        count_mutant_dna: mutants,
        count_human_dna:  humans,
        ratio           
    })
}

module.exports = {
    postMutant,
    getMutantStats
}