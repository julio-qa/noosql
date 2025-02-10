const DatabaseTypes = require('../enums/databaseTypes');  // Importando os tipos de banco de dados

module.exports = {
    // Tipo de banco a ser utilizado (MongoDB ou DynamoDB)
    database: DatabaseTypes.MONGO,  // Ou DatabaseTypes.DYNAMO

    // Configuração para MongoDB
    mongoConfig: {
        uri: 'mongodb://localhost:27017',  // URL de conexão com MongoDB
        databaseName: 'meuBancoDeDados',  // Nome do banco MongoDB
    },

    // Configuração para DynamoDB
    dynamoConfig: {
        region: 'us-east-1',  // Região do DynamoDB
        endpoint: 'http://localhost:8000',  // Endpoint local do DynamoDB (se usar local para desenvolvimento)
        tableName: 'Usuarios'  // Nome da tabela do DynamoDB
    }
};
