const mongoose = require('mongoose');
const loanSchema = new mongoose.Schema({
    loanType: {
        type: String
    },
    loanNumber: {
        type: Number
    },
    amount: {
        type: mongoose.Types.Decimal128
    },
    interestRate: {
        type: mongoose.Types.Decimal128
    },
    loanTerm: {
        type: mongoose.Types.Decimal128 },
    startDate: {
        type: Date,
        default: Date.now },
    createdDate: {
        type: Date,
        default: Date.now },
    modifiedDate:
    {
        type: Date,
        default: Date.now },
    isDeleted: {
        type: Boolean,
        default: false}
});
const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;