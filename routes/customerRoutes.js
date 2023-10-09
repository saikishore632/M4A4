const express = require('express');
const loanController = require('../controllers/customerController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllCustomers)
  .post(loanController.createCustomer);

router
  .route('/:id')
  .get(loanController.getCustomer)
  .put(loanController.updateCustomer)
  .delete(loanController.deleteCustomer);

module.exports = router;
