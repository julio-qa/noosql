const mongoose = require('mongoose');

class MongoDB {
    constructor(uri, database) {
        this.uri = uri;
        this.database = database;
        this.connect();
    }

    // Método para conectar ao MongoDB
    connect() {
        mongoose.connect(`${this.uri}/${this.database}`, {})
            .then(() => console.log(`Connected to MongoDB: ${this.uri}/${this.database}`))
            .catch(err => console.error('MongoDB connection error:', err));
    }

    // Outros métodos específicos do MongoDB podem ser adicionados aqui, como salvar, buscar, etc.
}

module.exports = MongoDB;
