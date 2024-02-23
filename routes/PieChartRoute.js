const express = require("express");
const Piechart = express.Router();
const { PieChartController } = require("../controllers/PieChart.Controller");
Piechart.get("/piechart", PieChartController);
module.exports = { Piechart };
