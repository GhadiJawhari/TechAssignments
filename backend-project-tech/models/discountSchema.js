const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    percentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    active: {
        type: Boolean,
        default: true
    },
    expiresAt: {
        type: Date
    }
}, { timestamps: true });
module.exports = mongoose.model('Discount',discountSchema);
