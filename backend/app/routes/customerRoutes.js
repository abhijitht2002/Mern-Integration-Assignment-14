const express = require("express");
const router = express.Router();
const controller = require("../controllers/customerController");
const auth = require("../middleware/checkAuth");

router.post("/customers", auth, controller.createCustomer);
router.get("/customers", auth, controller.getAllCustomers);

module.exports = router;
