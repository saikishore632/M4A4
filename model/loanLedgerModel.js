const mongoose = require('mongoose');
const loanLedgerSchema = new mongoose.Schema({
    customerID: {
        type: mongoose.Types.ObjectId
    },
    loanID: {
        type: mongoose.Types.ObjectId
    },
    paymentAmount: {
        type: mongoose.Types.Decimal128
    },
    interest: {
        type: mongoose.Types.Decimal128
    },
    principal: {
        type: mongoose.Types.Decimal128
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    insertedDate:
    {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false }
});
const LoanLedger = mongoose.model('LoanLedger', loanLedgerSchema);
module.exports = LoanLedger;