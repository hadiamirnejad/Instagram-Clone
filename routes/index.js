const express = require("express");
const router = express.Router();

router.use("/dashboard", require("./dashboard"));
router.use("/auth", require("./auth"));

module.exports = router;
