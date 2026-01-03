const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  const { name, contact_info, status } = req.body;
  try {
    const newCustomer = new Customer({
      name,
      contact_info,
      status,
    });
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

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({
      message: "Customer deleted successfully",
      data: deletedCustomer,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Customer updated successfully",
      data: updatedCustomer,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update customer" });
  }
};
