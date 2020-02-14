const express = require('express');
const Stores = require('../controllers/StoreController')


const router = express.Router();


router.route('/').get(Stores.getLocation);
router.route('/').post(Stores.storelocation);


module.exports = router;