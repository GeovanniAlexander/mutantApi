const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

const mutantsRoutes = require('../routes/mutants');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.pathRoutes = {
            mutants: '/mutants'
        }

        this.conectDB();
        this.middlewares();
        this.routes();
    }

    async conectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json({limit: '10mb'}));
    }

    routes(){
        this.app.use(this.pathRoutes.mutants, mutantsRoutes);
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`listen on port: ${ this.port }`);
        })
    }
}

module.exports = Server;