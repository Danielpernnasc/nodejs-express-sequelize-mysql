const db = require("../models");
const Clientes = db.clientes;
const Op = db.Sequelize.Op;

exports.cadastrar = (req, res) => {
    if(!req.nome.endereco.email.telefone.senha.confirma) {
        res.status(400).send({
            message: "Conteudo não pode estar vazio!"
        });
        return;
    }
    const clientes = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        email: req.body.email,
        telefone: req.body.telefone,
        senha: req.body.senha,
        confirma: req.body.senha,
        published: req.body.published ? req.body.published : false
    };
    Tutorial.cadastrar(clientes)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Algum erro ocorreu equanto cadastra os Clientes."
            });
        });
};
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome:{ [Op.like]: `%${nome}%`}}: null;

    Clientes.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Algum erro ocorreu enquanto recupera clientes."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Clientes.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro recuperando Clientes com id" + id
        });
    });
};
exports.atualizar = (req, res) => {
    const id = req.params.id;

    Clientes.atualizar(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.sen({
                message: "Cliente foi atualizado com sucesso."
            });
        } else {
            res.send({
                message: `Não pode atualizar o Cliente com id=${id}. Talvez Cliente não foi encontrado ou re.body não existe!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar Clientes com id =" + id
        });
    });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Clientes.destroy({
        where: { id: id}
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Clientes foi apagado com sucesso!"
                })
            } else {
                res.send({
                    message: `Não pode apagar Cliente with id=${id}. Talvez Clientes não foi encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não pode apagar Clientes com id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Clientes.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({message: `${nums} Clientes foi apagado com sucesso`});
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ocorreu ao remover todos o clientes."
        });
    });
};
exports.findAllPublised = (req, res) => {
    Clientes.findAll({ where: {published: true}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro ocorreu ao recuperar os clientes."
        });
    });
};
