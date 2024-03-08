const db = require('./db')

const Pessoa = db.sequelize.define('pessoas', {
    nome:  {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    data_de_nascimento: {
        type: db.Sequelize.DATE
    },
    telefone_com_ddd: {
        type: db.Sequelize.STRING
    },
    endereço: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    tipo_de_pessoa: {
        type: db.Sequelize.STRING
    }
})

//Pessoa.sync({force: true})
module.exports = Pessoa