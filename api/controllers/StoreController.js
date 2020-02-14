const Store = require('../models/Store');

class StoreController {
    async storelocation  (req, res, next)  {
        try {
            console.log(req.body);
            const store = await Store.create(req.body);
    
            return res.status(200).json({
                success: true,
                data: store
            });
        } catch (error) {
            console.error(error);
            if (error.code === 11000) {
                return res.status(400).json({
                    error: "This store already exist"
                });
            }
            res.status(500).json({error: "Server error"});
        }
    }

    async getLocation  (req, res, next) {
        try {
            const stores = await Store.find();
            return res.status(200).json({
                success: true,
                count: stores.length,
                data: stores
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "server error"});
        }
    }
}

const Stores = new StoreController;
module.exports = Stores;