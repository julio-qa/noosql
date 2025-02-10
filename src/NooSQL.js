const DatabaseTypes = require('./enums/databaseTypes');  // Caminho atualizado
const DynamoDB = require('./DynamoDB');  // Classe para DynamoDB
const MongoDB = require('./MongoDB');    // Classe para MongoDB
const config = require('./config');      // Importando as configurações

class NooSQL {
    constructor() {
        this.db = null;
        this.initDB();
    }

    // Inicializa o banco de dados de acordo com a configuração
    initDB() {
        if (config.database === DatabaseTypes.MONGO) {
            // Usando a configuração do MongoDB
            this.db = new MongoDB(config.mongoConfig.uri, config.mongoConfig.databaseName);
        } else if (config.database === DatabaseTypes.DYNAMO) {
            // Usando a configuração do DynamoDB
            this.db = new DynamoDB(config.dynamoConfig);
        } else {
            throw new Error('Invalid database type specified.');
        }
    }

    // Método para acessar o banco de dados instanciado
    getDB() {
        return this.db;
    }
}

module.exports = new NooSQL();
