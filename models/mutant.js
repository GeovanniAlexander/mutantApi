const { Schema, model } = require("mongoose")

const mutantSchema = new Schema({
    dna:{
        type: String,
        required: true
    },
    isMutant:{
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = model('mutant', mutantSchema);