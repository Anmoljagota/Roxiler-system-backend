const { TransactionModel } = require("../Models/All_Transaction");
const StatisticsTransactionController=async (req, res) => {
  const { month } = req.query;
  const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;
  if (req.query.sold) {
    try {
      const items = await TransactionModel.aggregate([
        {
          $match: {
            $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
            sold: true,
          },
        },
      ]);

      res.send(items);
    } catch (error) {
      res.send(`error${error}`);
    }
  } else if (req.query.unsold) {
    try {
      const items = await TransactionModel.aggregate([
        {
          $match: {
            $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
            sold: false,
          },
        },
      ]);

      res.send(items);
    } catch (error) {
      res.send(`error${error}`);
    }
  } else {
    try {
      const items = await TransactionModel.aggregate([
        {
          $match: {
            $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
            sold: true,
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$price" },
          },
        },

        {
          $project: {
            _id: 0,
            total: 1,
          },
        },
      ]);

      res.send(items);
    } catch (error) {
      res.send(`error${error}`);
    }
  }
};
module.exports = {
    StatisticsTransactionController
};
