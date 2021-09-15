const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    token: { type: String, default: "" },
    cart: {
        items: [{ productId: {type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Product'},
                quantity: { type: Number, required: true}}]
    }
});
     
module.exports = mongoose.model('User', UserSchema);