const express=require("express");
const Statistics_Transaction = express.Router();
const {StatisticsTransactionController}=require("../controllers/Statics.Controller");
Statistics_Transaction.get("/Statistics",StatisticsTransactionController);
module.exports={Statistics_Transaction};