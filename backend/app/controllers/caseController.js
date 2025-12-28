const Case = require("../models/Case");

exports.createCase = async (req, res) => {
  const { customer_id, assigned_to, priority, status } = req.body;
  try {
    const newCase = new Case({ customer_id, assigned_to, priority, status });
    await newCase.save();
    res
      .status(201)
      .json({ message: "Case created successfully", data: newCase });
  } catch (err) {
    console.error("Error creating case:", err);
    res.status(500).json({ error: "Failed to create case" });
  }
};

exports.updateCase = async (req, res) => {
  const caseId = req.params.id;
  const { priority, status } = req.body;
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      caseId,
      { priority, status },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Case updated successfully", data: updatedCase });
  } catch (err) {
    console.error("Error updating case:", err);
    res.status(500).json({ error: "Failed to update case" });
  }
};
