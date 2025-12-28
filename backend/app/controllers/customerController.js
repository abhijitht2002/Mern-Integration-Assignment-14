const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  const { name, contact_info, status } = req.body;
  try {
    const newCustomer = new Customer({ name, contact_info, status });
    await newCustomer.save();
    res
      .status(201)
      .json({ message: "Customer created successfully", data: newCustomer });
  } catch (err) {
    res.status(500).json({ error: "Failed to create customer" });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};
