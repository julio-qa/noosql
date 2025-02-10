
# NooSQL

**NooSQL** é um projeto que visa facilitar a integração e o uso de dois dos mais populares bancos de dados NoSQL: **MongoDB** e **DynamoDB**. Com NooSQL, você terá uma interface simplificada para trabalhar com dados de forma rápida e eficiente, independentemente do banco de dados que você escolher. Seja para protótipos rápidos ou sistemas escaláveis, NooSQL proporciona flexibilidade e desempenho com uma abordagem única.

## 🌟 Características

- **Suporte a MongoDB**: Interaja com o MongoDB de forma simples e sem complicações, utilizando a flexibilidade e poder desse banco de dados NoSQL.
- **Suporte a DynamoDB**: Aproveite a escalabilidade e o desempenho do DynamoDB com uma interface intuitiva e fácil de usar.
- **Interface Unificada**: Uma API unificada que permite alternar entre MongoDB e DynamoDB sem a necessidade de aprender sintaxes e métodos diferentes.
- **Fácil de Integrar**: Instalação simples e fácil integração com seus projetos existentes.
- **Desempenho Otimizado**: Aproveite o melhor de ambos os mundos, com operações otimizadas para alta performance e baixa latência.

## 🚀 Instalação

Instale o **NooSQL** com o npm:

```bash
npm install noosql
```

Ou, se preferir usar o yarn:

```bash
yarn add noosql
```

## 🔧 Como Usar

### Conectar ao MongoDB

```javascript
const NooSQL = require('noosql');

// Configuração para MongoDB
const db = new NooSQL.MongoDB({
  uri: 'mongodb://localhost:27017',
  database: 'meuBancoDeDados',
});

// Exemplo de operação no MongoDB
db.find('usuarios', { nome: 'Julio' }).then(result => {
  console.log(result);
});
```

### Conectar ao DynamoDB

```javascript
const NooSQL = require('noosql');

// Configuração para DynamoDB
const db = new NooSQL.DynamoDB({
  region: 'us-east-1',
  tableName: 'Usuarios',
});

// Exemplo de operação no DynamoDB
db.putItem({ id: '1', nome: 'Julio' }).then(result => {
  console.log('Item adicionado', result);
});
```

### Comandos Comuns

- **find()**: Busca dados no banco.
- **putItem()**: Adiciona um item no banco.
- **update()**: Atualiza dados no banco.
- **delete()**: Deleta dados do banco.

## 📚 Documentação

Consulte nossa [documentação completa](https://github.com/NooSQL/NooSQL/wiki) para aprender mais sobre como usar NooSQL com outros recursos e exemplos avançados.

## 💡 Contribuições

Contribuições são sempre bem-vindas! Se você tem uma ideia, bug reportado ou deseja melhorar o NooSQL, fique à vontade para abrir uma *issue* ou enviar um *pull request*.

## 📜 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

Feito com ❤️ por Julio Cesar Silva dos Santos.
