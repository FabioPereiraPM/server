const Sequelize = require('sequelize')
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('alunomentoria', 'root', 'Small!53142', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}