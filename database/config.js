const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
        });
        console.log('db inicializada');
    } catch (error) { 
        console.log(error);
        throw new Error('error en el inicio de la bd');
    }
}

module.exports = { dbConnection }