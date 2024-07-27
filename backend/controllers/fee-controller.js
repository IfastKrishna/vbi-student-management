const fee = require("../models/feeSchema");

const feeRegister = async (req, res) => {
  try {
    const newFee = new fee({
      student: req.body.student,
      date: req.body.date,
      amount: req.body.amount,
      school: req.body.school,
      month: req.body.month,
      remainingFees: req.body.remainingFees,
      address: req.body.address,
      receiver: req.body.receiver,
    });

    const result = await newFee.save();
    res.send(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const feeList = async (req, res) => {
  try {
    let fees = await fee.find({ school: req.params.id });
    if (fees.length > 0) {
      res.send(fees);
    } else {
      res.send({ message: "No fees found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const feeDetail = async (req, res) => {
  try {
    let fees = await fee.findById(req.params.id);
    if (fees) {
      res.send(fees);
    } else {
      res.send({ message: "No fees found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const feeDelete = async (req, res) => {
  try {
    const result = await fee.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = { feeRegister, feeList, feeDetail, feeDelete };
