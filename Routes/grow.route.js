let express = require("express");
const { GrowModel } = require("../Models/grow.model");

let grow = express.Router();

grow.post("/calculate", async (req, res) => {
  const { annualInstalmentAmount, annualInterestRate, totalYears } = req.body;
  if (!annualInstalmentAmount || !annualInterestRate || !totalYears) {
    return res.status(400).json({ error: "Missing input data" });
  }
  const interestRate = annualInterestRate / 100;
  const totalMaturityValue =
    (annualInstalmentAmount * ((1 + interestRate) ** totalYears - 1)) /
    interestRate;
  const totalInvestmentAmount = annualInstalmentAmount * totalYears;
  const totalInterestGained = totalMaturityValue - totalInvestmentAmount;
  res.json({
    totalMaturityValue,
    totalInvestmentAmount,
    totalInterestGained,
  });
});

module.exports = grow;
