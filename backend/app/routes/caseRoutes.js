const express = require("express");
const router = express.Router();
const controller = require("../controllers/caseController");
const auth = require("../middleware/checkAuth");

router.post("/cases", auth, controller.createCase);
router.patch("/cases/:id", auth, controller.updateCase);

module.exports = router;
