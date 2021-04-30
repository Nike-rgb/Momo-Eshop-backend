const Router = require('express').Router();
const Menu = require('../../../models/menu');

Router.post('/', (req, res) => {
    let {_id} = req.body;
    Menu.findOne({_id}, (err, momo) => {
        if(err && !momo) {
            return res.json({'error' : "Something went wrong."});
        }
        if(!req.session.orders) {
            req.session.orders = {
                momos : {},
                totalQty : 0,
                totalPrice : 0,
            };
        }
        let orders = req.session.orders;
        orders.momos[_id] = momo;
        orders.totalQty += 1;
        orders.totalPrice += momo.price;
        res.json(orders);
    });
});

module.exports = Router;