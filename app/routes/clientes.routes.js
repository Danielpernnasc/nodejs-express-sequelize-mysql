module.exports = app => {
    const clientes = require("../controllers/clientes.controller.js");

    var router = require("express").Router();

    //Cadastrar um novo Cliente
    router.post("/", clientes.cadastrar);

    //Recuperar clientes
    router.get("/", clientes.findAll);

    //Recuperar todos os clientes
    router.get("/published", clientes.findAllPublised);

    //Recupearar um único Cliente com id
    router.get("/:id", clientes.findOne);

    //Atualizar Clientes com id
    router.put("/:id", clientes.atualizar);

    //Delete um Cliente com id
    router.delete("/:id", clientes.delete);

    //Criar um novo Tutorial
    router.delete("/", clientes.deleteAll);

    app.use('/api/clientes', router);
};