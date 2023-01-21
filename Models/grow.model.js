let mongoose = require("mongoose");

let growSchema = mongoose.Schema({
  annualInstalmentAmount: { type: Number },
  annualInterestRate: { type: Number },
  totalYears: { type: Number },
});

let GrowModel = mongoose.model("grow_eval", growSchema);

module.exports = { GrowModel };
