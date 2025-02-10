const mongoose = require('mongoose');
const dynamoose = require('dynamoose');
const config = require('../config');  // Arquivo de configuração para selecionar o DB

let User;

// Abstração para usar MongoDB com Mongoose ou DynamoDB com Dynamoose
if (config.database === 'mongo') {
    // Modelo para MongoDB (Mongoose)
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, default: 18 }
    });

    User = mongoose.model('User', userSchema);
} else if (config.database === 'dynamo') {
    // Modelo para DynamoDB (Dynamoose)
    const userSchema = new dynamoose.Schema({
        id: { type: String, hashKey: true },
        name: { type: String },
        email: { type: String, required: true, unique: true },
        age: { type: Number, default: 18 }
    });

    User = dynamoose.model('User', userSchema);
} else {
    throw new Error('Invalid database configuration');
}

module.exports = User;
