const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    carId: {
        type: Schema.Types.ObjectId,
        ref: 'CarDetail',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['placed', 'in-progress', 'completed', 'cancelled'],
        default: 'placed',
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending',
    },
    totalAmount: {
        type: Number,
        required: true
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
