const express = require('express');
const Router = express.Router();
const Menu = require('../../../models/menu');

Router.get('/', (req, res) => {
    //fetch momos
    Menu.find({}, (err, momos) => {
        res.json(momos);
    });
});

Router.get('/getOrders', (req, res) => {
    if(!req.session.orders) return res.json({'error' : "No orders yet"});
    let orders = req.session.orders;
    res.json(orders);
});

module.exports = Router;