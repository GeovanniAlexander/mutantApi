const valDna = ( req, res, next ) => {
    const { dna } = req.body;
    const regex = new RegExp('(?![ACGT])[A-Z]','g');
    const strDna = dna.join('');
    const valDna = regex.exec(strDna);
    const valConsistency = Math.pow(dna.length,2) === strDna.length; 
    if(valDna){
        return res.status(400).json({ error: `The dna sequence is wrong, contains: ${ valDna }` }); 
    }else if(!valConsistency){
        return res.status(400).json({ error: 'The dna sequence isnt consistent, not a NxN matrix'})
    }
    next();
}

module.exports = {
    valDna
}