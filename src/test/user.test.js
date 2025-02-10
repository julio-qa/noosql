const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const NooSQL = require('../NooSQL');  // O gerenciador que inicializa o banco de dados
const User = require('../models/user'); // O modelo User

describe('User Model', function (callback) {

    before(() => {
        // Aqui você pode configurar o mock do banco de dados se necessário
        // No caso, vamos assumir que você tenha algo que inicialize o banco em NooSQL.
        this.db = NooSQL.getDB();
    });

    afterEach(() => {
        // Limpar mocks ou stubs após cada teste
        sinon.restore();
    });

    it('should create a new user', async function (callback) {
        const userData = { id: 'user123', name: 'John Doe', email: 'john.doe@example.com', age: 25 };

        // Mocking save method for MongoDB or DynamoDB
        const saveStub = sinon.stub(User.model, 'create').resolves(userData);  // Stub for the save method

        const result = await User.save(userData);

        // Verificando se o método foi chamado corretamente
        expect(saveStub.calledOnce).to.be.true;
        expect(result).to.deep.equal(userData);
    });

    it('should handle errors while saving a user', async function () {
        const errorMessage = 'Error saving user';
        const saveStub = sinon.stub(User.model, 'create').rejects(new Error(errorMessage));

        try {
            await User.save({ id: 'user123' });
        } catch (err) {
            expect(saveStub.calledOnce).to.be.true;
            expect(err.message).to.equal(errorMessage);
        }
    });
});
