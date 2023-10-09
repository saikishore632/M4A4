const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate:
    {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false 
    }
});
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;