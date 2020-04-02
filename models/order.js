const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },

    items: [{
        product: {
            type: Object,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', orderSchema);

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//     products: [
//         {
//             product: { type: Object, required: true },
//             quantity: { type: Number, required: true }
//         }
//     ],
//     user: {
//         email: {
//             type: String,
//             required: true
//         },
//         userId: {
//             type: Schema.Types.ObjectId,
//             required: true,
//             ref: 'User'
//         }
//     }
// });

// const Order = mongoose.model('Order', orderSchema);
// module.exports = Order;