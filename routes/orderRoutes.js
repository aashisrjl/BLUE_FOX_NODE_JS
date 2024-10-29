const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Place an order
router.post('/place', orderController.placeOrder);

// Track order
router.get('/track/:orderId', orderController.trackOrder);

// Update order status
router.put('/update-status/:orderId', orderController.updateOrderStatus);

module.exports = router;
