const express = require("express");
const combineRoute = express.Router();
const { Combinecontroller } = require("../controllers/CombineControllers");
combineRoute.get("/combine", Combinecontroller);
module.exports = { combineRoute };
