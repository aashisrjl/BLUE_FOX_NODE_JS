const Order = require('../models/Order');

// Place an order
exports.placeOrder = async (req, res) => {
    const { carId, userId, totalAmount } = req.body;
    try {
        const order = new Order({ carId, userId, totalAmount });
        await order.save();
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order', error });
    }
};

// Track order
exports.trackOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId)
            .populate('carId')
            .populate('userId');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error tracking order', error });
    }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
    const { status, paymentStatus } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status, paymentStatus },
            { new: true }
        );
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update status', error });
    }
};
