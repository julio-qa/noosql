const dynamoose = require('dynamoose');

class DynamoDB {
    constructor(config) {
        this.config = config;
        this.connect();
    }

    // Método para conectar ao DynamoDB
    connect() {
        dynamoose.aws.sdk.config.update({
            region: this.config.region,
            endpoint: this.config.endpoint || undefined  // Endpoint opcional (caso use local)
        });
        console.log(`Connected to DynamoDB: ${this.config.region}`);
    }

    // Outros métodos específicos do DynamoDB podem ser adicionados aqui, como salvar, buscar, etc.
}

module.exports = DynamoDB;
