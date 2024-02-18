const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the name of your User model
    },
    totalAmount: {
        type: Number,
        required: [true, "totalAmount is required"],
    },
    orderDate: {
        type: Date,
        required: [true, "orderDate is required"],
    },
    shippingAddress: {
        type: String,
        required: [true, "shipping Address is required"],
        trim: true,
    },
    billingAddress: {
        type: String,
        required: [true, "billing Address is required"],
        trim: true,
    },
    shippingStatus: {
        type: String,
        required: [true, "Shipping Status is required"],
        enum: ["placed", "shipped", "delivered", "canceled"],
    },
    paymentStatus: {
        type: String,
        required: [true, "Payment Status is required"],
        enum: ["paid", "pending"],
    },
    orderStatus: {
        type: String,
        required: [true, "Order Status is required"],
        enum: ["pending", "processing", "shipped", "delivered", "canceled"],
        default: "pending",
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);


