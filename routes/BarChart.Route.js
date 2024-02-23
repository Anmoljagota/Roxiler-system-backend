const express = require("express");
const Barchart = express.Router();
const { BarCharController } = require("../controllers/BarChart.Controller");
Barchart.get("/price", BarCharController);
module.exports = { Barchart };
