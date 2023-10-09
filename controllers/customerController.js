const Customer = require('./../model/customerModel');
const APIFeatures = require('./../dataBaseManager/customerDbContext');


/**
 * getAllCustomers returns all customers with their detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */
exports.getAllCustomers =   async (req, res) => { 
  try {
    
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

   
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
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
 * getCustomer returns customer with its detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
   

    res.status(200).json({
      status: 'success',
      results: customer.length,
      data: {
        customer
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
 * createCustomer saves new customer details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.createCustomer = async  (req, res) => {
  try {
  

    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer
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
 * updateCustomer updates details of an existing customer
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer
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
 * deleteCustomer delete customer details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

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