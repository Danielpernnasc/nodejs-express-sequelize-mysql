module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
        nome: {
            type: Sequelize.STRING
        },
        endereco: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        confirma: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Clientes;
}