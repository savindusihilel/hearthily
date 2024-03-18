const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const refundSchema = new Schema({

    customerId:{
        type: Schema.Types.ObjectId,
        ref: 'OrderPayments',
        required: true
    },
    mobileNumber: {
        type : String,
        required: true
    },
    orderId:{
        type: Schema.Types.ObjectId,
        ref: 'OrderPayments',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,

    },
    // image:{
    //     data: Buffer,
    //     contentType: String
    // },
    isSuccess:{
        type: Boolean,
        required: true
    }
})
const refund = mongoose.model("Refunds",refundSchema);

module.exports = refund;
