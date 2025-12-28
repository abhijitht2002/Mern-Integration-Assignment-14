const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    contact_info: String,
    status: { type: String, enum: ["active", "inactive"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
