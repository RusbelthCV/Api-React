const express = require('express');
const router = express.Router();

const model = require('../models/index');

router.all('/', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    next();
});
router.all('/:xxx', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})
router.get('/', (req, res, next) => {
    model.Cupon.findAll()
        .then(cupones => res.json({
            ok: true,
            data: cupones
        }))
        .catch(err => res.json({
            ok: true,
            error: err
        }))
});

router.get('/:busqueda', (req, res, next) => {
    let busqueda = req.params.busqueda;
    model.Cupon.findAll({ where: { Nombre: busqueda } })
    .then(cupones => res.json({
        ok: true,
        data: cupones
    }))
    .catch(err => res.json({
        ok: true,
        error: err
    }))
});


module.exports = router;