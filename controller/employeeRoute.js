// const express = require('express');
// const mongoose = require('mongoose');
// const employeeSchema = require('../model/employeeSchema');
// const employeeRoute = express.Router();

// employeeRoute.get("/", (req, res) => {
//   employeeSchema.find((err, data) => {
//     if (err) {
//       return err;
//     } else {
//       res.json(data);
//     }
//   });
// });

// module.exports = employeeRoute;



const express = require('express');
const mongoose = require('mongoose');
const employeeSchema = require('../model/employeeSchema');
const employeeRoute = express.Router();

employeeRoute.get("/", async (req, res) => {
  try {
    const data = await employeeSchema.find();
    console.log('Employee Data:', data); // Add this line
    res.json(data);
  } catch (err) {
    console.error('Error fetching employee data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = employeeRoute;
