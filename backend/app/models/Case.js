const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    priority: { type: String, enum: ["low", "medium", "high"] },
    status: { type: String, enum: ["open", "in_progress", "closed"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Case", caseSchema);
