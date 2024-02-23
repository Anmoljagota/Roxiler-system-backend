const express = require("express");
const Transaction = express.Router();
const {
  TransactionDataController,
  AddTransactionDataController,
} = require("../controllers/TransactionData.Controller");
Transaction.get("/items", AddTransactionDataController);
Transaction.post("/items", TransactionDataController);

module.exports = { Transaction };
