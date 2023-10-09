const LoanLedger = require('./../model/loanLedgerModel');
const APIFeatures = require('./../dataBaseManager/loanLedgerDbContext');

/**
 * getAllLoanLedger returns all the loanledger detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.getAllLoanLedger =   async (req, res) => {
  try {
    
    const features = new APIFeatures(LoanLedger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loanLedgers = await features.query;

   
    res.status(200).json({
      status: 'success',
      results: loanLedgers.length,
      data: {
        loanLedgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * getLoanLedger returns loanledger details of a customer 
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */
exports.getLoanLedger = async (req, res) => {
  try {
    const loanLedger = await LoanLedger.findById(req.params.id);
   

    res.status(200).json({
      status: 'success',
      results: loanLedger.length,
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
/**
 * createLoanLedger saves new loanledger details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.createLoanLedger = async  (req, res) => {
  try {
  

    const newLoanLedger = await LoanLedger.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loanLedger: newLoanLedger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * updateLoanLedger updates details of an existing loanledger
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.updateLoanLedger = async (req, res) => {
  try {
    const loanLedger = await LoanLedger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * deleteLoanLedger delete loanledger details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */


exports.deleteLoanLedger = async (req, res) => {
  try {
    await LoanLedger.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};