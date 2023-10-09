const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

/**
 * getAllLoans returns all loans with their detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.getAllLoans =   async (req, res) => {
  try {
    
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;

   
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
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
 * getLoan returns loan with its detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.getLoan = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
   

    res.status(200).json({
      status: 'success',
      results: loan.length,
      data: {
        loan
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
 * createLoan saves new loan details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.createLoan = async  (req, res) => {
  try {
  

    const newLoan = await Loan.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newLoan
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
 * updateLoan updates details of an existing loan
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan
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
 * deleteLoan delete loan details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */


exports.deleteLoan = async (req, res) => {
  try {
    await Loan.findByIdAndDelete(req.params.id);

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