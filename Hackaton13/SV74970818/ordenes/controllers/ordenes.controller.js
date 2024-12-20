const OrdenModel = require('../models/ordenes.model');

exports.insert = (req, res) => {
    console.log(req.body)
    OrdenModel.createOrden(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    OrdenModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    OrdenModel.findById(req.params.ordenId)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.patchById = (req, res) => {
    OrdenModel.patchOrden(req.params.ordenId, req.body)
        .then((result) => {
            res.status(204).send({result});
        });

};

exports.removeById = (req, res) => {
    OrdenModel.removeById(req.params.ordenId)
        .then((result)=>{
            res.status(204).send({});
        });
};