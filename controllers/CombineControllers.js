const express = require("express");
const axios = require("axios");



// Helper function to fetch data from an endpoint
const fetchData = async (url, month) => {
    console.log("url",url,month)
  const response = await axios.get(`${url}?month=${month}`);
  return response.data;
};

// Combine and send the final response
const Combinecontroller = async (req, res) => {
  try {
    // Fetch the selected month from the request query
    const month = req.query.month;

    // Define endpoints
    const endpoints = [
      { name: "items", url: "http://localhost:8080/items" },
      { name: "price", url: "http://localhost:8080/price" },
      { name: "piechart", url: "http://localhost:8080/piechart" },
    ];

    // Fetch data from all endpoints asynchronously
    const combinedResponse = await Promise.all(
      endpoints.map(async (endpoint) => {
        const data = await fetchData(endpoint.url, month);
        return { [endpoint.name]: data };
      })
    );

    // Construct the combined response object
    const finalResponse = combinedResponse.reduce(
      (acc, curr) => ({ ...acc, ...curr }),
      {}
    );

    // Send the combined response
    res.json(finalResponse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  Combinecontroller,
};
